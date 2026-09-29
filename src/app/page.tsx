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
              {SITE.name}
              <span className="block text-2xl font-semibold text-neutral-300 sm:text-3xl">
                猫咪专属流媒体影音平台
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
              {SITE.description}
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
              <span className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]" />Android 5.0+</span>
              <span className="flex items-center gap-1.5"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e50914]" />百万猫友信赖</span>
            </div>
          </div>
        </div>
      </section>

      {/* 功能亮点 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" id="features">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">为什么选择 {SITE.name}？</h2>
          <p className="mt-4 text-neutral-400">六大核心能力，重新定义"看猫"的打开方式。</p>
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
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">海量猫片，尽收眼底</h2>
              <p className="mt-2 text-sm text-neutral-400">原创电影、动画、纪录片、喜剧、科幻、悬疑，每日上新。</p>
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

      {/* 常见问题预览 */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-white">新手疑问速答</h2>
        <div className="mt-8 space-y-3">
          {[
            { q: '网飞猫怎么下载安装？', a: '点击本站「立即下载」，安装安卓版 App 后即可免费使用海量内容。', href: '/download' },
            { q: '网飞猫收费吗？', a: '免费下载、免费观看大部分内容，VIP 可解锁超高清与离线缓存等高级功能。', href: '/faq' },
            { q: '支持哪些设备？', a: '支持安卓手机、平板、智能电视与电脑，多端进度同步。', href: '/features' },
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