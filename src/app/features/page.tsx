import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import DownloadCta from '@/components/site/DownloadCta';
import { FEATURES, POSTERS } from '@/lib/content';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '功能介绍',
  description: `了解${SITE.name}全部核心功能：海量猫咪片库、4K HDR 超清画质、智能推荐、多设备同步、极速秒开与离线缓存。`,
  keywords: ['网飞猫功能', '猫片App', '4K观影', '影视软件功能'],
  alternates: { canonical: `${SITE.domain}/features` },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        title="功能介绍"
        description="从海量片库到极致画质，网飞猫的每一处设计都为你和你的猫精心打造。"
        crumb="功能介绍"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="poster rounded-xl border border-white/10 bg-[#141414] p-7">
              <svg className="h-9 w-9 text-[#e50914]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={f.icon} />
              </svg>
              <h2 className="mt-4 text-xl font-bold text-white">{f.title}</h2>
              <p className="mt-2 leading-6 text-neutral-400">{f.desc}</p>
            </article>
          ))}
        </div>

        <div className="prose-site mt-14 rounded-2xl border border-white/10 bg-[#141414] p-8">
          <h2>不止于此，更多亮点</h2>
          <ul>
            <li><strong>每日更新</strong>：追踪全球猫咪内容创作者，热剧新片第一时间上线。</li>
            <li><strong>个性推荐</strong>：千人千面的智能算法，为你精准匹配对味内容。</li>
            <li><strong>观看记录</strong>：多设备同步进度，回家接着看，一点也不浪费。</li>
            <li><strong>亲子模式</strong>：专属儿童档案与家长锁，守护小朋友纯净观影。</li>
            <li><strong>轻量省电</strong>：优化解码性能，久看不卡、不发烫、更省电。</li>
          </ul>
        </div>

        {/* 精选片库海报墙 */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-white">精选片库</h2>
          <p className="mt-2 text-sm text-neutral-400">以下热门作品，下载 App 即可立即观看。</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {POSTERS.map((p) => (
              <figure key={p.title} className="poster group overflow-hidden rounded-xl border border-white/10 bg-[#141414]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} ${p.category}海报`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80" />
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-1.5 py-0.5 text-xs font-bold text-[#ffb400] backdrop-blur">
                    ★ {p.rating}
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <p className="mt-0.5 text-xs text-neutral-300">{p.year} · {p.category}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <DownloadCta />
    </>
  );
}