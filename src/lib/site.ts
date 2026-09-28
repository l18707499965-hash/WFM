// 站点全局配置：品牌信息、下载链接、统计 ID、SEO 基础信息
// 所有页面统一从此读取，避免硬编码分散。

export const SITE = {
  name: '网飞猫',
  nameEn: 'NCAT.APP',
  tagline: '猫咪专属的一站式流媒体影音平台',
  description:
    '网飞猫（NCAT.APP）是一款专注猫咪视角的流媒体影音软件，汇集海量原创剧集、电影、纪录片与动画，支持 4K HDR、杜比全景声与多设备观看。免费下载安卓版 App，畅享猫的观影宇宙。',
  keywords: [
    '网飞猫',
    'NCAT',
    'NCAT.APP',
    '网飞猫APP',
    '网飞猫下载',
    '猫主题流媒体',
    '猫咪视频',
    '猫咪APP',
    '看猫软件',
    '免费影视软件',
    '安卓影视App',
    '猫片',
    '猫咪在线观看',
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