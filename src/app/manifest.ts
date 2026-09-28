import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} ${SITE.nameEn}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    lang: 'zh-CN',
    icons: [
      { src: SITE.logo, sizes: '512x512', type: 'image/png' },
      { src: SITE.logo, sizes: '192x192', type: 'image/png' },
    ],
  };
}