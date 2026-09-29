// 站点全局配置：品牌信息、下载链接、统计 ID、SEO 基础信息
// 所有页面统一从此读取，避免硬编码分散。

export const SITE = {
  name: '网飞猫',
  nameEn: 'NCAT.APP',
  tagline: '新片热剧短剧在线看，高清流畅追剧看电影',
  description:
    '网飞猫（NCAT.APP）是一款免费影视追剧软件，聚合最新电影、电视剧、短剧、动漫等海量高清资源，支持全网搜索、题材分类、播放记录与续看进度，多端同步、在线观看。安卓版免费下载，新片热剧天天更新，官网即可一键安装看全集。',
  keywords: [
    '网飞猫',
    'NCAT',
    'NCAT.APP',
    '网飞猫APP',
    '网飞猫下载',
    '免费看电影',
    '免费追剧',
    '电视剧全集免费观看',
    '最新电影',
    '热播剧',
    '短剧',
    '在线观看',
    '高清影视',
    '影视App',
    '安卓追剧软件',
    '播放记录',
    '蓝光画质',
  ],
  domain: 'https://7d514e5b-cda7-4bd9-ae26-3d006d70ec26.dev.coze.site',
  downloadUrl: 'https://bos.liao-hai.chat/yxq/网飞猫.apk',
  baiduAnalyticsId: '3daf2e3d4b3820b61c351096ec0fa903',
  version: 'v2.6.1',
  appSize: '约 68 MB',
  updateDate: '2024-12-18',
  logo: '/logo.png',
  icon: '/logo.png',
};

// 导航与页脚数据
export const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/download', label: '下载' },
  { href: '/features', label: '功能介绍' },
  { href: '/guide', label: '使用教程' },
  { href: '/faq', label: '常见问题' },
  { href: '/about', label: '关于我们' },
] as const;

export const FOOTER_LINKS: Array<{ title: string; links: Array<{ href: string; label: string }> }> = [
  {
    title: '产品',
    links: [
      { href: '/download', label: 'App 下载' },
      { href: '/features', label: '功能介绍' },
      { href: '/guide', label: '使用教程' },
      { href: '/version', label: '版本更新' },
    ],
  },
  {
    title: '支持',
    links: [
      { href: '/faq', label: '常见问题' },
      { href: '/help', label: '帮助中心' },
      { href: '/guide', label: '安装指南' },
      { href: '/about', label: '联系我们' },
    ],
  },
  {
    title: '关于',
    links: [
      { href: '/about', label: '关于我们' },
      { href: '/terms', label: '用户协议' },
      { href: '/privacy', label: '隐私政策' },
      { href: '/sitemap', label: '网站地图' },
    ],
  },
] as const;