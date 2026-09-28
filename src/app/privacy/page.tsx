import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '隐私政策',
  description: `网飞猫隐私政策，说明我们如何收集、使用与保护您的个人信息。`,
  alternates: { canonical: `${SITE.domain}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="隐私政策" description="我们重视你的隐私，承诺以透明、安全的方式处理你的个人信息。" crumb="隐私政策" />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="prose-site rounded-2xl border border-white/10 bg-[#141414] p-8 sm:p-10">
          <h2>一、信息收集</h2>
          <p>为提供稳定服务，我们可能收集必要的设备信息、网络状态与您主动提交的内容（如反馈、账号信息），仅用于改善产品与服务体验。</p>
          <h2>二、信息使用</h2>
          <p>我们仅将收集的信息用于：提供与维护服务、个性化推荐、安全风控与合规要求。未经您的同意，我们不会将个人信息用于其他用途。</p>
          <h2>三、信息保护</h2>
          <p>我们采用行业领先的技术与管理措施保护您的信息安全，防止数据被未经授权地访问、公开、使用、修改或破坏。</p>
          <h2>四、信息共享</h2>
          <p>除法律法规要求或获得您明确授权外，我们不会向第三方出售、出租您的个人信息。</p>
          <h2>五、您的权利</h2>
          <p>您有权查询、更正、删除您的个人信息，或撤回授权。如有需要，可通过帮助中心联系我们处理。</p>
          <h2>六、政策更新</h2>
          <p>本政策可能不时更新，重大变更会通过站内显著位置提示。隐私政策以最新版本为准。</p>
        </div>
      </section>
    </>
  );
}