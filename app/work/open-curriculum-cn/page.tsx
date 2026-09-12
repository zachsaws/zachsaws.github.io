import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CaseNext from '../case-next';

export const metadata: Metadata = {
  title: '中国 K12 新课标知识图谱｜王志成',
  description:
    '王志成独立发起并构建的中国 K12 学习路径图谱：从知识卡点出发，把前置关系、诊断与补学路径做成公开产品。',
};

const productViews = [
  {
    image: '/images/products/open-curriculum/diagnose.webp',
    step: '01 / DIAGNOSE',
    title: '先判断卡在哪里',
    copy: '用一组短题定位当前概念的掌握情况，而不是让用户自己猜问题。',
  },
  {
    image: '/images/products/open-curriculum/funnel.webp',
    step: '02 / TRACE BACK',
    title: '再向前追溯缺口',
    copy: '沿着前置关系回看：学会这个知识点之前，究竟需要先会什么。',
  },
  {
    image: '/images/products/open-curriculum/explore.webp',
    step: '03 / SEE THE SYSTEM',
    title: '把路径放回全局',
    copy: '在完整知识网络里看见这一处卡点的位置，以及接下来可以走向哪里。',
  },
];

export default function OpenCurriculumCase() {
  return (
    <div className="case-page open-case">
      <a className="skip" href="#case-main">
        跳到案例
      </a>
      <header className="case-header">
        <Link className="brand" href="/">
          王志成 <small>WANG ZHICHENG</small>
        </Link>
        <Link className="back-link" href="/#projects">
          返回作品 ↙
        </Link>
      </header>

      <main className="case-main" id="case-main">
        <section className="case-hero open-case-hero">
          <div className="case-hero-copy">
            <p className="eyebrow">SELECTED WORK 04 / 独立产品 · 教育 × AI</p>
            <p className="open-product-name">
              中国 K12 新课标知识图谱
              <small>OPEN CURRICULUM CN</small>
            </p>
            <h1>找到之前<br />漏了哪一步。</h1>
            <p className="case-title">
              孩子说“不会”，问题可能不在眼前这一题。
            </p>
            <p className="case-lede">
              我独立发起并构建了一张中国 K12 学习路径图谱：从一个知识卡点出发，
              看见学之前要会什么、学之后能学什么，再把诊断与补学路径接起来。
            </p>
            <div className="open-cta">
              <a href="https://zachsaws.github.io/open-curriculum-cn/" target="_blank" rel="noreferrer">
                体验产品 ↗
              </a>
              <a href="https://github.com/zachsaws/open-curriculum-cn" target="_blank" rel="noreferrer">
                查看 GitHub ↗
              </a>
            </div>
          </div>
          <a
            className="open-hero-visual"
            href="https://zachsaws.github.io/open-curriculum-cn/"
            target="_blank"
            rel="noreferrer"
            aria-label="打开 Open Curriculum CN 产品"
          >
            <i className="tape" />
            <Image
              src="/images/products/open-curriculum/home.webp"
              alt="Open Curriculum CN 产品首页"
              width={1440}
              height={900}
              priority
              unoptimized
            />
            <span>真实产品界面 / 点击体验 ↗</span>
          </a>
        </section>

        <section className="case-facts open-facts" aria-label="项目概况">
          <div>
            <small>ROLE</small>
            <strong>独立发起与构建</strong>
            <p>问题定义、信息架构、产品设计、数据整理与公开发布</p>
          </div>
          <div>
            <small>KNOWLEDGE SCOPE</small>
            <strong>14 学科 · 1,906 概念</strong>
            <p>依据公开仓库当前版本，按中国 2022 义务教育课标组织</p>
          </div>
          <div>
            <small>LEARNING SYSTEM</small>
            <strong>4,736 条学习路径</strong>
            <p>并连接 9,000+ 道诊断与练习题，开放访问与使用</p>
          </div>
        </section>

        <section className="case-section open-problem">
          <p className="eyebrow">01 / THE USER PROBLEM</p>
          <div className="case-section-grid">
            <h2>我们看见了错题，却不一定看见真正的缺口。</h2>
            <div className="case-prose">
              <p>
                孩子卡在分数除法，问题可能来自更早的分数意义；卡在一元二次方程，
                也可能是一次方程或因式分解没有真正掌握。眼前的题，只是问题出现的位置。
              </p>
              <p>
                传统目录告诉用户“这一章学什么”，搜索告诉用户“这道题怎么做”，
                但家长和孩子真正需要回答的是：为什么会卡住，应该先回到哪一步？
              </p>
              <p className="case-quote">
                产品的起点不是做一张更大的知识图，而是把“之前漏了哪一步”变成一次可以完成的行动。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section open-positioning">
          <p className="eyebrow">02 / PRODUCT POSITIONING</p>
          <div className="open-positioning-line">
            <small>ONE-LINE PROMISE</small>
            <h2>从“不会这一题”，到“知道先补哪里”。</h2>
          </div>
          <div className="open-message-stack">
            <article>
              <span>01</span>
              <div>
                <strong>入口是卡点</strong>
                <p>用户不需要理解知识图谱，只需要从一个不会的知识点开始。</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <strong>核心是诊断</strong>
                <p>用少量问题判断当下掌握情况，把模糊的“不会”变成具体缺口。</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <strong>结果是下一步</strong>
                <p>沿前置关系给出补学方向，让用户知道从哪里重新开始。</p>
              </div>
            </article>
          </div>
        </section>

        <section className="case-section open-product-section">
          <p className="eyebrow">03 / HOW THE PRODUCT WORKS</p>
          <div className="case-section-heading">
            <h2>三步，把知识关系变成用户路径。</h2>
            <p>
              3D 球体负责让人感知知识系统的广度；真正完成用户任务的，是诊断、追溯与补学之间的连接。
            </p>
          </div>
          <div className="open-product-gallery">
            {productViews.map((view) => (
              <article key={view.step}>
                <div className="open-product-shot">
                  <Image
                    src={view.image}
                    alt={`Open Curriculum CN：${view.title}`}
                    width={1440}
                    height={900}
                    unoptimized
                  />
                </div>
                <small>{view.step}</small>
                <strong>{view.title}</strong>
                <p>{view.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section open-build-section">
          <p className="eyebrow">04 / FROM SOURCE TO PRODUCT</p>
          <div className="case-section-grid">
            <h2>让产品的每一层，都能回到来源。</h2>
            <div className="case-prose">
              <p>
                数据从教育部 2022 年义务教育课程方案和课程标准出发，经文档识别、结构化整理与关系组织，
                再进入概念解释、题目、视频和交互界面。
              </p>
              <p>
                AI 用于加速内容补充和产品构建，但它不自动等于正确。
                因此公开来源、可追溯关系与持续校订，比“用了 AI”本身更能建立产品信任。
              </p>
            </div>
          </div>
          <ol className="open-build-flow">
            <li><small>01</small><strong>官方课标</strong><span>确定学科与内容边界</span></li>
            <li><small>02</small><strong>概念结构</strong><span>拆分知识点与前置关系</span></li>
            <li><small>03</small><strong>内容增强</strong><span>补充解释、题目与资源</span></li>
            <li><small>04</small><strong>交互产品</strong><span>诊断、追溯、练习与探索</span></li>
            <li><small>05</small><strong>公开发布</strong><span>开放访问、仓库与反馈</span></li>
          </ol>
        </section>

        <section className="case-section open-market-section">
          <p className="eyebrow">05 / PRODUCT MARKETING</p>
          <div className="case-section-heading">
            <h2>先卖“找到缺口”，再解释背后的知识图谱。</h2>
            <p>
              用户购买的不是一套数据结构，而是更少的盲目补课、更清楚的学习起点，以及一条可以继续走的路径。
            </p>
          </div>
          <div className="open-marketing-grid">
            <article>
              <small>HOOK</small>
              <strong>孩子卡住时，前面到底漏了哪一步？</strong>
              <p>用真实焦虑建立入口，让家长和学生立刻知道产品与自己有什么关系。</p>
            </article>
            <article>
              <small>PROMISE</small>
              <strong>用一次短诊断，找到应该先补的知识点。</strong>
              <p>把抽象能力缩成一个可理解、可体验、可完成的产品承诺。</p>
            </article>
            <article>
              <small>PROOF</small>
              <strong>14 学科、1,906 个概念、4,736 条路径。</strong>
              <p>用系统覆盖与真实产品界面证明这不是一张概念图，而是已公开运行的产品。</p>
            </article>
            <article>
              <small>TRUST</small>
              <strong>课标来源、开放仓库、可追溯结构。</strong>
              <p>让使用者能够核查来源，也让教育工作者和开发者可以继续改进。</p>
            </article>
          </div>
        </section>

        <section className="case-reflection open-reflection">
          <p className="eyebrow">06 / WHAT THIS WORK SHOWS</p>
          <h2>从一个真实问题出发，把判断独立做成公开产品。</h2>
          <p>
            这个项目延续了我在工作中的同一种习惯：不接受“大家一直这样做”作为答案，
            重新定义真正的问题，再把内容、产品与技术组织成用户能够使用的解决方案。
          </p>
          <p className="case-boundary">
            边界说明：页面中的学科、概念与路径数量来自当前公开项目；本项目已经公开发布，
            但尚未以用户规模、学习效果或商业化收入证明结果，因此这些不作为本案例的成果主张。
          </p>
          <div className="open-reflection-links">
            <a href="https://zachsaws.github.io/open-curriculum-cn/" target="_blank" rel="noreferrer">体验产品 ↗</a>
            <a href="https://github.com/zachsaws/open-curriculum-cn" target="_blank" rel="noreferrer">查看源代码 ↗</a>
          </div>
        </section>
        <CaseNext index="01" title="学而思学习机" href="/work/xes-learning-device" />
      </main>
    </div>
  );
}
