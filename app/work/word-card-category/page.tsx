import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CaseNext from '../case-next';

export const metadata: Metadata = {
  title: '作业帮单词卡：从一个产品到一个品类｜王志成',
  description: '王志成操盘作业帮单词卡从零到一的品类建立案例。',
};

export default function WordCardCategoryCase() {
  return (
    <div className="case-page word-card-case">
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
        <section className="case-hero">
          <div className="case-hero-copy">
            <p className="eyebrow">SELECTED WORK 03 / 品类建立 · 渠道经营</p>
            <h1>从产品，到品类。</h1>
            <p className="case-title">新品上市初期，营销的优先级可以高于即时销量。</p>
            <p className="case-lede">
              在作业帮，我亲自操盘单词卡从 0 到 1：先让足够多的人体验和谈论它，
              再用低价格带、渠道关系与产品内容投入建立长期位置。
            </p>
          </div>
          <div className="case-hero-visual word-card-hero-visual">
            <i className="tape" />
            <Image
              src="/images/products/word-card-cutout-v1.png"
              alt="喵喵单词卡大屏触控版"
              width={1600}
              height={1200}
              priority
              unoptimized
            />
            <span>产品形态示意 / 后续大屏触控型号，不代表初代低价款</span>
          </div>
        </section>

        <section className="case-facts" aria-label="案例概况">
          <div>
            <small>ROLE</small>
            <strong>品类从 0 到 1 操盘</strong>
            <p>市场判断、首发策略、达人渠道动作与长期竞争基础</p>
          </div>
          <div>
            <small>SPEED</small>
            <strong>三个月</strong>
            <p>据本人操盘回顾，快速完成新品类从 0 到 1</p>
          </div>
          <div>
            <small>PEAK</small>
            <strong>10 万台+</strong>
            <p>据本人操盘回顾，单月销量峰值</p>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">01 / A PREVIOUS LESSON</p>
          <div className="case-section-grid">
            <h2>份额超过 70%，为什么品类反而萎缩？</h2>
            <div className="case-prose">
              <p>
                在单词卡之前，我们曾经操盘过错题打印机。
                据我的业务回顾，我们一度占据超过 70% 的市场份额。
                从单一品牌的角度看，这是非常漂亮的结果。
              </p>
              <p>
                但当老二、老三发现很难获得合理回报，他们就不再愿意继续投入营销和研发。
                市场上讨论产品的人少了，改善产品的人也少了，
                领先者拥有很高份额，整个品类却逐渐失去增长动力。
              </p>
              <p className="case-quote">
                对新市场来说，竞争者不只是在分蛋糕，也在共同证明：这里值得成为一个市场。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section word-card-opportunity">
          <p className="eyebrow">02 / THE OPPORTUNITY</p>
          <div className="case-section-heading">
            <h2>为什么单词卡适合先做热度？</h2>
            <p>
              当时我的判断来自产品与渠道的共同特征：它容易体验、容易解释，
              也适合达人用已有私域流量快速验证。
            </p>
          </div>
          <div className="opportunity-cards">
            <article>
              <small>01</small>
              <strong>需求明确</strong>
              <p>背单词是一个具体、长期存在的学习问题，用户容易理解产品为什么有用。</p>
            </article>
            <article>
              <small>02</small>
              <strong>决策门槛低</strong>
              <p>初期进入较低价格带，用户和内容渠道都更容易尝试一个新产品。</p>
            </article>
            <article>
              <small>03</small>
              <strong>寄样成本可控</strong>
              <p>产品成本较低，可以先扩大真实体验，再从反馈中筛选合作对象。</p>
            </article>
            <article>
              <small>04</small>
              <strong>渠道需要新品</strong>
              <p>达人和公众号通过持续更换产品经营私域，天然愿意测试容易讲清楚的新品。</p>
            </article>
          </div>
        </section>

        <section className="case-section case-decision word-card-decision">
          <p className="eyebrow">03 / THE DECISION</p>
          <div className="case-section-grid">
            <h2>先让市场看起来很热，再追求每一次寄样的销量。</h2>
            <div className="case-prose">
              <p>
                新品上市初期，我把营销触达放在即时销量之前。
                货架电商适合长期经营，达人和公众号更适合在短期内集中制造讨论。
                两类渠道承担的任务并不相同。
              </p>
              <p>
                我们先围绕整个教育领域扩大寄样，让更多账号真实拿到产品。
                合作不是寄样的前置条件：愿意带货的再深入沟通，愿意写文章的再讨论内容费用，
                暂时不合作的也可以保留产品。
              </p>
              <p>
                这套动作首先追求的是让市场开始谈论单词卡，
                让用户、渠道和潜在参与者都看见一个正在形成的新产品方向。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">04 / THE PLAYBOOK</p>
          <div className="case-section-heading">
            <h2>把一次想法，变成每月重复执行的动作。</h2>
            <p>
              执行标准必须足够简单，才能让团队快速覆盖市场，
              同时把高意愿对象逐步筛选出来。
            </p>
          </div>
          <div className="seeding-flow" aria-label="教育账号寄样和合作流程">
            <div>
              <small>01 / LIST</small>
              <strong>筛选账号</strong>
              <p>将教育领域阅读量超过 500 的账号按顺序整理。</p>
            </div>
            <b>→</b>
            <div>
              <small>02 / SEED</small>
              <strong>持续寄送</strong>
              <p>形成每月下发要求，让销售团队持续把产品送出去。</p>
            </div>
            <b>→</b>
            <div>
              <small>03 / CONVERT</small>
              <strong>按意愿跟进</strong>
              <p>愿意带货就谈带货，愿意发文再讨论内容合作。</p>
            </div>
          </div>
        </section>

        <section className="case-section word-card-result-section">
          <p className="eyebrow">05 / SPEED & RESULT</p>
          <div className="word-card-result-grid">
            <div>
              <small>FROM 0 TO 1</small>
              <strong>3 个月</strong>
              <p>快速完成新品类起量</p>
            </div>
            <div>
              <small>MONTHLY PEAK</small>
              <strong>10 万台+</strong>
              <p>单月销量峰值</p>
            </div>
          </div>
          <p className="result-boundary">
            上述时间与销量来自本人操盘回顾，用于呈现该项目的增长速度与经营结果；
            当前没有第三方公开材料能够独立核验，因此不作为外部市场统计口径。
          </p>
        </section>

        <section className="case-section">
          <p className="eyebrow">06 / BUILDING THE MOAT</p>
          <div className="case-section-grid">
            <h2>热度只是开场，长期位置要靠三种积累。</h2>
            <div className="case-prose">
              <h3>占领低价格带</h3>
              <p>
                作业帮当时没有天然的背单词心智，因此先用更低的决策门槛进入市场；
                已有背词心智的品牌可以选择更高价格带，形成不同定位。
              </p>
              <h3>建立渠道关系</h3>
              <p>
                在大量白牌进入之前，让教育达人和内容渠道已经体验、理解并表达过产品，
                这些关系会成为后续竞争的基础。
              </p>
              <h3>把内容做进产品</h3>
              <p>
                营销内容能够建立认知，真正长期的内容资产仍然属于产品：
                围绕背单词持续投入研发，让产品回答用户为什么长期使用。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section word-card-market-section">
          <p className="eyebrow">07 / GROWING THE CATEGORY</p>
          <div className="case-section-grid">
            <h2>真正的目标，是让更多玩家进来，而且都能赚到钱。</h2>
            <div className="case-prose">
              <p>
                错题打印机的经历让我意识到，新品类早期不能只看谁拿走了最多份额。
                如果其他参与者没有利润、停止投入，最终失去活力的是整个市场。
              </p>
              <p>
                因此，单词卡需要让更多玩家看到机会，同时控制领先者的份额冲动。
                大家用不同产品和价格带共同教育市场、持续研发，
                品类才有机会从一次爆发变成长期生意。
              </p>
              <Link className="case-source-link" href="/notes/category-share">
                阅读延伸思考：为什么不能只追求最高份额？ ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="case-reflection word-card-reflection">
          <p className="eyebrow">08 / WHAT THIS WORK SHOWS</p>
          <h2>我操盘的不只是一个产品上市，而是一个市场如何开始形成。</h2>
          <p>
            从产品与渠道特征中判断机会，用大规模寄样快速制造市场讨论，
            再用价格带、渠道关系与产品内容投入建立长期竞争基础。
          </p>
          <p className="case-boundary">
            边界说明：三个月起量、单月突破十万台及错题打印机份额来自本人操盘回顾；
            页面所用图片为后续大屏触控型号，仅用于呈现单词卡产品形态。
          </p>
          <a
            href="https://smart.zuoyebang.com/eduWordCard"
            target="_blank"
            rel="noreferrer"
          >
            查看官方产品介绍 ↗
          </a>
        </section>
        <CaseNext index="04" title="找到之前漏了哪一步。" href="/work/open-curriculum-cn" />
      </main>
    </div>
  );
}
