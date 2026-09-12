import activity from './data/flomo-activity.json';

const ONE_DAY = 86_400_000;

function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function dateKey(value: Date) {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addDays(value: Date, amount: number) {
  return new Date(value.getTime() + amount * ONE_DAY);
}

function mondayIndex(value: Date) {
  return (value.getDay() + 6) % 7;
}

function activityLevel(count: number) {
  if (!count) return 0;
  const thresholds = activity.levelThresholds;
  let level = 1;
  thresholds.forEach((threshold, index) => {
    if (count >= threshold) level = index + 1;
  });
  return level;
}

export default function FlomoHeatmap() {
  const start = parseDate(activity.startDate);
  const end = parseDate(activity.endDate);
  const gridStart = addDays(start, -mondayIndex(start));
  const gridEnd = addDays(end, 6 - mondayIndex(end));
  const cellCount = Math.round((gridEnd.getTime() - gridStart.getTime()) / ONE_DAY) + 1;
  const weekCount = cellCount / 7;
  const cells = Array.from({ length: cellCount }, (_, index) => {
    const day = addDays(gridStart, index);
    const key = dateKey(day);
    const outside = day < start || day > end;
    const count = outside ? 0 : (activity.days[key as keyof typeof activity.days] ?? 0);
    return { day, key, outside, count };
  });
  const months = cells.reduce<Array<{ key: string; label: string; column: number }>>((result, cell, index) => {
    if (cell.outside || (cell.day.getDate() > 7 && cell.key !== activity.startDate)) return result;
    const key = `${cell.day.getFullYear()}-${cell.day.getMonth()}`;
    const label = `${cell.day.getMonth() + 1}月`;
    if (!result.some((month) => month.key === key)) {
      result.push({ key, label, column: Math.floor(index / 7) + 1 });
    }
    return result;
  }, []);

  return (
    <section className="flomo-activity" aria-labelledby="flomo-activity-title">
      <div className="activity-heading">
        <div>
          <p className="activity-kicker">FLOMO / 最近 365 天</p>
          <h3 id="flomo-activity-title">一些想法，先从一条记录开始。</h3>
        </div>
        <span>截至 {activity.generatedAt.replaceAll('-', '.')}</span>
      </div>
      <div className="activity-stats" aria-label="最近一年记录统计">
        <p>
          <strong>{activity.windowMemos}</strong>
          <span>条记录</span>
        </p>
        <p>
          <strong>{activity.activeDays}</strong>
          <span>个记录日</span>
        </p>
        <p>
          <strong>{activity.longestStreak}</strong>
          <span>天 · 最长连续</span>
        </p>
      </div>
      <div className="activity-chart-wrap">
        <div
          className="activity-months"
          style={{ gridTemplateColumns: `repeat(${weekCount}, minmax(0, 1fr))` }}
          aria-hidden="true"
        >
          {months.map((month) => (
            <span key={month.key} style={{ gridColumn: month.column }}>
              {month.label}
            </span>
          ))}
        </div>
        <figure className="activity-figure">
          <figcaption className="activity-sr-only">
            从 {activity.startDate} 到 {activity.endDate} 的 flomo 记录热力图
          </figcaption>
          <div
            className="activity-grid"
            style={{ gridTemplateColumns: `repeat(${weekCount}, minmax(0, 1fr))` }}
          >
            {cells.map((cell) => (
              <span
                key={cell.key}
                className={`activity-cell level-${activityLevel(cell.count)}${cell.outside ? ' outside' : ''}`}
                title={cell.outside ? undefined : `${cell.key} · ${cell.count} 条记录`}
                aria-hidden="true"
              />
            ))}
          </div>
        </figure>
      </div>
      <div className="activity-foot">
        <span>
          自 {activity.firstMemoDate.slice(0, 7).replace('-', '.')} 起，累计 {activity.allTimeMemos} 条记录
        </span>
        <span className="activity-legend" aria-hidden="true">
          少
          {[0, 1, 2, 3, 4, 5].map((level) => (
            <i key={level} className={`level-${level}`} />
          ))}
          多
        </span>
      </div>
    </section>
  );
}
