#!/usr/bin/env python3
"""Create privacy-safe activity data from a flomo HTML export ZIP."""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from datetime import date, datetime, timedelta
from html.parser import HTMLParser
from pathlib import Path
from zipfile import ZipFile


class FlomoTimeParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.timestamps: list[str] = []
        self._capture_depth = 0
        self._buffer: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if self._capture_depth:
            self._capture_depth += 1
            return
        classes = (dict(attrs).get("class") or "").split()
        if "time" in classes:
            self._capture_depth = 1
            self._buffer = []

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        return

    def handle_data(self, data: str) -> None:
        if self._capture_depth:
            self._buffer.append(data)

    def handle_endtag(self, tag: str) -> None:
        if not self._capture_depth:
            return
        self._capture_depth -= 1
        if self._capture_depth == 0:
            value = " ".join("".join(self._buffer).split())
            if re.fullmatch(r"20\d{2}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}", value):
                self.timestamps.append(value)
            self._buffer = []


def export_date_from_filename(path: Path) -> date:
    match = re.search(r"(20\d{6})", path.name)
    if not match:
        raise ValueError("ZIP filename must contain its export date as YYYYMMDD")
    return datetime.strptime(match.group(1), "%Y%m%d").date()


def longest_streak(counts: Counter[date], start: date, end: date) -> int:
    longest = current = 0
    day = start
    while day <= end:
        current = current + 1 if counts[day] else 0
        longest = max(longest, current)
        day += timedelta(days=1)
    return longest


def build_activity(archive: Path) -> dict[str, object]:
    with ZipFile(archive) as zipped:
        html_files = [
            item
            for item in zipped.infolist()
            if not item.is_dir() and Path(item.filename).suffix.lower() in {".html", ".htm"}
        ]
        if len(html_files) != 1:
            raise ValueError(f"Expected one HTML export, found {len(html_files)}")
        parser = FlomoTimeParser()
        parser.feed(zipped.read(html_files[0]).decode("utf-8", "replace"))

    timestamps = [datetime.strptime(value, "%Y-%m-%d %H:%M:%S") for value in parser.timestamps]
    if not timestamps:
        raise ValueError("No flomo timestamps found")

    exported_on = export_date_from_filename(archive)
    start = exported_on - timedelta(days=364)
    all_counts = Counter(timestamp.date() for timestamp in timestamps)
    window_counts = Counter(
        {day: count for day, count in all_counts.items() if start <= day <= exported_on}
    )

    return {
        "source": "flomo export",
        "generatedAt": exported_on.isoformat(),
        "startDate": start.isoformat(),
        "endDate": exported_on.isoformat(),
        "windowDays": 365,
        "windowMemos": sum(window_counts.values()),
        "activeDays": len(window_counts),
        "longestStreak": longest_streak(window_counts, start, exported_on),
        "allTimeMemos": len(timestamps),
        "firstMemoDate": min(timestamps).date().isoformat(),
        "lastMemoDate": max(timestamps).date().isoformat(),
        "levelThresholds": [1, 2, 3, 4, 7],
        "days": {day.isoformat(): window_counts[day] for day in sorted(window_counts)},
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("archive", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    activity = build_activity(args.archive)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(activity, ensure_ascii=False, indent=2) + "\n")
    print(
        f"Generated {args.output}: {activity['windowMemos']} memos across "
        f"{activity['activeDays']} active days. No memo content was retained."
    )


if __name__ == "__main__":
    main()
