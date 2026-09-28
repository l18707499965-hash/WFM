import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// 全量开放爬虫收录：不屏蔽任何路径，方便百度 / 必应 / 谷歌 / 夸克抓取
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain.replace(/^https?:\/\//, ''),
  };
}