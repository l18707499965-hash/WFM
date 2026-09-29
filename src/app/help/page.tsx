import { pageMeta } from '@/lib/seo';
import PageHero from '@/components/site/PageHero';
import DownloadCta from '@/components/site/DownloadCta';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: '帮助中心',
  description: `网飞猫帮助中心：覆盖下载安装、账号、播放、离线缓存等常见问题，并提供 7×24 小时客服支持。`,
  keywords: ['网飞猫帮助中心', '网飞猫客服', '影视软件帮助'],
  path: '/help',
});

export default function HelpPage() {
  return (
    <>
      <PageHero
        title="帮助中心"
        description="需要帮助？这里汇总了最常用的支持入口与联系方式，我们随时在你身边。"
        crumb="帮助中心"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: '下载与安装', d: '找不到安装包？看这里解决安装问题。', h: '/download' },
            { t: '使用教程', d: '从零开始玩转网飞猫的视频图文指南。', h: '/guide' },
            { t: '常见问题', d: '高频疑问的快捷解答。', h: '/faq' },
            { t: '版本更新', d: '了解最新版本带来的新功能。', h: '/version' },
          ].map((c) => (
            <a key={c.t} href={c.h} className="poster rounded-xl border border-white/10 bg-[#141414] p-6">
              <h2 className="text-lg font-bold text-white">{c.t}</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-400">{c.d}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#141414] p-8">
          <h2 className="text-xl font-bold text-white">联系客服</h2>
          <p className="mt-2 text-neutral-400">如遇任何问题，欢迎通过以下方式联系我们，7×24 小时在线。</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { k: '在线客服', v: 'App 内「我的-联系客服」' },
              { k: '反馈邮箱', v: 'support@ncat.app（演示）' },
              { k: '工作时间', v: '7×24 小时' },
            ].map((c) => (
              <div key={c.k} className="rounded-lg border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-neutral-500">{c.k}</p>
                <p className="mt-1 font-medium text-white">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownloadCta />
    </>
  );
}