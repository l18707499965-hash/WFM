import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { SITE } from '@/lib/site';

const baseUrl = SITE.domain;

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} - ${SITE.tagline}`,
    template: `${SITE.name} - %s | ${SITE.name} ${SITE.nameEn}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: `${SITE.name} 团队` }],
  category: '影视娱乐',
  alternates: { canonical: baseUrl },
  other: {
    'applicable-device': 'pc,mobile',
    'format-detection': 'telephone=no',
  },
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
  referrer: 'origin-when-cross-origin',
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
    // 百度站长平台站点验证
    other: {
      'baidu-site-verification': 'codeva-2MAdoJNVX8',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#e50914',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
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
          {/* 无障碍跳转主内容链接（SEO 与可访问性加分） */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#e50914] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            跳至主要内容
          </a>
          <Header />
          <main id="main" className="site-main">{children}</main>
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
        {/* 百度主动推送（实时）：每次访问自动把当前页面 URL 推给百度，加速收录 */}
        <Script id="baidu-push" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https') {
              bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
            } else {
              bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(bp, s);
          })();
        ` }} />
      </body>
    </html>
  );
}