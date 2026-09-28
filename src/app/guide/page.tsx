import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import DownloadCta from '@/components/site/DownloadCta';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '使用教程',
  description: `网飞猫使用教程：下载安装、注册登录、搜索观影、离线下载与多设备同步的完整图文步骤，新手也能快速上手。`,
  keywords: ['网飞猫教程', '网飞猫怎么用', '影视App使用教程', '离线下载'],
  alternates: { canonical: `${SITE.domain}/guide` },
};

const STEPS = [
  {
    t: '下载并安装',
    d: '访问下载页，点击「下载 APK」安装网飞猫。若提示未知来源，请在系统设置中授权后继续安装。',
  },
  {
    t: '打开应用',
    d: '首次打开建议允许必要权限（网络、存储），以获得离线下载与完整观影体验。',
  },
  {
    t: '浏览与搜索',
    d: '首页根据推荐智能展示内容，也可通过顶部搜索框直接搜索片名、演员或关键词。',
  },
  {
    t: '开始观影',
    d: '点击海报进入详情页，选择清晰度与集数即可播放。支持倍速播放与字幕切换。',
  },
  {
    t: '离线缓存',
    d: '在有网络时点击下载按钮缓存到本地，无网环境仍可随时观看。',
  },
  {
    t: '多设备同步',
    d: '登录同一账号后，播放进度自动同步到电视、手机与电脑端，无缝衔接。',
  },
];

export default function GuidePage() {
  return (
    <>
      <PageHero
        title="使用教程"
        description="从下载安装到多设备同步，一步步带你玩转网飞猫，全程图文并茂零门槛。"
        crumb="使用教程"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <ol className="space-y-6">
          {STEPS.map((s, i) => (
            <li key={s.t} className="flex gap-5 rounded-xl border border-white/10 bg-[#141414] p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e50914] text-lg font-black text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="text-lg font-bold text-white">{s.t}</h2>
                <p className="mt-1.5 leading-6 text-neutral-400">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="prose-site mt-10 rounded-2xl border border-white/10 bg-[#141414] p-8">
          <h2>小贴士</h2>
          <ul>
            <li>遇到播放卡顿，可在设置中降低清晰度或切换播放线路。</li>
            <li>开启「后台播放」即可边听边刷其他应用。</li>
            <li>晚安定时器，躺下看剧也能安心入睡。</li>
          </ul>
          <h2>仍在使用中遇到问题？</h2>
          <p>
            可前往{' '}
            <a href="/faq" className="text-[#e50914] hover:underline">常见问题</a>{' '}
            查看解答，或到{' '}
            <a href="/help" className="text-[#e50914] hover:underline">帮助中心</a>{' '}
            联系客服，我们 7×24 小时为你服务。
          </p>
        </div>
      </section>

      <DownloadCta />
    </>
  );
}