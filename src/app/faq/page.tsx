import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import DownloadCta from '@/components/site/DownloadCta';
import FaqList from '@/components/site/FaqList';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '常见问题（FAQ）',
  description: `网飞猫常见问题解答汇总：收费、设备、下载、离线缓存、账号与播放等高频疑问一键解决。`,
  keywords: ['网飞猫常见问题', '网飞猫FAQ', '网飞猫收费', '影视App答疑'],
  alternates: { canonical: `${SITE.domain}/faq` },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '网飞猫是什么？收费吗？', acceptedAnswer: { '@type': 'Answer', text: '网飞猫是专注猫咪视角的流媒体影音软件，免费下载、免费观看大部分内容，VIP 可解锁 4K 超高清与离线缓存。' } },
    { '@type': 'Question', name: '支持哪些设备？', acceptedAnswer: { '@type': 'Answer', text: '支持安卓手机、平板、智能电视与电脑，多端同步播放进度。' } },
    { '@type': 'Question', name: '如何下载安装网飞猫？', acceptedAnswer: { '@type': 'Answer', text: '在下载页点击下载 APK 安装即可，系统提示未知来源时在设置中允许安装。' } },
    { '@type': 'Question', name: '可以离线缓存吗？', acceptedAnswer: { '@type': 'Answer', text: '可以，在有网络时点击下载按钮缓存到本地，无网也能观看。' } },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        title="常见问题"
        description="关于网飞猫的下载、收费、设备支持与使用问题的集中解答，帮助你快速找到答案。"
        crumb="常见问题"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <FaqList />
        <p className="mt-8 text-center text-sm text-neutral-400">
          没有找到答案？请前往{' '}
          <a href="/help" className="text-[#e50914] hover:underline">帮助中心</a>{' '}
          联系客服。
        </p>
      </section>

      <DownloadCta />
    </>
  );
}