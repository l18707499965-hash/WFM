import Link from 'next/link';
import { SITE } from '@/lib/site';

interface PageHeroProps {
  title: string;
  description: string;
  crumb?: string;
  /** 当前页面路径（如 /download），用于 BreadcrumbList 结构化数据 */
  path?: string;
}

/** 内页顶部 Hero：语义化 header + 面包屑导航 + BreadcrumbList 结构化数据 */
export default function PageHero({ title, description, crumb, path = '/' }: PageHeroProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: SITE.domain },
      ...(crumb
        ? [{ '@type': 'ListItem', position: 2, name: crumb, item: `${SITE.domain}${path}` }]
        : []),
    ],
  };

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
      {/* 面包屑结构化数据：强化搜索富结果（星级/面包屑层级） */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <nav className="mx-auto max-w-7xl px-4 pt-8 text-xs text-neutral-500 sm:px-6" aria-label="面包屑">
        <ol className="flex items-center gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="transition hover:text-[#e50914]"><span itemProp="name">首页</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          {crumb ? (
            <>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-neutral-400">{crumb}</span>
                <meta itemProp="position" content="2" />
                <meta itemProp="item" content={`${SITE.domain}${path}`} />
              </li>
            </>
          ) : null}
        </ol>
      </nav>
      <header className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">{description}</p>
      </header>
    </section>
  );
}
