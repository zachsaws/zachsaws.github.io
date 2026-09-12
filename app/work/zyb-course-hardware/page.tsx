import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CaseNext from '../case-next';

export const metadata: Metadata = {
  title: '作业帮课程 × 硬件：建立一条新的销售通路｜王志成',
  description: '王志成将学习笔嵌入直播课场景，推动新渠道从零到一的代表案例。',
};

export default function ZybCourseHardwareCase() {
  return (
    <div className="case-page zyb-case">
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
            <p className="eyebrow">SELECTED WORK 02 / 新渠道 · 用户转化</p>
            <h1 className="zyb-case-heading">课程 ×<br />硬件</h1>
            <p className="case-title">用户是来买课的，硬件应该怎样进入同一个需求？</p>
            <p className="case-lede">
              在作业帮担任新零售渠道负责人期间，我把学习笔引入 LPC 私域直播课链路，
              推动一条新的硬件销售通路从试点走向规模化。
            </p>
          </div>
          <div className="case-hero-visual zyb-hero-visual">
            <i className="tape" />
            <Image
              src="/images/products/zyb-learning-pen-white-v1.webp"
              alt="作业帮全科学习笔二代"
              width={1586}
              height={992}
              priority
              unoptimized
            />
            <span>当时主要售卖的产品形态 / 作业帮全科学习笔</span>
          </div>
        </section>

        <section className="case-facts" aria-label="案例概况">
          <div>
            <small>ROLE</small>
            <strong>新零售渠道负责人</strong>
            <p>渠道机会判断、方案设计与从试点到规模化推动</p>
          </div>
          <div>
            <small>CHANNEL</small>
            <strong>LPC 私域直播课</strong>
            <p>在授课与转化链路中，引入原本没有稳定通路的硬件产品</p>
          </div>
          <div>
            <small>RESULT</small>
            <strong>1 亿+</strong>
            <p>据本人操盘回顾，新渠道上线首年 GMV</p>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">01 / THE SITUATION</p>
          <div className="case-section-grid">
            <h2>一条为课程建立的链路，能不能卖硬件？</h2>
            <div className="case-prose">
              <p>
                LPC 是在私域直播课中完成授课与转化的链路。用户进入这里，
                原本是为了了解和购买课程；老师和销售熟悉的也是如何讲清课程价值。
              </p>
              <p>
                硬件从零到一时，真正稀缺的不只是一个产品，而是一条能够稳定解释它、
                让用户理解它为什么有用，并最终完成购买的通路。
                当时，学习笔并没有天然存在于这条课程链路中。
              </p>
              <p className="case-quote">
                问题不是“能不能把硬件放进直播间”，而是用户为什么会在买课的场景里接受一支学习笔。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section zyb-problem-section">
          <p className="eyebrow">02 / THE PROBLEM</p>
          <div className="case-section-grid">
            <h2>一件事就是一件事，很难同时说清楚两件事。</h2>
            <div className="case-prose">
              <p>
                如果在同一次沟通里，一边解释课程体系，一边重新介绍一件硬件，
                用户需要同时理解两套价值。信息越完整，反而越容易失去重点。
              </p>
              <p>
                这也是我对转化效率的一个基本判断：最好的转化点通常来自单点耦合。
                不是把两个商品并排讲清楚，而是让它们共同回答同一个具体问题。
              </p>
            </div>
          </div>
          <div className="coupling-contrast" aria-label="两种产品表达方式对比">
            <div className="coupling-card coupling-before">
              <small>BEFORE / 两条叙事</small>
              <div>
                <strong>课程</strong>
                <b>＋</b>
                <strong>学习笔</strong>
              </div>
              <p>用户需要同时理解两件商品。</p>
            </div>
            <span>→</span>
            <div className="coupling-card coupling-after">
              <small>AFTER / 一个需求</small>
              <strong>解决学习问题</strong>
              <p>课程是主线，学习笔成为解决方案的一部分。</p>
            </div>
          </div>
        </section>

        <section className="case-section case-decision zyb-decision">
          <p className="eyebrow">03 / THE DECISION</p>
          <div className="case-section-grid">
            <h2>围绕课来讲，把硬件包进解决方案。</h2>
            <div className="case-prose">
              <p>
                用户原本就是为课程而来，所以主叙事仍然应该是课。
                学习笔不需要成为另一场独立推销，而要在课程解决的学习问题中承担一个清楚、具体的角色。
              </p>
              <p>
                这样做，用户不必在一次沟通里做两次价值判断。
                他先理解课程要解决什么问题，再自然理解硬件怎样帮助这个方案完成得更好。
                产品组合也由“课程加赠一件设备”，变成围绕同一需求组织的整体方案。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">04 / FROM PILOT TO SCALE</p>
          <div className="case-section-heading">
            <h2>从找到转化点，到建立新通路。</h2>
            <p>
              下面是根据本人对这段实践的复盘，提炼出的四个关键步骤；
              它们表达经营逻辑，不等同于完整项目排期。
            </p>
          </div>
          <ol className="case-steps">
            <li>
              <small>01</small>
              <strong>回到原有场景</strong>
              <p>先理解用户为什么进入直播课，以及他此刻真正想解决的学习问题。</p>
            </li>
            <li>
              <small>02</small>
              <strong>寻找单点耦合</strong>
              <p>确定学习笔在同一个学习需求中承担什么角色，避免重新开启第二套叙事。</p>
            </li>
            <li>
              <small>03</small>
              <strong>验证组合表达</strong>
              <p>让课程保持主线，观察用户是否能够自然理解硬件带来的额外价值。</p>
            </li>
            <li>
              <small>04</small>
              <strong>复制有效链路</strong>
              <p>当产品组合和转化逻辑成立，再推动渠道从局部试点走向规模化。</p>
            </li>
          </ol>
        </section>

        <section className="case-section zyb-result-section">
          <p className="eyebrow">05 / RESULT & EVIDENCE</p>
          <div className="zyb-result-grid">
            <div className="zyb-result-number">
              <small>NEW CHANNEL · FIRST YEAR GMV</small>
              <strong>1 亿+</strong>
              <p>新渠道上线首年 · 据本人操盘回顾</p>
            </div>
            <div className="case-prose">
              <h2>真正建立的，不只是一次销售，而是一条通路。</h2>
              <p>
                这次实践证明，一条原本服务课程的链路，可以通过重新组织产品之间的关系，
                承接硬件从零到一的增长。结果口径是新渠道首年整体 GMV，
                不能理解为某一个学习笔型号的销量，也不是由一个人独立完成的收入。
              </p>
              <p>
                公开报道能够证明作业帮当时持续发布学习笔等智能学习产品；
                但目前没有公开材料能够独立核验该渠道 GMV，因此本页将两类证据明确分开。
              </p>
              <a
                className="case-source-link"
                href="https://static.nfnews.com/content/202208/25/c6826388.html"
                target="_blank"
                rel="noreferrer"
              >
                查看学习笔二代发布报道 ↗
              </a>
            </div>
          </div>
        </section>

        <section className="case-reflection zyb-reflection">
          <p className="eyebrow">06 / WHAT THIS WORK SHOWS</p>
          <h2>增长机会有时不在新流量里，而在重新组织已有场景。</h2>
          <p>
            沿着用户原有的购买动机，找到课程与硬件的单点耦合，
            再把一个局部有效的产品组合推动成可以规模化运行的新渠道。
          </p>
          <p className="case-boundary">
            边界说明：首年 GMV 破亿来自本人操盘回顾，属于新渠道整体经营结果与团队共同成果；
            公开报道仅用于证明学习笔产品及其发布背景。
          </p>
        </section>
        <CaseNext index="03" title="从产品，到品类。" href="/work/word-card-category" />
      </main>
    </div>
  );
}
