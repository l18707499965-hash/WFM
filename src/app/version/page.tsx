import { pageMeta } from '@/lib/seo';
import PageHero from '@/components/site/PageHero';
import DownloadCta from '@/components/site/DownloadCta';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: '版本更新记录',
  description: `网飞猫版本更新日志，了解最新版本 v2.6.1 带来的新功能与优化内容。`,
  keywords: ['网飞猫版本', '网飞猫更新日志', '影视App更新'],
  path: '/version',
});

const LOGS = [
  { v: 'v2.6.1', date: '2024-12-18', items: ['优化播放器解码，起播提速 40%', '修复部分机型离线缓存异常', '增强推荐算法精准度'] },
  { v: 'v2.5.2', date: '2024-11-02', items: ['新增 4K HDR 专区', '加入倍速播放与字幕切换', '优化弱网环境播放流畅度'] },
  { v: 'v2.4.0', date: '2024-09-15', items: ['全新 UI 界面改版', '支持多设备同步进度', '新增亲子模式与家长锁'] },
  { v: 'v2.3.1', date: '2024-07-20', items: ['支持安卓 TV 大屏', '优化离线缓存管理', '修复若干已知问题'] },
];

export default function VersionPage() {
  return (
    <>
      <PageHero
        title="版本更新记录"
        description="网飞猫持续打磨体验，每一个版本都更懂你。当前最新版本 v2.6.1。"
        crumb="版本更新"
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="space-y-5">
          {LOGS.map((log) => (
            <article key={log.v} className="rounded-xl border border-white/10 bg-[#141414] p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">{log.v}</h2>
                <span className="text-sm text-neutral-500">{log.date}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {log.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-[#e50914]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="prose-site mt-8 rounded-2xl border border-white/10 bg-[#141414] p-8">
          <h2>更新建议</h2>
          <p>建议开启应用内自动更新，及时体验最新功能与最佳性能。iOS / Android 均可通过应用内提示完成升级。</p>
        </div>
      </section>

      <DownloadCta />
    </>
  );
}