import { defineConfig } from 'vitepress'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
import sidebar from './sidebar.json'

// 如果部署到 GitHub Pages 的子路径（https://<user>.github.io/<repo>/），
// 把 base 改成 '/<repo>/'，并把 generate.mjs 里的站内链接改成相对路径。
const base = '/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'DevOps 练习题库',
  titleTemplate: ':title | DevOps 练习题库（中文）',
  description:
    'devops-exercises 中文版：2624 道 DevOps / SRE 面试题与练习，覆盖 Linux、Kubernetes、Docker、AWS、Terraform、Prometheus 等主题。',
  base,
  cleanUrls: true,
  lastUpdated: false,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}images/devops.png` }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
  ],

  markdown: {
    image: { lazyLoading: true },
    config(md) {
      // 行内代码里的 {{ ... }} 交给 v-pre，避免被 Vue 当成插值
      md.renderer.rules.code_inline = (tokens, idx) =>
        `<code v-pre>${md.utils.escapeHtml(tokens[idx].content)}</code>`
    },
  },

  // 图片都放在 docs/public 下、用 /xxx.png 这样的绝对路径引用，
  // 关掉 Vue 的静态资源改写，避免 Vite 去 srcDir 里 import 这些文件
  vue: {
    template: {
      transformAssetUrls: false,
    },
  },

  themeConfig: {
    logo: `${base}images/devops.png`,
    siteTitle: 'DevOps 题库',

    nav: [
      { text: '题库', link: '/guide/' },
      { text: '专题', link: '/topics/devops/' },
      { text: '面试准备', link: '/prepare_for_interview' },
      { text: '认证', link: '/certificates/cka' },
      {
        text: '更多',
        items: [
          { text: '阅读说明', link: '/about' },
          { text: '常见问题', link: '/faq' },
          { text: '贡献指南', link: '/CONTRIBUTING' },
          { text: '英文原版', link: 'https://github.com/bregman-arie/devops-exercises' },
          { text: '中文翻译源', link: 'https://github.com/shiranzby/SRE_Study' },
        ],
      },
    ],

    sidebar,

    outline: { level: [2, 3], label: '本页目录' },

    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    externalLinkIcon: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shiranzby/SRE_Study', ariaLabel: '中文翻译源仓库' },
    ],

    footer: {
      message: '基于 CC BY-NC-ND 3.0 许可的中文翻译 · 仅供学习交流',
      copyright: '翻译：SRE_Study · 原项目：bregman-arie/devops-exercises',
    },
  },

  vite: {
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        forceLanguage: 'zh-cn',
        btnPlaceholder: '搜索',
        placeholder: '搜索题目、关键词…',
        emptyText: '没有找到相关内容',
        heading: '共 {{searchResult}} 条结果',
        excludeSelector: ['img', 'a.header-anchor', '.qa-toolbar', '.topic-grid'],
      }),
    ],
  },
})
