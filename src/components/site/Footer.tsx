import Link from 'next/link';
import { FOOTER_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <img src={SITE.logo} alt={`${SITE.name} LOGO`} className="h-10 w-10 rounded-xl object-cover" width={40} height={40} />
              <span className="text-lg font-extrabold text-white">{SITE.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              {SITE.tagline}。聚合海量猫咪影像内容，4K HDR、杜比全景声，多设备无缝观影。
            </p>
            <p className="mt-4 text-xs text-neutral-500">
              服务支持：{SITE.nameEn} · 备案中
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="mb-3 text-sm font-bold text-white">{col.title}</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition hover:text-[#e50914]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>
            © 2024 {SITE.name} {SITE.nameEn} 版权所有 · 本站收录软件仅供学习交流，请于 24 小时内删除
          </p>
          <p className="flex items-center gap-1.5">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-[#e50914] text-[9px] font-black text-white">N</span>
            猫力驱动 · 无限精彩
          </p>
        </div>
      </div>
    </footer>
  );
}