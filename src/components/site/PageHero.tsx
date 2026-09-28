import Link from 'next/link';

interface PageHeroProps {
  title: string;
  description: string;
  crumb?: string;
}

/** 内页顶部 Hero（含面包屑，利于 SEO） */
export default function PageHero({ title, description, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
      <nav className="mx-auto max-w-7xl px-4 pt-8 text-xs text-neutral-500 sm:px-6" aria-label="面包屑">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="transition hover:text-[#e50914]">首页</Link></li>
          {crumb ? (
            <>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-400">{crumb}</li>
            </>
          ) : null}
        </ol>
      </nav>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">{description}</p>
      </div>
    </section>
  );
}