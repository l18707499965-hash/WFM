// 网飞猫 (NCAT.APP) 官网首页

const IMG = {
  hero: 'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_e39fc203-6a0e-41cd-9614-8355a6c8c555.jpeg',
  royal:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_fb38e9dc-e3ee-4b1a-8768-c468fe97f9ea.jpeg',
  ninja:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_2cf7da71-4c0f-442f-b69d-c7afa756aede.jpeg',
  jungle:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_1716cc9f-40ba-400b-8223-2940d440969f.jpeg',
  comedy:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_48dcca3f-2e9e-46e1-a809-72418e7b28ec.jpeg',
  drama:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_4873de75-a662-4d81-99f2-19d55c2bffa2.jpeg',
  sailor:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_6113b51a-f7a0-46ee-a63e-905443a25f0e.jpeg',
  astro:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_370e9230-8adb-482a-8cd3-12d89612e01a.jpeg',
  detective:
    'https://coze-coding-project.tos.coze.site/coze_storage_7690493078351839283/image/generate_image_2391d843-c650-4cd7-999f-09e167eb3447.jpeg',
};

interface Poster {
  title: string;
  meta: string;
  img: string;
}

interface Row {
  title: string;
  items: Poster[];
}

const ROWS: Row[] = [
  {
    title: '网飞猫原创电影',
    items: [
      { title: '狮心之王', meta: '2024 · 史诗', img: IMG.royal },
      { title: '星球喵杀', meta: '2023 · 科幻', img: IMG.astro },
      { title: '航海喵船长', meta: '2022 · 冒险', img: IMG.sailor },
      { title: '雨窗忆', meta: '2023 · 剧情', img: IMG.drama },
      { title: '夜巡者', meta: '2024 · 悬疑', img: IMG.detective },
    ],
  },
  {
    title: '猫咪动画宇宙',
    items: [
      { title: '忍者喵传', meta: '第 3 季', img: IMG.ninja },
      { title: '喵星漫游', meta: 'OVA', img: IMG.astro },
      { title: '神殿守卫', meta: '剧场版', img: IMG.jungle },
      { title: '暗影行动', meta: '热门', img: IMG.detective },
      { title: '孤勇喵骑士', meta: '新剧', img: IMG.sailor },
    ],
  },
  {
    title: '自然探索记录',
    items: [
      { title: '雨林白影', meta: '纪录片', img: IMG.jungle },
      { title: '火山之巅', meta: '4K HDR', img: IMG.hero },
      { title: '深海喵泣', meta: '获奖', img: IMG.comedy },
      { title: '荒野求生', meta: '特辑', img: IMG.sailor },
    ],
  },
  {
    title: '爆笑萌宠喜剧',
    items: [
      { title: '毛线大乱斗', meta: '爆笑', img: IMG.comedy },
      { title: '皇家妙招', meta: '喜剧', img: IMG.royal },
      { title: '纸箱幻想曲', meta: '合家欢', img: IMG.jungle },
      { title: '喵老板的日常', meta: '热播', img: IMG.drama },
    ],
  },
];

const PLANS = [
  {
    name: '基础版',
    price: '¥28',
    old: '',
    tag: '',
    favorable: '高清 720P',
    items: ['1 台设备同时观看', '海量片库任选', '标准画质', '支持下载'],
    featured: false,
  },
  {
    name: '标准版',
    price: '¥45',
    old: '¥55',
    tag: '最受欢迎',
    favorable: '超高清 1080P',
    items: ['2 台设备同时观看', '全部内容 + 四倍速', '杜比全景声', '极致画质 1080P', '支持离线下载'],
    featured: true,
  },
  {
    name: '高级家庭版',
    price: '¥68',
    old: '',
    tag: '',
    favorable: '4K + HDR',
    items: ['4 台设备同时观看', '4K HDR 极致画面', '杜比视界全景声', '4 个独立观影档案', '优先体验新片'],
    featured: false,
  },
];

