import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/site/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '网站地图',
  description: `网飞猫官网全部页面的索引，方便快速导航与搜索引擎收录。`,
  robots: { index: false, follow: true },
};

const GROUPS: Array<{ title: string; links: Array<{ href: string; label: string }> }> = [
  {
    title: '主要页面',
    links: [
      { href: '/', label: '首页' },
      { href: '/download', label: '下载网飞猫安卓版' },
      { href: '/features', label: '功能介绍' },
      { href: '/version', label: '版本更新记录' },
    ],
  },
  {
    title: '帮助支持',
    links: [
      { href: '/guide', label: '使用教程' },
      { href: '/faq', label: '常见问题' },
      { href: '/help', label: '帮助中心' },
    ],
  },
  {
    title: '公司信息',
    links: [
      { href: '/about', label: '关于我们' },
      { href: '/terms', label: '用户协议' },
      { href: '/privacy', label: '隐私政策' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero title="网站地图" description="网飞猫官网全站导航索引，快速找到你想要的内容。" crumb="网站地图" />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-8">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{g.title}</h2>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-lg border border-white/10 bg-[#141414] p-4 text-sm font-medium text-neutral-200 transition hover:border-[#e50914]/50 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-neutral-500">如页面地址发生变化，请以本地图为准。最后更新时间：{new Date().toLocaleDateString('zh-CN')}</p>
      </section>
    </>
  );
}