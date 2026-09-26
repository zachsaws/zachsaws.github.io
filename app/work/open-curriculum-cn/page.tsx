import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CaseNext from '../case-next';

export const metadata: Metadata = {
  title: '中国 K12 新课标知识图谱｜王志成',
  description:
    '王志成独立发起并构建的中国 K12 知识地图：探索概念关系、阅读讲解与练习自测的公开产品实验。',
};

const curriculumUrl = process.env.NEXT_PUBLIC_CURRICULUM_URL || 'https://zachsaws.github.io/open-curriculum-cn/';

const productViews = [
  {
    image: '/images/products/open-curriculum/diagnose.webp',
    step: '01 / PRACTICE',
    title: '做几道题，对照答案',
    copy: '查看这一组题的作答表现，再对照参考答案；不将结果当作正式诊断。',
  },
  {
    image: '/images/products/open-curriculum/funnel.webp',
    step: '02 / TRACE BACK',
    title: '从一个知识点，找到相关概念',
    copy: '看看前置、进阶与相关概念；这些关系仍待教育专业人员校验。',
  },
  {
    image: '/images/products/open-curriculum/explore.webp',
    step: '03 / SEE THE SYSTEM',
    title: '换个学科，继续探索',
    copy: '在知识网络里找到这一概念的位置，从兴趣出发继续探索。',
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
              <small>免费体验 · 开源项目</small>
            </p>
            <h1>把课标，变成一张<br />可以探索的地图。</h1>
            <p className="case-title">
              好用的学习工具，应该有更多人用得上。
            </p>
            <p className="case-lede">
              这是我出于兴趣发起的开源实验。结合教育行业的经验和对 AI 能力的理解，
              我想试试：原本装在学习机里的「精准学」，能不能免费开放给更多人？
              当前版本已经可以探索知识关系、阅读讲解与做练习，完整的学习诊断仍在探索中。
            </p>
            <div className="open-cta">
              <a href={curriculumUrl} target="_blank" rel="noreferrer">
                免费打开知识地图 ↗
              </a>
              <a href="https://github.com/zachsaws/open-curriculum-cn" target="_blank" rel="noreferrer">
                查看 GitHub ↗
              </a>
            </div>
          </div>
          <a
            className="open-hero-visual"
            href={curriculumUrl}
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
            <span>打开地图，开始探索 ↗</span>
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
            <strong>4,736 条知识关系</strong>
            <p>包含 AI 辅助整理的练习题；关系与题目仍需教育专业人员校验</p>
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
                产品的起点不是做一张更大的知识图，而是让知识之间的关系成为可以探索的线索。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section open-positioning">
          <p className="eyebrow">02 / PRODUCT POSITIONING</p>
          <div className="open-positioning-line">
            <small>产品想法</small>
            <h2>从一个知识点，走向它相连的世界。</h2>
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
                <strong>练习是自测</strong>
                <p>用练习观察这组题的作答情况，不把少量题目等同于完整的掌握诊断。</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <strong>关系是线索</strong>
                <p>呈现前置、进阶与相关关系；未经专业复核的关系不作为确定的补学结论。</p>
              </div>
            </article>
          </div>
        </section>

        <section className="case-section open-product-section">
          <p className="eyebrow">03 / HOW THE PRODUCT WORKS</p>
          <div className="case-section-heading">
            <h2>三步，把知识关系变成用户路径。</h2>
            <p>
              3D 球体负责让人感知知识系统的广度；概念讲解、知识关系与练习，让探索有了具体的落点。
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
            <li><small>04</small><strong>交互产品</strong><span>关系、讲解、练习与探索</span></li>
            <li><small>05</small><strong>公开发布</strong><span>开放访问、仓库与反馈</span></li>
          </ol>
        </section>

        <section className="case-section open-market-section">
          <p className="eyebrow">05 / PRODUCT DECISIONS</p>
          <div className="case-section-heading">
            <h2>把可以探索的部分做好，把尚未证明的部分说清。</h2>
            <p>
              这是一个公开的产品实验：先让知识关系可见，再检验它是否真正有助于理解与学习。
            </p>
          </div>
          <div className="open-marketing-grid">
            <article>
              <small>探索入口</small>
              <strong>先看全貌，再从感兴趣的概念进入。</strong>
              <p>把球体、学科和知识点关系接成一条连续的探索路径。</p>
            </article>
            <article>
              <small>练习边界</small>
              <strong>做几道题，观察这一组的表现。</strong>
              <p>AI 辅助题目仍待审核；自测结果不代表完整能力评估。</p>
            </article>
            <article>
              <small>数据边界</small>
              <strong>规模不是学习效果的证明。</strong>
              <p>公开结构方便核查与改进，概念和关系的准确性仍需要持续验证。</p>
            </article>
            <article>
              <small>内容来源</small>
              <strong>公开链接，不等于内容已经开源。</strong>
              <p>讲解视频链接到原平台，版权归原作者；开源范围以仓库许可证为准。</p>
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
            边界说明：页面中的学科、概念与关系数量来自当前公开项目；本项目已经公开发布，
            但尚未以用户规模、学习效果或商业化收入证明结果，因此这些不作为本案例的成果主张。
          </p>
          <div className="open-reflection-links">
            <a href={curriculumUrl} target="_blank" rel="noreferrer">体验产品 ↗</a>
            <a href="https://github.com/zachsaws/open-curriculum-cn" target="_blank" rel="noreferrer">查看源代码 ↗</a>
          </div>
        </section>
        <CaseNext index="01" title="学而思学习机" href="/work/xes-learning-device" />
      </main>
    </div>
  );
}
