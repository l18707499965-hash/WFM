// 供官网展示的猫咪影视视觉素材（对象存储直链）
export const VISUAL = {
  hero:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_e39fc203-6a0e-41cd-9614-8355a6c8c555.jpeg',
  royal:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_fb38e9dc-e3ee-4b1a-8768-c468fe97f9ea.jpeg',
  astro:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_370e9230-8adb-482a-8cd3-12d89612e01a.jpeg',
  ninja:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_2cf7da71-4c0f-442f-b69d-c7afa756aede.jpeg',
  jungle:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_1716cc9f-40ba-400b-8223-2940d440969f.jpeg',
  detective:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_2391d843-c650-4cd7-999f-09e167eb3447.jpeg',
} as const;

// 功能介绍卡片
export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const FEATURES: Feature[] = [
  {
    icon: 'M12 3v12m0 0l-4-4m4 4l4-4M5 19h14',
    title: '海量猫咪片库',
    desc: '聚合数万部猫咪原创剧集、电影、纪录片与动画，每日更新，永不剧荒。',
  },
  {
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l2.5 2.5',
    title: '4K HDR 超清画质',
    desc: '全链路超高清转码，支持 4K HDR 与杜比全景声，影院级观影体验。',
  },
  {
    icon: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4V6z',
    title: '智能喵推荐',
    desc: '基于猫咪偏好与观看习惯的个性化推荐算法，越看越懂你。',
  },
  {
    icon: 'M3 15v-6l2-2h14l2 2v6m-18 0h18M3 15l2 4m13-4l-2 4',
    title: '多设备无缝切换',
    desc: '电视、手机、平板、电脑多端同步播放进度，随时接着看。',
  },
  {
    icon: 'M5 13l4 4L19 7',
    title: '极速秒开',
    desc: '首创极速起播技术，秒开不缓冲，弱网环境也能流畅观看。',
  },
  {
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2',
    title: '离线缓存',
    desc: '一键下载离线缓存，无网也能看，通勤路上不无聊。',
  },
] as const;