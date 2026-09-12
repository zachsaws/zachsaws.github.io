'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PaperJourney from './paper-journey';
import PaperScene from './paper-scene';
import { projects, chapters } from './site-content';
export default function Home() {
  const [active, setActive] = useState('projects'),
    [showCatVideo, setShowCatVideo] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            e.target.classList.add('arrived');
          }
        }),
      { rootMargin: '-18% 0px -42% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((e) => o.observe(e));
    return () => o.disconnect();
  }, []);
  return (
    <div className="site">
      <a className="skip" href="#main">
        跳到正文
      </a>
      <header>
        <a className="brand" href="#top">
          王志成 <small>WANG ZHICHENG</small>
        </a>
        <nav aria-label="主导航">
          <a href="#projects">作品</a>
          <a href="#about">关于</a>
          <a href="#notes">记录</a>
          <a href="#contact">联系</a>
        </nav>
      </header>
      <PaperJourney />
      <main id="main">
        <div className="hero" id="top">
          <div className="hero-copy">
            <div className="identity">
              <span className="avatar">志</span>
              <div>
                你好，我是王志成。<small>教育与消费科技 · 产品与商业 · 北京</small>
              </div>
            </div>
            <p className="kicker">一些做过的事，一些正在发生的故事。</p>
            <h1>
              <span>在习以为常里，</span>
              <span>重新找到可能。</span>
            </h1>
            <p className="lead">把反常识的判断，变成真实的市场结果。</p>
            <p className="intro">
              长期在教育与消费科技领域，把产品、内容与渠道组合起来，寻找新的增长机会。
            </p>
            <div className="actions">
              <a className="paper-button primary" href="#projects">
                看看我做过的事 ↘
              </a>
              <a className="paper-button" href="#about">
                多了解我一点 ↗
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="stamp">
              WANG ZHICHENG
              <br />
              <small>WORK / LIFE / NOTES</small>
            </div>
            <PaperScene
              image="/images/wang-portrait-v1.webp"
              description="绿外套纸片人物"
            />
            <span className="hand">a story in progress.</span>
          </div>
          <div className="hero-foot">
            <span>CREATE. LEARN. KEEP GOING.</span>
            <span>故事还在继续。 ↓</span>
          </div>
        </div>
        <div className="chapters">
          <span className="chapter-caption">▱ 人生的几个切面</span>
          <nav aria-label="页面章节">
            {chapters.map((c, i) => (
              <a
                href={'#' + c.id}
                key={c.id}
                className={active === c.id ? 'active' : ''}
                aria-current={active === c.id ? 'location' : undefined}
              >
                <span>0{i + 1}</span>
                {c.label}
              </a>
            ))}
          </nav>
        </div>
        <section className="spread" id="projects">
          <aside className="scene">
            <PaperScene
              image="/images/wang-work-v1.webp"
              description="坐着使用电脑的纸片人物插画"
            />
            <p className="caption">
              01 — 04
              <br />
              <span>一些投入过的事情。</span>
            </p>
          </aside>
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>做过的事，留下的作品。</h2>
            <p className="section-intro">
              一件产品、一条被打通的渠道、一个被建立的品类，
              也包括一个真正做出来的个人想法。
            </p>
            <div className="projects">
              {projects.map((p, i) => (
                <article
                  className={'project project-' + i}
                  id={p.slug}
                  key={p.name}
                >
                  <i className="tape" />
                  {i === 0 && <span className="featured-mark">代表作</span>}
                  <div className={'cover' + (p.image ? ' product-cover' : '')}>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.imageCaption || p.name}
                        width={1000}
                        height={600}
                        loading="eager"
                        unoptimized
                      />
                    ) : (
                      <>
                        <small>{p.period}</small>
                        <strong>{p.cover}</strong>
                        <span>{p.category}</span>
                      </>
                    )}
                  </div>
                  {p.imageCaption && (
                    <p className="image-credit">{p.imageCaption}</p>
                  )}
                  <div className="meta">
                    0{i + 1}　{p.role}
                  </div>
                  <h3>
                    {p.name}
                    <span>↗</span>
                  </h3>
                  <p className="project-thesis">{p.summary}</p>
                  <div className="result">
                    <strong>{p.result}</strong>
                    <span>{p.label}</span>
                  </div>
                  {p.caseUrl && (
                    <Link className="case-link" href={p.caseUrl}>
                      查看完整案例 ↗
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="spread reverse" id="about">
          <div>
            <p className="eyebrow">02 / MORE ABOUT ME</p>
            <h2>我习惯把事情，再想一遍。</h2>
            <p className="section-intro">
              从小时候拆电脑、意外的求学路线，到今天跑步和养猫，
              我一直在用自己的方式理解世界。
            </p>
            <div className="life-stories">
              <article className="life-story life-story-origin">
                <small>01 / 好奇心的起点</small>
                <h3>把电脑弄坏，是我认识它的方式。</h3>
                <p>
                  小学二年级家里有了电脑。断网以后，我开始逐个删除 C
                  盘文件，再从一次次崩溃和重装里理解系统。后来混杀毒论坛、测试病毒包，
                  还给早期的 360 写过产品建议。
                </p>
              </article>
              <article className="life-story">
                <small>02 / 一条没有被安排好的路</small>
                <h3>我绕过一段弯路，也拉断过韧带。</h3>
                <p>
                  少年时的一次课堂冲突，让我用停止学习来回应不公，也为此付出了代价。
                  后来进入竞技健美操，一次严重的韧带损伤和漫长恢复，
                  让我很早认识了身体的边界、训练的纪律和重新开始。
                </p>
              </article>
            </div>
            <p className="life-afterword">
              后来，我从尊巴老师走到北京创业，再进入教育与消费科技。
              路线并不垂直，但同一种习惯一直都在：重新理解问题，再寻找另一种可能。
            </p>
          </div>
          <aside className="scene">
            <PaperScene
              image="/images/wang-walk-v1.webp"
              description="轻松行走的纸片人物插画"
            />
            <p className="caption">
              02 — 04
              <br />
              <span>认识自己，也认识世界。</span>
            </p>
          </aside>
          <div className="life-moments">
            <article className="life-panel running-panel">
              <div className="life-panel-media">
                <i className="tape" />
                <Image
                  src="/images/life/running-finish-2024.webp"
                  alt="王志成在一场万米跑中张开双臂冲过终点"
                  width={1920}
                  height={1280}
                  unoptimized
                />
                <small>2024 / 跑过终点的瞬间</small>
              </div>
              <div className="life-panel-copy">
                <p className="eyebrow">03 / RUNNING AS MEDITATION</p>
                <h3>很多答案，是跑到后半程才出现的。</h3>
                <p>
                  我跑步时不听歌。身体重复一件足够简单的事，脑子里的噪声会慢慢退下去。
                  对我来说，跑步不是逃离无聊，而是主动经过它，重新获得宁静。
                </p>
              </div>
            </article>
            <article className="life-panel cat-panel">
              <div className="life-panel-media cat-panel-media">
                <i className="tape" />
                {showCatVideo ? (
                  <iframe
                    src="https://player.bilibili.com/player.html?isOutside=true&aid=46307844&bvid=BV11b411H7z3&cid=81133483&p=1&danmaku=0"
                    title="王志成的遛猫视频"
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    className="cat-video-poster"
                    type="button"
                    onClick={() => setShowCatVideo(true)}
                    aria-label="播放王志成的遛猫视频"
                  >
                    <Image
                      src="/images/life/cat-outdoors.webp"
                      alt="一只暹罗猫坐在秋天公园的长椅上"
                      width={1440}
                      height={1080}
                      unoptimized
                    />
                    <span>▶ 播放原视频</span>
                  </button>
                )}
                <small>原图与原视频 / 遛猫的日常</small>
              </div>
              <div className="life-panel-copy">
                <p className="eyebrow">04 / TWO INDEPENDENT LIVES</p>
                <h3>我想让一只猫，自己认识这个世界。</h3>
                <p>
                  我更愿意把它当作朋友。它很小的时候，我就开始带它出门，
                  希望它理解外面的声音、人群和边界，再形成自己的选择。
                  家是一处安定的住所，却不该成为它认识世界的全部。
                </p>
                <a
                  className="life-video-link"
                  href="https://www.bilibili.com/video/BV11b411H7z3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  在哔哩哔哩打开 ↗
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className="spread" id="notes">
          <aside className="scene">
            <PaperScene
              image="/images/wang-notes-v1.webp"
              description="翻阅笔记的纸片人物插画"
            />
            <p className="caption">
              03 — 04
              <br />
              <span>把变化留在这里。</span>
            </p>
          </aside>
          <div>
            <p className="eyebrow">03 / FIELD NOTES</p>
            <h2>把做过的事，继续想下去。</h2>
            <p className="section-intro">
              从产品、渠道与经营实践里留下问题，再把当时的判断写下来。
            </p>
            <div className="note-list">
              <article>
                <small>01 / 教育与增长 · 个人思考</small>
                <Link className="note-link" href="/notes/education-growth">
                  <h3>增长越快，教育产品为什么可能越危险？</h3>
                  <p>
                    流量在标准商品里可以成为乘数，但在重交付的教育里，也可能成为除数。
                    当前端增长快过后端服务，规模反而会加速口碑和信任的消耗。
                  </p>
                  <span>阅读全文 ↗</span>
                </Link>
              </article>
              <article>
                <small>02 / 渠道与组织 · 个人思考</small>
                <Link className="note-link" href="/notes/user-relationships">
                  <h3>渠道增长的下一步，是不是经营用户关系？</h3>
                  <p>
                    流量可以买到，局部策略也会被模仿。更值得沉淀的，是组织识别用户、
                    理解用户，并在更长周期里经营关系的能力。
                  </p>
                  <span>阅读全文 ↗</span>
                </Link>
              </article>
              <article>
                <small>03 / 品类与竞争 · 个人思考</small>
                <Link className="note-link" href="/notes/category-share">
                  <h3>做大一个品类，为什么不能只追求最高份额？</h3>
                  <p>
                    当领先者拿走过多份额，同行停止投入，整个品类也可能失去活力。
                    真正长期的市场，需要更多玩家进入、持续投入，并且一起赚到钱。
                  </p>
                  <span>阅读全文 ↗</span>
                </Link>
              </article>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <p className="eyebrow">04 / SAY HELLO</p>
          <div className="letter">
            <span className="corner">↗</span>
            <h2>如果你也在重新想一件事，欢迎来找我。</h2>
            <p>
              产品、教育、消费科技、AI，或者一件值得认真做出来的事。
              也可以只是聊聊跑步和猫。
            </p>
            <div className="contact-links">
              <a className="contact-primary" href="mailto:zachsaws@gmail.com">
                zachsaws@gmail.com ↗
              </a>
              <a
                className="contact-secondary"
                href="https://github.com/zachsaws"
                target="_blank"
                rel="noreferrer"
              >
                GitHub · zachsaws ↗
              </a>
            </div>
            <small className="letter-closing">很高兴，在这里认识你。</small>
            <span className="signature">王志成</span>
          </div>
        </section>
        <footer>
          <span>王志成 · 一直在路上。</span>
          <a href="#top">回到开头 ↑</a>
        </footer>
      </main>
    </div>
  );
}
