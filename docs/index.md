---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 濑户
  text: 今天天气真好
  tagline: 我的理想永不坠落
  image:
    src: /logo.jpg
    alt: 濑户
  actions:
    - text: 前端物语
      link: /fe/es6/
    - text: 前端导航
      link: /nav
      theme: alt
    - text: 日常笔记
      link: /daily-notes/
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /fe/javascript/types
    linkText: 前端常用知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /workflow/utils/library
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /efficiency/online-tools
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /pit/npm
    linkText: 踩坑记录
  - icon: 💯
    title: 我的理想永不坠落
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: /wild
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

</style>