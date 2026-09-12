export const chapters = [
  { id: 'projects', label: '作品' },
  { id: 'about', label: '关于' },
  { id: 'notes', label: '记录' },
  { id: 'contact', label: '联系' },
];
type Material = { src: string; caption: string; url?: string };
type Project = {
  slug: string;
  name: string;
  cover: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  result: string;
  label: string;
  story: string;
  boundary: string;
  asset?: string;
  url?: string;
  image?: string;
  imageCaption?: string;
  gallery?: Material[];
  certificates?: Material[];
  sourceUrl?: string;
  sourceLabel?: string;
  caseUrl?: string;
};
export const projects: Project[] = [
  {
    slug: 'xes-learning-device',
    name: '学而思学习机',
    cover: '学而思\n学习机',
    category: '教育硬件 / 全品类 GTM',
    period: '2023 — 2026',
    role: 'GTM 团队负责人',
    summary:
      '接手第一代后续经营，连续负责第二代至第五代；重新组织课程内容与硬件的关系，并把短期达人爆发转成持续的渠道经营。',
    result: '十亿级',
    label: '所负责业务的年营收规模',
    image: '/images/products/xes-flagship-cutout-v1.webp',
    imageCaption: '学而思学习机旗舰版',
    caseUrl: '/work/xes-learning-device',
    story:
      '第一代发布后，我接手其后续经营，并连续负责第二代至第五代的整体商业操盘，主导近三年年度全系新品上市战役。我的工作是提出策略、向 CEO 汇报，并推动最终决策后的跨团队落地。\n\n一个关键判断，是将原有高价值课程内容装进学习机。面对“录播会不会影响直播课”的担忧，我更关心：直播究竟提供了什么不可替代的价值？据我的操盘回顾，两种产品形态最终形成了相互促进。\n\n渠道上，我们采用“超头 → 星海”：先通过超级达人的集中直播建立声量，再孵化大量中小达人承接需求，把短期波峰转成持续的渠道经营。',
    boundary:
      '业务规模与品牌市场表现是团队共同成果。下方认证仅适用于标明的统计期和市场范围。',
    gallery: [
      {
        src: '/images/products/xes-first.png',
        caption: '第一代 / 经典学习机',
        url: 'https://xpad.xueersi.com/firstGoodsDetail?skuId=0&spuId=3900&spuUnionid=82231129163624053912713900',
      },
      {
        src: '/images/products/xes-flagship-cutout-v1.png',
        caption: '2023 · 旗舰版',
        url: 'https://xpad.xueersi.com/baike',
      },
      {
        src: '/images/products/xes-learning-cutout-v1.png',
        caption: '2024 · 新一代学练机',
        url: 'https://www.ithome.com/0/792/417.htm',
      },
    ],
    certificates: [
      {
        src: '/images/products/cert-high-1.png',
        caption: '中国高端学习平板 · 销量第一',
      },
      {
        src: '/images/products/cert-high-2.png',
        caption: '中国高端学习平板 · 销售额第一',
      },
    ],
  },
  {
    slug: 'zyb-course-hardware',
    name: '作业帮 · 课程与硬件',
    cover: '课程 × 硬件',
    category: '新渠道 / 用户转化',
    period: '2021 — 2023',
    role: '新零售渠道负责人',
    summary:
      '用户原本是来买课的。我们围绕一个学习需求，把学习笔嵌入课程解决方案，由此打通原本不存在的销售通路。',
    result: '1 亿+',
    label: '新渠道上线首年 GMV',
    image: '/images/products/zyb-learning-pen-white-v1.webp',
    imageCaption: '作业帮全科学习笔二代 · 产品形态示意',
    caseUrl: '/work/zyb-course-hardware',
    story:
      '把硬件引入 LPC（在私域直播课中完成授课与转化的链路），推动新渠道从试点走向规模化。\n\n核心不是同时讲清课程和硬件两件事，而是围绕一个学习需求组织产品：以课程为主线，将硬件融入整体解决方案，让用户理解它为什么有用。由此推动产品组合与销售通路落地，新渠道上线首年 GMV 破亿。',
    boundary:
      '业绩依据本人操盘回顾；口径为新渠道首年 GMV，不是单一型号销量。学习笔用于呈现当时主要售卖的产品形态。',
    sourceUrl: 'https://static.nfnews.com/content/202208/25/c6826388.html',
    sourceLabel: '查看学习笔二代发布报道',
  },
  {
    slug: 'word-card-category',
    name: '作业帮单词卡',
    cover: '从产品，到品类。',
    category: '品类建立 / 渠道经营',
    period: '2022 — 2023',
    role: '品类从 0 到 1 操盘',
    summary:
      '新品上市初期，先追求市场热度，再追求即时销量；通过达人触达和低价格带切入，同时积累产品内容与渠道关系。',
    result: '10 万台+',
    label: '单月销量峰值 · 三个月完成从 0 到 1',
    image: '/images/products/word-card-cutout-v1.webp',
    imageCaption: '喵喵单词卡大屏触控版 · 后续型号',
    caseUrl: '/work/word-card-category',
    story:
      '初期，我把营销触达放在即时销量之前。单词卡解决明确的背词需求，客单价与成本都低，适合需要不断寻找新品的教育达人和公众号。\n\n我们筛选阅读量超过 500 的教育账号，持续寄送产品。愿意带货的进一步沟通合作，愿意写文章的讨论内容合作，让更多人开始谈论这一新品类。\n\n价格上占据较低价格带，把空间留给不同定位的产品。长期则投入背词产品本身的内容研发，并积累渠道关系，争取在白牌进入之前形成自己的竞争基础。',
    boundary:
      '三个月起量与单月突破十万台依据本人操盘回顾。配图是后续大屏触控型号，不代表初代低价款。',
    sourceUrl: 'https://smart.zuoyebang.com/eduWordCard',
    sourceLabel: '查看官方产品介绍',
  },
  {
    slug: 'open-curriculum-cn',
    name: 'Open Curriculum CN',
    cover: '从一个知识点，\n看见学习路径。',
    category: '个人实践 / 教育 × AI',
    period: 'INDEPENDENT PROJECT',
    role: '独立发起与构建',
    summary:
      '从“孩子卡在一个知识点时，前面遗漏了什么”出发，把课标、知识关系与学习路径做成可以公开探索的产品。',
    result: '从 0 到 1',
    label: '问题定义、设计与公开发布',
    image: '/images/products/open-curriculum-sphere-v1.webp',
    imageCaption: '中国 K12 知识图谱 · 公开项目视觉',
    caseUrl: '/work/open-curriculum-cn',
    story:
      '从孩子卡在某个知识点时“前面遗漏了什么、下一步该学什么”的问题出发，将课标与知识关系组织为可交互的学习路径。',
    boundary: '已有公开发布记录，不代表学习效果或商业化验证。',
    url: 'https://zachsaws.github.io/open-curriculum-cn/',
  },
];
