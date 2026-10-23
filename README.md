# DevOps 练习题库（中文版）

把 [bregman-arie/devops-exercises](https://github.com/bregman-arie/devops-exercises) 的中文译本
（[shiranzby/SRE_Study](https://github.com/shiranzby/SRE_Study)）从「一坨巨大的 README + 目录」变成
一个可以舒服刷题的 VitePress 站点：折叠问答、大纲导航、离线全文搜索。

- 2962 道问答 / 314 个页面 / 37 个专题
- 问答默认折叠，页面顶部有「全部展开 / 全部收起」
- 内置 Pagefind 离线搜索（中文分词）
- 全静态输出，可直接丢到 GitHub Pages / Netlify / 任意静态托管

## 快速开始

```bash
pnpm install

pnpm dev      # 生成页面 + 本地预览 http://localhost:5173
pnpm build    # 自检 + 构建到 docs/.vitepress/dist
pnpm preview  # 预览构建结果
```

其它命令：

```bash
pnpm content  # 只重新生成 docs/ 下的 markdown
pnpm check    # 只跑 HTML 自检（见下文）
```

## 目录结构

```
content/                   上游中文译本的原始 markdown 与图片（基本不要改）
scripts/generate.mjs       生成器：content/ → docs/
scripts/check.mjs          自检：把生成结果按 VitePress 的方式渲染成 HTML 并用 Vue 编译器解析
templates/about.md         「阅读说明」页模板
docs/                      生成出来的站点源码（md 由脚本生成，可随时重建）
docs/.vitepress/config.mts 站点配置（导航、搜索、markdown 选项）
docs/.vitepress/theme/     主题扩展（问答工具条、样式）
docs/public/               静态资源（图片等，按 content/ 的相对路径复制过来）
```

## 生成器做了什么

上游 Markdown 是给 GitHub 看的，直接喂给 VitePress 会踩一堆坑，`scripts/generate.mjs` 负责抹平：

1. **拆分根 README**：按 `##` 拆成 `docs/guide/*.md`，标题降级，生成总览页。
2. **重写链接与图片**：相对路径统一转成站点绝对路径；找不到的相对路径回退到仓库根目录再试一次
   （上游有些图片是按根目录写的）；`#anchor` 会跟着页面搬家。
3. **规整 `<details>` 问答块**：原文是 `<details>` / `<summary>问题</summary><br><b>` / 答案 / `</b></details>`，
   而 markdown-it 的 HTML 块遇到空行就结束，Vue 编译模板时会报 `Element is missing end tag`。
   生成器把问题压成一行并预渲染成行内 HTML，把答案去掉包裹用的 `<b>`，输出成 `<details> / <summary> / 空行 / 答案 / </details>`。
   上游漏写 `<details>` 的孤立 `<summary>` 也会自动补上外层标签。
4. **HTML 清洗**（`sanitizeHtml`）：按空行分块检查标签配对，白名单之外的标签
   （`<PID>`、`<HOSTNAME>`、`<job-name>` 这类占位符）一律转义；跨段落的行内标签自动闭合并在下一段重开；
   `<details>` 允许跨段落保持打开。
5. **`{{ }}` 转义**：正文里的双大括号会被 Vue 当插值，行内代码用 `v-pre` 兜住。
6. **侧边栏、首页、统计数字**：从内容里算出来，避免写死。

## 自检脚本

VitePress 的构建是「遇到第一个错误就停」，几百个页面挨个试错很慢，所以 `scripts/check.mjs` 会：

1. 用 `vitepress` 的 `createMarkdownRenderer` 把每个页面渲染成 HTML；
2. 用 `@vue/compiler-dom` 解析这份 HTML（和 VitePress 编译模板的路径基本一致）；
3. 一次性列出所有会构建失败的页面和行号。

`pnpm build` 会先跑自检，自检不过就不会开始构建。

## 部署

默认 `base = '/'`。如果部署在子路径（例如 `https://<user>.github.io/devops-zh-site/`），
把 `docs/.vitepress/config.mts` 里的 `base` 改成 `'/devops-zh-site/'` 再构建即可。

构建产物在 `docs/.vitepress/dist`。

## 说明与许可

- 内容版权归上游所有，中文翻译来自 [SRE_Study](https://github.com/shiranzby/SRE_Study)，
  遵循上游 **CC BY-NC-ND 3.0** 许可，仅供学习交流。
- 翻译由 AI 辅助完成，术语可能有出入，遇到疑问请对照
  [英文原版](https://github.com/bregman-arie/devops-exercises)。
