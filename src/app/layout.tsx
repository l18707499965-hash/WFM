import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { SITE } from '@/lib/site';

const baseUrl = SITE.domain;

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} - ${SITE.tagline}`,
    template: `%s | ${SITE.name} ${SITE.nameEn}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: `${SITE.name} 团队` }],
  alternates: { canonical: baseUrl },
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: baseUrl,
    siteName: `${SITE.name} ${SITE.nameEn}`,
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: `${baseUrl}${SITE.logo}`, width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    images: [`${baseUrl}${SITE.logo}`],
  },
  icons: { icon: SITE.icon },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    // 预留：可在此填入 Google/Bing 等站长验证码
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: SITE.nameEn,
  url: baseUrl,
  logo: `${baseUrl}${SITE.logo}`,
  description: SITE.description,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${SITE.name} ${SITE.nameEn}`,
  url: baseUrl,
  description: SITE.description,
  inLanguage: 'zh-CN',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {/* 结构化数据 - 方便搜索引擎理解站点 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>

        {/* 百度统计 */}
        <Script id="baidu-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?${SITE.baiduAnalyticsId}";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
        ` }} />
      </body>
    </html>
  );
}