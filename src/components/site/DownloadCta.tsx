import Link from 'next/link';
import { SITE } from '@/lib/site';

/** 通用下载 CTA 横幅，供各页面复用（强化内链与转化） */
export default function DownloadCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a0d0e] to-[#141414] p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#e50914]/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              立即下载 {SITE.name}，开启看片之旅
            </h2>
            <p className="mt-3 max-w-xl text-neutral-400">
              全新 {SITE.nameEn} App 支持安卓海量机型，极速秒开、智能推荐。一键安装，随时随地追剧。
            </p>
          </div>
          <Link
            href={SITE.downloadUrl}
            className="btn-brand inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-extrabold shadow-xl shadow-[#e50914]/30"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"/></svg>
            免费下载安卓版
          </Link>
        </div>
        <p className="relative mt-4 text-xs text-neutral-500">
          当前版本 {SITE.version} · 大小 {SITE.appSize} · Android 5.0+ 兼容
        </p>
      </div>
    </section>
  );
}