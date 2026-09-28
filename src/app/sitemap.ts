import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// 站点地图：帮助搜索引擎发现全部页面并提升收录
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pathPriorities: Array<{ path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' },
    { path: '/download', priority: 0.9, changeFrequency: 'daily' },
    { path: '/features', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/guide', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/help', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/version', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pathPriorities.map((p) => ({
    url: `${SITE.domain}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}