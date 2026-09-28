import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/site/PageHero';
import DownloadCta from '@/components/site/DownloadCta';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '下载网飞猫安卓版',
  description: `下载${SITE.name}（${SITE.nameEn}）安卓版 App。免费安装${SITE.version}，${SITE.appSize}，支持 Android 5.0+，海量猫咪影视资源等你探索。`,
  keywords: ['网飞猫下载', '网飞猫安卓版', '网飞猫apk', '免费影视App', '猫片软件下载'],
  alternates: { canonical: `${SITE.domain}/download` },
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: `${SITE.name} ${SITE.nameEn}`,
  operatingSystem: 'ANDROID',
  applicationCategory: 'EntertainmentApplication',
  description: SITE.description,
  fileSize: SITE.appSize,
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    ratingCount: '12983',
  },
  additionalProperty: { '@type': 'PropertyValue', name: '版本', value: SITE.version },
};

export default function DownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <PageHero
        title={`下载 ${SITE.name} 安卓版`}
        description="一键安装，畅享海量猫咪影视内容。免费下载、无需注册即可体验核心功能。"
        crumb="下载"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* 下载卡片 */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#1a0d0e] p-8">
            <div className="flex items-center gap-4">
              <img src={SITE.logo} alt={`${SITE.name} 应用图标`} className="h-16 w-16 rounded-2xl object-cover" width={64} height={64} />
              <div>
                <h2 className="text-xl font-extrabold text-white">{SITE.name} · 安卓版</h2>
                <p className="text-sm text-neutral-400">版本 {SITE.version}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5 text-sm text-neutral-300">
              {[
                '免注册即可浏览海量内容',
                '4K HDR 超清画质 · 杜比音效',
                '智能推荐 · 在线 / 离线观看',
                '多设备同步，进度不丢失',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#e50914]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-400">文件大小</span>
                <span className="font-semibold text-white">{SITE.appSize}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-neutral-400">更新日期</span>
                <span className="font-semibold text-white">{SITE.updateDate}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-neutral-400">系统要求</span>
                <span className="font-semibold text-white">Android 5.0 及以上</span>
              </div>
            </div>

            <Link
              href={SITE.downloadUrl}
              className="btn-brand mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-lg font-extrabold shadow-xl shadow-[#e50914]/30"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" /></svg>
              下载 APK（{SITE.appSize}）
            </Link>
            <p className="mt-3 text-center text-xs text-neutral-500">
              安全无毒 · 官方直链 · 秒下秒装
            </p>
          </div>

          {/* 安装指南 */}
          <div className="prose-site">
            <h2>安卓版安装教程</h2>
            <ol className="list-decimal space-y-3 pl-5 text-neutral-300">
              <li>点击上方「下载 APK」按钮，等待文件下载完成。</li>
              <li>下载完成后，打开安装包，点击「安装」。</li>
              <li>若提示「未知来源」，请在系统设置中允许安装来自此来源的应用。</li>
              <li>安装完成后打开软件，即可开始浏览猫咪内容。</li>
            </ol>
            <h2>常见安装问题</h2>
            <ul className="text-neutral-300">
              <li>安装失败？请确认系统版本为 Android 5.0+，并清理存储空间。</li>
              <li>华为 / 小米等需在「纯净模式」中点击「仍要安装」。</li>
              <li>iOS 用户可访问移动网页版体验。</li>
            </ul>
            <p className="mt-4">
              <Link href="/guide" className="text-[#e50914] hover:underline">查看更详细的使用教程 →</Link>
            </p>
          </div>
        </div>
      </section>

      <DownloadCta />
    </>
  );
}