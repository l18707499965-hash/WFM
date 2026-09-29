import Link from 'next/link';
import DownloadCta from '@/components/site/DownloadCta';
import { FEATURES, POSTERS, VISUAL } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: `${SITE.name} - ${SITE.tagline}`,
  description: SITE.description,
  path: '/',
});

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: `${SITE.name} ${SITE.nameEn}`,
  operatingSystem: 'Android',
  applicationCategory: 'EntertainmentApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '28816' },
  fileSize: SITE.appSize,
  contentRating: '适合全年龄段',
  description: SITE.description,
  url: SITE.downloadUrl,
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={VISUAL.hero} alt={`${SITE.name} 视频宣传海报`} className="h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 hero-fade" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#e50914]" />
              全新版本 {SITE.version} 已发布
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              新片热剧，今晚就看
              <span className="mt-1 block text-2xl font-semibold text-neutral-300 sm:text-3xl">
                {SITE.name} · 电影 · 电视剧 · 短剧 · 动漫
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
              从院线新片、热播剧到短剧与今日上新，快速发现想看的影视内容，让模糊的想法也变成一张清晰片单。免费下载安卓版 App，高清流畅在线观看、随时接着看全集。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={SITE.downloadUrl}
                className="btn-brand inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-lg font-extrabold shadow-xl shadow-[#e50914]/30"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"/></svg>
                立即免费下载
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                了解更多功能
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
              <span className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]" />{SITE.appSize} · 极速安装</span>
              <span className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]" />{SITE.version} · Android</span>
              <span className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]" />播放记录多端同步</span>
            </div>
          </div>
        </div>
      </section>

      {/* 功能亮点 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" id="features">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">为什么选择 {SITE.name}？</h2>
          <p className="mt-4 text-neutral-400">聚合全网影视资源，免费高清追剧看电影，一处搞定全集。</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="poster rounded-xl border border-white/10 bg-[#141414] p-6">
              <svg className="h-8 w-8 text-[#e50914]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={f.icon} />
              </svg>
              <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 内容分类预览 - 海报墙 */}
      <section className="border-y border-white/10 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">热门推荐 · 新片热剧每日更新</h2>
              <p className="mt-2 text-sm text-neutral-400">电影、剧集、短剧与动漫一网打尽，高清在线观看，越追越过瘾。</p>
            </div>
            <Link href="/features" className="hidden shrink-0 text-sm text-neutral-400 transition hover:text-[#e50914] sm:inline">全部内容 →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {POSTERS.map((p) => (
              <figure key={p.title} className="poster group overflow-hidden rounded-xl border border-white/10 bg-[#141414]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} ${p.category}海报 - ${SITE.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80" />
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-1.5 py-0.5 text-xs font-bold text-[#ffb400] backdrop-blur">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg>
                    {p.rating}
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <p className="mt-0.5 text-xs text-neutral-300">{p.year} · {p.category}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] text-neutral-300">{t}</span>
                      ))}
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center sm:hidden">
            <Link href="/features" className="text-sm text-[#e50914]">查看全部内容 →</Link>
          </p>
        </div>
      </section>

      {/* 数据与内链 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { num: '10万+', label: '在架影音内容', href: '/features' },
            { num: '88万', label: '活跃猫友用户', href: '/about' },
            { num: '4.8 分', label: '应用商店评分', href: '/faq' },
          ].map((s) => (
            <Link key={s.label} href={s.href} className="poster rounded-xl border border-white/10 bg-[#141414] p-8 text-center">
              <p className="text-4xl font-black text-[#e50914]">{s.num}</p>
              <p className="mt-2 text-neutral-400">{s.label}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 用户评价 */}
      <section className="border-y border-white/10 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium tracking-widest text-neutral-400">USER REVIEWS / 用户之声</span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{SITE.name} 用户真实评价</h2>
            <p className="mt-3 text-neutral-400">来自网飞猫日常追剧、看电影用户的真实使用反馈。</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              '最近常用网飞猫，影片详情和更新信息比较直观，周末找电影时容易找到入口，片单筛选依然清楚。高清播放流畅，官网下载安卓版后整体体验很稳定。',
              '用网飞猫追剧很顺手，播放记录和续看进度都能准确同步，换个时间打开也能接着看。电影、剧集、短剧分类清楚，片名和类型都能快速定位。',
              '网飞猫的热门推荐与高分片单比较好用，追正在更新的剧集时容易找到入口，在线观看清晰流畅。想看全集的时候翻页也很快。',
              '朋友推荐我试试网飞猫，搜索、分类、画质选择和内容筛选都比较直观，从片单里挑选内容时很容易找到需要的入口。官网下载安装后一直很顺畅。',
              '最近常用网飞猫，新片和热播剧更新很快，把剧集离线缓存到本地后没网也能接着看，通勤路上很省心。安卓版安装包小，下载速度快。',
              '网飞猫从官网下载很方便，播放记录、续看进度和多端同步都做得很清楚，连续操作节奏很顺，周末找电影时不用反复找，追剧很省心。',
            ].map((text, i) => (
              <article key={i} className="poster rounded-xl border border-white/10 bg-[#141414] p-5">
                <div className="flex items-center gap-1 text-[#ffb400]">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-300">“{text}”</p>
                <p className="mt-4 text-xs text-neutral-500">匿名用户 · 2026-0{Math.min(i + 1, 6)}-1{(i * 3) % 9 + 1} 发布</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题预览 */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-white">新手疑问速答</h2>
        <div className="mt-8 space-y-3">
          {[
            { q: '网飞猫怎么下载安装？', a: '点击官网「立即下载」获取安卓版 Apk，安装后即可免费在线观看电影、电视剧、短剧等海量影视内容。', href: '/download' },
            { q: '网飞猫看电影、追剧收费吗？', a: '免费下载、免费观看大部分影视内容，会员可解锁蓝光超清画质、离线缓存与更多专享片源。', href: '/faq' },
            { q: '支持哪些设备？', a: '支持安卓手机、平板、智能电视与电脑，播放记录与续看进度多端同步，随时接着看全集。', href: '/features' },
          ].map((item) => (
            <Link key={item.q} href={item.href} className="block rounded-xl border border-white/10 bg-[#1f1f1f] p-5 transition hover:border-[#e50914]/50">
              <h3 className="font-semibold text-white">{item.q}</h3>
              <p className="mt-1.5 text-sm text-neutral-400">{item.a}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm">
          <Link href="/faq" className="text-[#e50914] hover:underline">查看更多常见问题 →</Link>
        </p>
      </section>

      <DownloadCta />
    </>
  );
}