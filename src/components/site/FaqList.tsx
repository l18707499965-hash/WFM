'use client';

interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_DATA: FaqItem[] = [
  { q: '网飞猫是什么？收费吗？', a: '网飞猫（NCAT.APP）是一款专注猫咪视角的流媒体影音软件。免费下载、免费观看大部分内容，VIP 可解锁 4K 超高清、离线缓存等高级功能。' },
  { q: '支持哪些设备？', a: '支持安卓手机、平板、智能电视与电脑。登录同一账号即可多端同步播放进度。' },
  { q: '如何下载安装？', a: '在下载页点击「下载 APK」安装即可。若系统提示未知来源，请在设置中允许安装后继续。' },
  { q: '可以离线缓存吗？', a: '可以。在有网络时点击下载按钮即可缓存到本地，无网状态下也能随时观看。' },
  { q: '如何取消 VIP 自动续费？', a: '在「我的-续费管理」中可随时取消自动续费，取消后服务在到期日停止，不额外扣费。' },
  { q: '遇到观看卡顿怎么办？', a: '可在播放器设置中降低清晰度或切换播放线路；也可检查网络并关闭占用带宽的应用。' },
  { q: '账号可以多台设备登录吗？', a: '普通版支持 1 台设备同播，VIP 支持 2-4 台设备同时观看，具体以套餐说明为准。' },
  { q: '是否提供客服支持？', a: '提供 7×24 小时在线客服。如遇问题可前往帮助中心联系我们，我们会尽快响应。' },
];

export default function FaqList() {
  return (
    <div className="space-y-3">
      {FAQ_DATA.map((item, i) => (
        <details key={item.q} className="group rounded-xl border border-white/10 bg-[#1f1f1f] open:border-[#e50914]/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-medium text-white">{i + 1}. {item.q}</span>
            <span className="shrink-0 text-xl leading-none text-[#e50914] transition group-open:rotate-45">+</span>
          </summary>
          <div className="px-6 pb-5">
            <p className="leading-7 text-neutral-400">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}