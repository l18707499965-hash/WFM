import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '页面未找到 (404)',
  description: `抱歉，您访问的页面不存在或已被移除。返回${SITE.name}首页或前往软件下载页。`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#e50914] text-5xl font-extrabold text-white shadow-lg shadow-red-900/40">
        404
      </div>
      <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        页面迷路了
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-neutral-300">
        抱歉，您访问的页面不存在或已被移除。回到我们的猫咪观影宇宙，继续探索海量内容吧。
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#e50914] px-6 py-3 font-semibold text-white transition hover:bg-[#f6121d]"
        >
          返回首页
        </Link>
        <Link
          href="/download"
          className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-[#e50914] hover:text-[#e50914]"
        >
          下载 {SITE.name}
        </Link>
      </div>
    </div>
  );
}