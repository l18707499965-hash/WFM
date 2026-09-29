# DESIGN.md — 网飞猫 (NCAT.APP) 官网

## 品牌画像
网飞猫（NCAT.APP）是一款免费影视追剧应用（电影、电视剧、短剧、动漫），面向大众在线观影心智。视觉沿用参考图的「纯黑底 + 高饱和红 Cat-C LOGO + 白色 NCAT.APP」，气质对标 Netflix 的沉浸式观影感。SEO 内容定位参考 m.ncats.cn：突出「新片热剧、在线观看、播放记录、蓝光画质、官网下载」等长尾关键词，配以用户评价与 FAQ 模块提升排名。

## Design Tokens
### 色彩
- 底色：近纯黑 `#0a0a0a`（电影暗场气质），次级面板 `#141414`，悬浮卡片 `#1f1f1f`
- 品牌红：高饱和朱红 `#e50914`（Netflix 同源红，作 LV/CTA/悬停高亮）
- 文字：主白 `#ffffff`、次级灰 `#a3a3a3`、弱化灰 `#6b6b6b`
- 渐变：Hero 底部用黑→透明遮罩，营造电影放映氛围

### 字体
- 中文字体族：系统无衬线栈（`PingFang SC` / `Microsoft YaHei` / sans-serif）
- 标题：粗体、大字号、字距收敛（flic 式大片感）
- 正文：14-16px，行高宽松

### 布局与交互
- 全屏 Hero：大标题 + 红色主 CTA + 屏风遮罩，类 Netflix 首屏
- 横向滚动内容行：hover 放大卡片 `scale(1.08)`，带品牌红描边
- 导航吸顶：滚动后背景由透明渐变至纯黑
- 卡片阴影随 hover 加深，悬停过渡 `transition-transform 300ms ease`

## 交互与状态
- 按钮：主按钮品牌红底白字；次按钮半透明描边，hover 填红
- 悬停动效统一为"轻快放大 + 描边点亮"，不拖沓

## 设计禁忌
- 禁止用"科技蓝 + 白卡片 + 蓝紫渐变"的万能模板——本品牌必须是黑红白的电影/影音气质
- 不用尖锐圆角，统一中大圆角营造亲和、柔软的猫系气质
- 避免粉色系（虽为猫主题，但品牌锚点是 Netflix 的红，不是萌系粉）

## 多页官网结构与 SEO（官网版）
- **站点形态**：软件官网（下载落地页），采用 Next.js App Router 服务端渲染，保证爬虫可读。
- **页面架构**：首页 / 下载 / 功能介绍 / 使用教程 / 常见问题 / 帮助中心 / 版本更新 / 关于我们 / 用户协议 / 隐私政策 / 网站地图。
- **SEO 规范**：每页独立 title/description/keywords/canonical + OpenGraph；站点级 Schema.org（Organization / WebSite / SoftwareApplication / FAQPage）；robots.txt 全量开放；sitemap.xml 覆盖全站；全文语义化标签（h1/h2/article/nav/ol）与面包屑。
- **统计与分享**：全局引入百度统计（afterInteractive）；下载链接统一走 `SITE.downloadUrl`（apk 直链）。
- **视觉统一**：所有内页复用 PageHero / DownloadCta / Footer 组件，保持黑红白品牌一致性与内链密度。