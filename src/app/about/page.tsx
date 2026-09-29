import { pageMeta } from '@/lib/seo';
import PageHero from '@/components/site/PageHero';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: '关于我们',
  description: `了解${SITE.name}（${SITE.nameEn}）品牌愿景、使命与团队故事。专注猫咪视角的流媒体平台。`,
  keywords: ['网飞猫关于我们', '网飞猫公司', 'NCAT品牌'],
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        description="我们是网飞猫，一群爱猫也爱电影的产品人，立志让每一只猫都有属于自己的观影宇宙。"
        crumb="关于我们"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="prose-site rounded-2xl border border-white/10 bg-[#141414] p-8 sm:p-10">
          <h2>品牌故事</h2>
          <p>
            {SITE.name}（{SITE.nameEn}）诞生于一个朴素的想法：猫咪是当代年轻人最重要的精神陪伴，却缺少一个真正以"猫咪"为叙事中心的流媒体世界。于是我们打造了集原创剧集、电影、纪录片与动画于一体的猫咪专属平台。
          </p>
          <h2>我们的使命</h2>
          <p>
            通过极致的观影体验与内容创作，陪伴每一位猫友的独处时光。我们始终坚持"内容为王、体验至上"，把最好的画面、声音与故事，送达你与猫之间。
          </p>
          <h2>品牌价值观</h2>
          <ul>
            <li><strong>匠心内容</strong>：尊重创作，追求每一帧的品质。</li>
            <li><strong>极致体验</strong>：从起播速度到画质音效，不断打磨。</li>
            <li><strong>真诚陪伴</strong>：让每一次观看都充满温度。</li>
          </ul>
          <h2>联系我们</h2>
          <p>
            商务与媒体合作、问题反馈，欢迎通过帮助中心与我们取得联系，也欢迎关注我们的官方社区。
          </p>
        </div>
      </section>
    </>
  );
}