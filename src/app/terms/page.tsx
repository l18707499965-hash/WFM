import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '用户协议',
  description: `网飞猫用户服务协议，包括服务说明、用户行为规范、知识产权与免责声明等内容。`,
  alternates: { canonical: `${SITE.domain}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="用户协议" description="请在使用网飞猫服务前仔细阅读本协议。" crumb="用户协议" />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="prose-site rounded-2xl border border-white/10 bg-[#141414] p-8 sm:p-10">
          <h2>一、服务说明</h2>
          <p>{SITE.name}（{SITE.nameEn}）为用户提供在线影视内容浏览、播放、缓存等服务。本协议适用于您使用我们全部产品与服务的行为。</p>
          <h2>二、账号规则</h2>
          <p>您应妥善保管账号与密码，因您本人原因造成的账号遗失或信息泄露，由您自行承担相应责任。</p>
          <h2>三、用户行为规范</h2>
          <p>您承诺不会利用本服务从事任何违反法律法规或侵犯他人合法权益的行为，包括但不限于传播违法信息、侵犯著作权、恶意破坏系统安全等。</p>
          <h2>四、知识产权</h2>
          <p>平台内容及相关软件的知识产权归我们或相应权利人所有。未经授权，禁止复制、传播、改编或用于商业用途。</p>
          <h2>五、免责声明</h2>
          <p>我们将尽力保障服务的稳定与安全，但不对不可抗力、网络异常等导致的临时中断承担责任。本站收录的软件资源仅供学习交流，请于下载后 24 小时内删除。</p>
          <h2>六、协议变更</h2>
          <p>我们可能适时更新本协议，更新后将通过站内公告等方式通知，继续使用服务即视为同意更新后的协议。</p>
        </div>
      </section>
    </>
  );
}