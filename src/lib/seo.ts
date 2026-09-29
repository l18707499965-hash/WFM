import type { Metadata } from 'next';
import { SITE } from './site';

export interface PageMetaInput {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
  robots?: Metadata['robots'];
}

/**
 * 统一生成单页 SEO 元数据：
 * - 每页独立 title / description / keywords / canonical
 * - openGraph 与 twitter 的 url、title、description、image 均指向当前页，避免共享首页
 * 默认分享图使用品牌 Hero 海报（宽幅更适合 summary_large_image）。
 */
export function pageMeta({ title, description, keywords, path, ogImage, robots }: PageMetaInput): Metadata {
  const url = `${SITE.domain}${path}`;
  const image = ogImage ?? '/posters/hero.jpeg';
  return {
    title,
    description,
    keywords: keywords ?? SITE.keywords,
    alternates: { canonical: url },
    ...(robots ? { robots } : {}),
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url,
      siteName: `${SITE.name} ${SITE.nameEn}`,
      title,
      description,
      images: [
        {
          url: `${SITE.domain}${image}`,
          width: 2560,
          height: 1440,
          alt: `${SITE.name} ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE.domain}${image}`],
    },
  };
}