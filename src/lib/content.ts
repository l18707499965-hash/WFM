// 供官网展示的猫咪影视视觉素材（本地静态资源，永久稳定）
export const VISUAL = {
  hero: '/posters/hero.jpeg',
  royal: '/posters/royal.jpeg',
  astro: '/posters/astro.jpeg',
  ninja: '/posters/ninja.jpeg',
  jungle: '/posters/jungle.jpeg',
  detective: '/posters/detective.jpeg',
} as const;

// 海报条目
export interface Poster {
  img: string;
  title: string;
  category: string;
  year: number;
  rating: number;
  tags: string[];
}

export const POSTERS: Poster[] = [
  { img: '/posters/royal.jpeg', title: '猫王加冕', category: '原创电影', year: 2025, rating: 9.2, tags: ['史诗', '剧情'] },
  { img: '/posters/ninja.jpeg', title: '月影忍猫', category: '猫咪动画', year: 2025, rating: 8.9, tags: ['热血', '动作'] },
  { img: '/posters/jungle.jpeg', title: '丛林寻踪', category: '自然纪录', year: 2024, rating: 9.5, tags: ['治愈', '自然'] },
  { img: '/posters/comedy.jpeg', title: '毛线大乱斗', category: '爆笑喜剧', year: 2025, rating: 8.6, tags: ['搞笑', '合家欢'] },
  { img: '/posters/drama.jpeg', title: '雨夜窗边', category: '情感剧情', year: 2024, rating: 8.8, tags: ['文艺', '催泪'] },
  { img: '/posters/sailor.jpeg', title: '喵长传奇', category: '航海冒险', year: 2025, rating: 9.0, tags: ['冒险', '励志'] },
  { img: '/posters/astro.jpeg', title: '星辰喵航', category: '科幻喵剧', year: 2025, rating: 9.1, tags: ['科幻', '未来'] },
  { img: '/posters/detective.jpeg', title: '雾巷神探', category: '悬疑推理', year: 2024, rating: 8.7, tags: ['悬疑', '推理'] },
];

// 功能介绍卡片
export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const FEATURES: Feature[] = [
  {
    icon: 'M12 3v12m0 0l-4-4m4 4l4-4M5 19h14',
    title: '海量影视片库',
    desc: '聚合最新电影、热播电视剧、短剧与动漫，涵盖院线新片、口碑佳片，每日上新、更新全集。',
  },
  {
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l2.5 2.5',
    title: '高清蓝光画质',
    desc: '全链路超高清转码，支持蓝光、4K 画质与多音轨，畅享影院级在线观看体验。',
  },
  {
    icon: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4V6z',
    title: '智能追剧推荐',
    desc: '结合观看偏好与历史记录个性化推荐，越用越懂你，热门剧更新第一时间提醒。',
  },
  {
    icon: 'M3 15v-6l2-2h14l2 2v6m-18 0h18M3 15l2 4m13-4l-2 4',
    title: '播放记录·多端同步',
    desc: '手机、平板、电视、电脑多端同步播放记录与续看进度，随时接着看全集。',
  },
  {
    icon: 'M5 13l4 4L19 7',
    title: '极速秒开',
    desc: '首创极速起播技术，秒开不缓冲，弱网环境也能流畅追剧看电影。',
  },
  {
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2',
    title: '离线缓存',
    desc: '一键缓存剧集到本地，无网也能看，通勤路上同样过足影瘾。',
  },
] as const;