import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} 首页`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SITE.logo}
            alt={`${SITE.name} ${SITE.nameEn} LOGO`}
            className="h-10 w-10 rounded-xl object-cover"
            width={40}
            height={40}
          />
          <span className="text-lg font-extrabold tracking-tight text-white">
            {SITE.name}
            <span className="ml-1 text-[11px] font-semibold text-neutral-400">{SITE.nameEn}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-300 lg:flex" aria-label="主导航">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="btn-brand hidden items-center gap-1.5 rounded-md px-4 py-2 text-sm font-bold sm:inline-flex"
          >
            立即下载
          </Link>
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-white [&::-webkit-details-marker]:hidden">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </summary>
            <nav className="absolute right-0 top-12 w-48 overflow-hidden rounded-lg border border-white/10 bg-[#141414] shadow-2xl" aria-label="移动端导航">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="block border-b border-white/5 px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/5 hover:text-white">
                  {l.label}
                </Link>
              ))}
              <Link href={SITE.downloadUrl} className="btn-brand block px-4 py-3 text-sm font-bold text-center">
                立即下载
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}