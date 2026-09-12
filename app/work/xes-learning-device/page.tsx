import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CaseNext from '../case-next';

export const metadata: Metadata = {
  title: '学而思学习机：从产品经营到持续增长｜王志成',
  description: '王志成负责学而思学习机第二代至第五代整体商业操盘的代表案例。',
};

const products = [
  {
    image: '/images/products/xes-first.png',
    title: '第一代',
    note: '发布后接手后续经营',
    href: 'https://xpad.xueersi.com/firstGoodsDetail?skuId=0&spuId=3900&spuUnionid=82231129163624053912713900',
  },
  {
    image: '/images/products/xes-flagship-cutout-v1.png',
    title: '旗舰版',
    note: '代表产品节点',
    href: 'https://xpad.xueersi.com/baike',
  },
  {
    image: '/images/products/xes-learning-cutout-v1.png',
    title: '新一代学练机',
    note: '代表产品节点',
    href: 'https://www.ithome.com/0/792/417.htm',
  },
];

export default function XesLearningDeviceCase() {
  return (
    <div className="case-page">
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
            <p className="eyebrow">SELECTED WORK 01 / 教育硬件 · 全品类 GTM</p>
            <h1>学而思学习机</h1>
            <p className="case-title">从一次产品发布，走向连续多代的整体商业操盘。</p>
            <p className="case-lede">
              第一代发布后，我接手后续经营；此后连续负责第二代至第五代，
              提出关键策略、向 CEO 汇报并推动决策后的跨团队落地。
            </p>
          </div>
          <div className="case-hero-visual">
            <i className="tape" />
            <Image
              src="/images/products/xes-flagship-cutout-v1.png"
              alt="学而思学习机旗舰版产品"
              width={1672}
              height={941}
              priority
              unoptimized
            />
            <span>代表产品 / 学而思学习机旗舰版</span>
          </div>
        </section>

        <section className="case-facts" aria-label="案例概况">
          <div>
            <small>ROLE</small>
            <strong>GTM 团队负责人</strong>
            <p>策略提出、CEO 决策汇报、跨团队推动与整体商业操盘</p>
          </div>
          <div>
            <small>SCOPE</small>
            <strong>第一代经营 → 第二至第五代</strong>
            <p>连续多代产品经营与近三年年度全系新品上市战役</p>
          </div>
          <div>
            <small>BUSINESS RESULT</small>
            <strong>十亿级</strong>
            <p>本人所负责业务的年营收规模，属于团队共同成果</p>
          </div>
        </section>

        <section className="case-section case-opening">
          <p className="eyebrow">01 / THE QUESTION</p>
          <div className="case-section-grid">
            <h2>学习机里，到底应该装什么？</h2>
            <div className="case-prose">
              <p>
                当时一个常见做法，是把直播课与学习机看成两个需要彼此保护的业务。
                如果把已有的高价值直播课程转成录播内容放进学习机，
                最直接的担忧是：直播课会不会因此卖不动？
              </p>
              <p>
                我的判断恰好相反。如果用户只因为课程内容本身购买直播课，
                那么直播形态提供的价值就值得重新审视；如果直播真正提供了互动、服务与陪伴，
                优质内容进入学习机也不会取代它。
              </p>
              <p className="case-quote">
                与其保护一个未经验证的默认假设，不如让产品直接回答：
                用户真正愿意为什么付费？
              </p>
            </div>
          </div>
        </section>

        <section className="case-section case-decision">
          <p className="eyebrow">02 / THE DECISION</p>
          <div className="case-section-grid">
            <h2>把高价值课程内容装进学习机。</h2>
            <div className="case-prose">
              <p>
                我提出将已有课程内容引入学习机，用更完整的内容供给提升硬件价值，
                并将这一策略向 CEO 汇报。决策形成后，再推动产品、内容、研发、营销与渠道团队共同落地。
              </p>
              <p>
                这不是简单地把一批视频复制到设备里。内容需要重新组织，
                产品需要让孩子能够找到并持续使用，渠道也需要把复杂价值讲成消费者能理解的一句话。
                据我的操盘回顾，学习机与直播业务最终形成了相互促进。
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">03 / PRODUCT JOURNEY</p>
          <div className="case-section-heading">
            <h2>从接手经营，到连续多代负责。</h2>
            <p>
              下方是目前已有公开素材可以准确呈现的三个代表产品节点，
              用于说明产品演进，不等同于第二至第五代的完整型号清单。
            </p>
          </div>
          <div className="case-product-row">
            {products.map((product, index) => (
              <a href={product.href} target="_blank" rel="noreferrer" key={product.title}>
                <small>0{index + 1}</small>
                <div className="case-product-image">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={1000}
                    height={720}
                    loading="eager"
                    unoptimized
                  />
                </div>
                <strong>{product.title}</strong>
                <span>{product.note} ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="case-section case-channel">
          <p className="eyebrow">04 / CHANNEL STRATEGY</p>
          <div className="case-section-grid">
            <h2>从“超头”到“星海”。</h2>
            <div className="case-prose">
              <p>
                超级达人的直播能够在一场或几场内快速建立声量，但这种转化往往呈现波峰，
                后续继续单独合作，ROI 未必持续理想。短期爆发不能自动变成长期增长。
              </p>
              <p>
                因此，我们在超头建立市场热度后，紧接着孵化大量中小达人承接需求。
                我把这套渠道经营称作“星海”——星星之火，可以燎原。
              </p>
            </div>
          </div>
          <div className="channel-flow" aria-label="超头到星海渠道策略">
            <div>
              <small>STEP 01</small>
              <strong>超头</strong>
              <span>集中直播 · 建立声量</span>
            </div>
            <b>→</b>
            <div>
              <small>STEP 02</small>
              <strong>市场热度</strong>
              <span>制造预期 · 验证需求</span>
            </div>
            <b>→</b>
            <div>
              <small>STEP 03</small>
              <strong>星海</strong>
              <span>中小达人 · 持续承接</span>
            </div>
          </div>
        </section>

        <section className="case-section case-evidence">
          <p className="eyebrow">05 / MARKET EVIDENCE</p>
          <div className="case-section-heading">
            <h2>结果需要证据，也需要边界。</h2>
            <p>
              市场认证属于品牌与团队共同成果。这里只展示能够公开核验、
              且统计期与市场范围明确的材料。
            </p>
          </div>
          <div className="case-certificates">
            <a href="/images/products/cert-high-1.png" target="_blank">
              <Image
                src="/images/products/cert-high-1.png"
                alt="中国高端学习平板销量第一市场地位声明"
                width={788}
                height={1120}
                unoptimized
              />
              <strong>中国高端学习平板 · 销量第一 ↗</strong>
            </a>
            <a href="/images/products/cert-high-2.png" target="_blank">
              <Image
                src="/images/products/cert-high-2.png"
                alt="中国高端学习平板销售额第一市场地位声明"
                width={786}
                height={1118}
                unoptimized
              />
              <strong>中国高端学习平板 · 销售额第一 ↗</strong>
            </a>
            <div className="case-evidence-copy">
              <h3>认证统计口径</h3>
              <p>
                弗若斯特沙利文认证：2023 年 9 月—2024 年 8 月，
                中国内地线上线下全渠道，终端零售价 4,000 元以上的高端学习平板。
              </p>
              <a href="https://m.ikanchai.com/pcarticle/602318" target="_blank" rel="noreferrer">
                查看认证图片刊载来源 ↗
              </a>
              <h3>更广市场的公开报道</h3>
              <p>
                另据公开报道，学而思获得“中国学习平板销量第一”认证，
                报道所列统计期为 2023 年 11 月 12 日—2024 年 11 月 11 日。
              </p>
              <a href="https://www.jiemian.com/article/12182061.html" target="_blank" rel="noreferrer">
                查看全市场销量报道 ↗
              </a>
            </div>
          </div>
        </section>

        <section className="case-reflection">
          <p className="eyebrow">06 / WHAT THIS WORK SHOWS</p>
          <h2>我在这段经历里真正负责的，是把判断变成组织行动。</h2>
          <p>
            找到原有做法中未经验证的假设，提出另一种增长路径，
            把策略汇报到最终决策层，再推动多个团队把它变成产品、内容、渠道和市场结果。
          </p>
          <p className="case-boundary">
            边界说明：业务营收、产品销量与品牌市场地位均为多团队共同成果；
            本页只陈述本人负责的工作范围和公开可核验的市场材料，不将整体结果归因于个人。
          </p>
        </section>
        <CaseNext index="02" title="课程 × 硬件" href="/work/zyb-course-hardware" />
      </main>
    </div>
  );
}