const FAQ = [
  { q: '网飞猫是什么？', a: '网飞猫是一家专注"猫咪视角"的流媒体平台，汇集原创剧集、电影、纪录片与动画，让每一位铲屎官都能在猫咪的世界里获得沉浸式观影体验。' },
  { q: '在哪里可以观看？', a: '支持智能电视、手机、平板和电脑上观看，且无需额外付费。iOS 与 Android 应用均可免费下载，随时随地畅享内容。' },
  { q: '可以随时取消吗？', a: '当然可以，没有隐藏费用、没有违约金，随时可以取消，想续订就续订，完全由你掌控。' },
  { q: '不感兴趣的内容可以跳过吗？', a: '可以。新年新功能"四倍速浏览"与智能推荐算法，让你快速找到真正想看的猫咪大片。' },
  { q: '有什么儿童保护设置？', a: '我们的儿童档案默认隐藏所有少儿不宜内容，并配合家长密码锁，为小朋友营造安全纯净的观影空间。' },
];

function logo(): string {
  return `
  <a href="#top" class="flex items-center gap-2 select-none">
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#e50914"/>
      <path d="M40 15a19 19 0 1 0 0 34c4-4 5-7 3-11-2 2-4 3-6 3-5 0-9-4-9-9s4-9 9-9c2 0 4 1 6 3 2-4 1-8-3-11Z"
        fill="#ffffff"/>
      <circle cx="38" cy="32" r="2.4" fill="#0a0a0a"/>
    </svg>
    <span class="text-xl font-extrabold tracking-tight text-white">网飞猫<span class="text-[#e50914]">·</span><span class="text-sm font-semibold text-neutral-400">NCAT.APP</span></span>
  </a>`;
}

function hero(): string {
  return `
  <section id="top" class="relative flex min-h-screen w-full items-center overflow-hidden">
    <div class="absolute inset-0">
      <img src="${IMG.hero}" alt="网飞猫今日重磅《火山之巅》" class="h-full w-full object-cover" fetchpriority="high"/>
      <div class="absolute inset-0 hero-fade"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
    </div>
    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 sm:px-10">
      <div class="max-w-2xl animate-fade-up">
        <span class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-neutral-200 backdrop-blur">
          <span class="inline-block h-2 w-2 rounded-full bg-[#e50914] animate-pulse"></span> 网飞猫原创 · 年度重磅
        </span>
        <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          猫山王：<br class="hidden sm:block"/>狮心传奇
        </h1>
        <p class="mt-5 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
          山野之巅，一只失去年幼的橘猫踏上了夺回王座的旅程。年度史诗巨制，4K HDR
          呈现，本周独家上线网飞猫。
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <button type="button" class="play-btn group inline-flex items-center gap-2 rounded bg-white px-7 py-3 text-lg font-bold text-black transition hover:bg-white/85">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
            立即播放
          </button>
          <a href="#rows" class="inline-flex items-center gap-2 rounded bg-white/15 px-7 py-3 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/25">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.4 6.9H21l-5.3 3.9 2 6.9-5.7-4.2L6.3 19.7l2-6.9L3 8.9h6.6z"/></svg>
            更多信息
          </a>
        </div>
        <div class="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
          <span class="flex items-center gap-1.5"><span class="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]"></span>2024 · 史诗</span>
          <span class="flex items-center gap-1.5"><span class="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]"></span>4K HDR</span>
          <span class="flex items-center gap-1.5"><span class="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]"></span>杜比全景声</span>
          <span class="flex items-center gap-1.5"><span class="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]"></span>全 12 集</span>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/60">
      <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </div>
  </section>`;
}

