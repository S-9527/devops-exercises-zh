---
title: 阅读说明
---

# 阅读说明

## 这是什么

本站是 **devops-exercises** 中文翻译的 VitePress 阅读版，把原本一个几千行的 Markdown 文件拆成了按专题、按章节组织的站点，方便检索和逐题阅读。

- 共 **{{TOTAL_QUESTIONS}}** 道问答题，另有若干动手练习与参考答案
- 覆盖 Linux、Kubernetes、Docker、AWS、Azure、GCP、Terraform、Ansible、CI/CD、Prometheus、SRE、系统设计等主题
- 支持离线全文搜索（Pagefind）、深浅色主题、页内大纲和问答一键展开

## 内容来源

| 项目 | 地址 |
| --- | --- |
| 英文原版 | [bregman-arie/devops-exercises](https://github.com/bregman-arie/devops-exercises) |
| 中文翻译 | [shiranzby/SRE_Study](https://github.com/shiranzby/SRE_Study) |
| 翻译对应版本 | 上游 `2025-12-27` 的提交（上游当前最新版本） |

本站只是把中文翻译重新排版成文档站，**不是官方站点**，也不修改题目和答案的实质内容（仅修正个别专题标题、调整链接和排版）。

## 怎么用

1. **搜索**：点击顶部搜索框（或按 `/`），输入中文或英文关键词，例如“PVC”“网络”“Terraform state”。
2. **按专题**：首页的专题卡片按「基础 / 容器 / 云平台 / 可观测性 / 开发 / SRE」分组。
3. **按章节**：左侧「题库章节」对应原 README 的 29 个章节，顺序与原文一致。
4. **展开答案**：问答默认折叠，点击问题展开；每页顶部有「全部展开 / 全部收起」。
5. **页内跳转**：右侧「本页目录」会跟随滚动高亮。

## 翻译质量说明

中文内容由 AI 辅助翻译，整体可读，但以下情况需要留意：

- 专有名词可能被直译，例如早期的 `CircleCI`、`Zuul`、`Kafka` 等标题；本站已在导航中修正
- 部分答案保留了英文术语、命令和代码，属于正常现象
- 少数语句可能存在机翻痕迹，涉及面试作答时建议对照[英文原版](https://github.com/bregman-arie/devops-exercises)

发现明显错误可以在 [上游翻译仓库](https://github.com/shiranzby/SRE_Study) 提 issue，或直接修改本项目的 `content/` 后重新生成。

## 许可

上游内容采用 **CC BY-NC-ND 3.0** 许可：

- 署名：保留原项目与译者署名
- 非商业性使用：不得用于商业目的
- 禁止演绎：不得修改原作品后再次分发

本站仅为学习交流用途。完整条款见[许可证页面](/license)。

## 本地运行与更新

```bash
# 安装依赖
pnpm install

# 开发预览（会先根据 content/ 生成 docs/）
pnpm dev

# 构建静态站点
pnpm build

# 预览构建结果
pnpm preview
```

更新翻译内容：

```bash
# 用最新的中文翻译替换 content/
git clone --depth 1 https://github.com/shiranzby/SRE_Study.git /tmp/SRE_Study
rm -rf content && cp -a /tmp/SRE_Study content
rm -rf content/.git content/.github

# 重新生成并构建
pnpm build
```

## 免责声明

题目和答案不保证完全正确，也不代表真实面试题。请把本站当作学习提纲和练习索引，而不是标准答案。