function rows(): string {
  return ROWS.map(
    (row) => `
    <section id="rows" class="relative z-10 mx-auto max-w-7xl px-6 sm:px-10">
      <div class="mb-3 flex items-end gap-3">
        <h2 class="text-xl font-bold text-white sm:text-2xl">${row.title}</h2>
        <a href="#top" class="hidden text-sm text-neutral-400 transition hover:text-[#e50914] sm:block">浏览全部 →</a>
      </div>
      <div class="scroll-row flex gap-4 overflow-x-auto pb-5">
        ${row.items
          .map(
            (p) => `
        <div class="poster-card relative aspect-[2/3] w-40 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-transparent bg-[#141414] sm:w-48">
          <img src="${p.img}" alt="${p.title}" loading="lazy" class="h-full w-full object-cover"/>
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent p-3 pt-10">
            <p class="text-sm font-bold text-white">${p.title}</p>
            <p class="mt-0.5 text-xs text-neutral-300">${p.meta}</p>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </section>`
  ).join('');
}

function devices(): string {
  const list = [
    { t: '智能电视', d: '超高清大屏，坐在沙发上享受影院级大片', icon: 'M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4l2 2v1H7v-1l2-2H5a2 2 0 0 1-2-2z' },
    { t: '手机 & 平板', d: '通勤路上或睡前，随时随地接着看', icon: 'M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2' },
    { t: '电脑', d: 'Windows / macOS 浏览器直接观看，无需安装', icon: 'M4 5h16v11H4zM3 20h18M9 5v1h6V5' },
    { t: '游戏主机', d: '主机与流设备全覆盖，全家共享同一账号', icon: 'M6 11h4V7h4v4h4v10H6zM6 11v10M18 11v10' },
  ];
  return `
  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-10">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <span class="text-sm font-semibold tracking-widest text-[#e50914]">随时随地</span>
        <h2 class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">想看就看，<br/>一猫在手，全家尽享</h2>
        <p class="mt-4 max-w-md text-neutral-400">支持电视、手机、平板、电脑与游戏主机，一个账号即可在多台设备间无缝切换观影进度。</p>
        <a href="#pricing" class="mt-6 inline-flex items-center gap-2 rounded bg-[#e50914] px-6 py-3 font-semibold text-white transition hover:bg-[#c4080f]">
          立即开通 <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        ${list
          .map(
            (d) => `
        <div class="rounded-xl border border-white/10 bg-[#141414] p-6 transition hover:border-[#e50914]/60 hover:bg-[#1a1a1a]">
          <svg class="h-8 w-8 text-[#e50914]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d.icon}"/></svg>
          <h3 class="mt-4 text-lg font-bold text-white">${d.t}</h3>
          <p class="mt-1 text-sm text-neutral-400">${d.d}</p>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}

function pricing(): string {
  return `
  <section id="pricing" class="mx-auto max-w-7xl px-6 py-16 sm:px-10">
    <div class="mx-auto max-w-xl text-center">
      <span class="text-sm font-semibold tracking-widest text-[#e50914]">选择套餐</span>
      <h2 class="mt-3 text-3xl font-extrabold text-white sm:text-4xl">简单透明，随时可取消</h2>
      <p class="mt-4 text-neutral-400">全球统一价格，无隐藏费用，支持支付宝 / 微信 / 银联支付。</p>
    </div>
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      ${PLANS.map(
        (p) => `
      <div class="relative flex flex-col rounded-2xl border p-8 transition hover:-translate-y-1 ${
        p.featured ? 'border-[#e50914] bg-[#1a0d0e] shadow-2xl shadow-[#e50914]/20' : 'border-white/10 bg-[#141414] hover:border-white/30'
      }">
        ${p.tag ? `<span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#e50914] px-3 py-1 text-xs font-bold text-white">${p.tag}</span>` : ''}
        <h3 class="text-sm font-semibold uppercase tracking-widest text-neutral-300">${p.name}</h3>
        <div class="mt-4 flex items-end gap-2">
          <span class="text-4xl font-extrabold text-white">${p.price}</span>
          <span class="mb-1 text-neutral-500">/ 每月</span>
          ${p.old ? `<span class="mb-1 text-lg text-neutral-500 line-through">${p.old}</span>` : ''}
        </div>
        <p class="mt-2 text-sm font-semibold text-[#e50914]">${p.favorable}</p>
        <ul class="mt-6 flex-1 space-y-3 text-sm text-neutral-300">
          ${p.items.map((i) => `<li class="flex items-start gap-2"><svg class="mt-0.5 h-4 w-4 shrink-0 text-[#e50914]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg>${i}</li>`).join('')}
        </ul>
        <button type="button" class="mt-8 w-full rounded py-3 font-bold transition ${
          p.featured ? 'bg-[#e50914] text-white hover:bg-[#c4080f]' : 'border border-white/20 text-white hover:border-[#e50914] hover:text-[#e50914]'
        }">选择 ${p.name}</button>
      </div>`
      ).join('')}
    </div>
  </section>`;
}

function faq(): string {
  return `
  <section class="mx-auto max-w-3xl px-6 py-16 sm:px-10">
    <h2 class="text-center text-3xl font-extrabold text-white sm:text-4xl">常见问题</h2>
    <div class="mt-8 space-y-3">
      ${FAQ.map(
        (f, i) => `
      <div class="faq-item group overflow-hidden rounded-lg bg-[#1f1f1f] transition hover:bg-[#2a2a2a]">
        <button type="button" class="faq-toggle flex w-full items-center justify-between gap-4 px-6 py-5 text-left" data-faq="${i}">
          <span class="text-base font-medium text-white sm:text-lg">${f.q}</span>
          <span class="faq-icon shrink-0 text-2xl leading-none text-[#e50914]">+</span>
        </button>
        <div class="faq-answer px-6 text-neutral-400">
          <p class="pb-6 leading-7">${f.a}</p>
        </div>
      </div>`
      ).join('')}
    </div>
  </section>`;
}

function footer(): string {
  return `
  <footer class="border-t border-white/10 bg-black/40">
    <div class="mx-auto max-w-7xl px-6 py-12 sm:px-10">
      <div class="flex flex-col gap-10 md:flex-row md:justify-between">
        <div class="max-w-xs">
          ${logo()}
          <p class="mt-4 text-sm text-neutral-400">让每一只猫，都有自己的观影宇宙。</p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
          ${[
            ['品牌', ['关于我们', '招贤纳士', '合作关系']],
            ['帮助', ['帮助中心', '联系我们', '媒体中心']],
            ['条款', ['使用条款', '隐私政策', 'Cookie 偏好']],
          ]
            .map(
              ([t, items]) => `
            <div>
              <h4 class="text-sm font-semibold text-white">${t}</h4>
              <ul class="mt-3 space-y-2 text-sm text-neutral-400">
                ${(items as string[]).map((i) => `<li><a href="#top" class="transition hover:text-[#e50914]">${i}</a></li>`).join('')}
              </ul>
            </div>`
            )
            .join('')}
        </div>
      </div>
      <div class="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
        <p>© 2024 NCAT.APP · 网飞猫科技版权所有</p>
        <p class="flex items-center gap-2">
          <span class="inline-flex h-4 w-4 items-center justify-center rounded bg-[#e50914] text-[9px] font-bold text-white">N</span>
          猫力驱动 · 无限精彩
        </p>
      </div>
    </div>
  </footer>`;
}

export function initApp(): void {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App element not found');
    return;
  }

  app.innerHTML = `
    <div class="min-h-screen bg-[#0a0a0a] text-white">
      <header class="nav fixed inset-x-0 top-0 z-50 transition-all">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          ${logo()}
          <div class="hidden items-center gap-6 text-sm font-medium text-neutral-300 lg:flex">
            <a href="#top" class="transition hover:text-white">首页</a>
            <a href="#rows" class="transition hover:text-white">剧集</a>
            <a href="#rows" class="transition hover:text-white">电影</a>
            <a href="#pricing" class="transition hover:text-white">套餐</a>
          </div>
          <div class="flex items-center gap-3">
            <a href="#top" class="hidden items-center gap-1 rounded px-3 py-2 text-sm text-neutral-300 transition hover:text-white sm:flex">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
              搜索
            </a>
            <a href="#top" class="hidden text-sm font-semibold text-neutral-300 transition hover:text-white sm:block">登录</a>
            <button type="button" class="rounded bg-[#e50914] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#c4080f]">免费试用</button>
          </div>
        </nav>
      </header>
      <main>
        ${hero()}
        <div class="relative -mt-24">
          ${rows()}
        </div>
        ${devices()}
        ${pricing()}
        ${faq()}
      </main>
      ${footer()}
    </div>
  `;

  // 导航吸顶效果
  const nav = app.querySelector<HTMLElement>('header.nav');
  const onScroll = (): void => {
    if (!nav) return;
    nav.classList.toggle('nav-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // FAQ 折叠
  app.querySelectorAll<HTMLButtonElement>('.faq-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest<HTMLElement>('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      app.querySelectorAll<HTMLElement>('.faq-item.open').forEach((open) => open.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // 播放按钮交互
  app.querySelectorAll<HTMLButtonElement>('button.play-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pos = window.scrollY;
      const label = btn.textContent?.trim() || '播放器';
      btn.textContent = '▶ 播放中…';
      btn.classList.add('opacity-90');
      if (window.confirm(`${label}：演示播放器即将开始（示例）`)) {
        window.scrollTo({ top: pos, behavior: 'smooth' });
      } else {
        btn.textContent = label;
        btn.classList.remove('opacity-90');
      }
    });
  });
}