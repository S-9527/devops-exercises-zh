// 构建前自检：把生成的 markdown 按 VitePress 的方式渲染成 HTML，
// 再用 Vue 的模板编译器解析，提前发现会导致 vitepress build 失败的 HTML 结构问题。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import { createMarkdownRenderer } from 'vitepress'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const DOCS = path.join(ROOT, 'docs')

// @vue/compiler-dom 是 vitepress 的间接依赖，pnpm 不会把它放到顶层 node_modules
const pnpmDir = path.join(ROOT, 'node_modules/.pnpm')
const compilerDomDir = fs.readdirSync(pnpmDir).find((name) => name.startsWith('@vue+compiler-dom@'))
if (!compilerDomDir) throw new Error('找不到 @vue/compiler-dom，请先执行 pnpm install')
const require = createRequire(path.join(ROOT, 'noop.js'))
const { compile } = require(path.join(pnpmDir, compilerDomDir, 'node_modules/@vue/compiler-dom'))

const md = await createMarkdownRenderer(DOCS, {
  image: { lazyLoading: true },
  config(m) {
    m.renderer.rules.code_inline = (tokens, idx) =>
      `<code v-pre>${m.utils.escapeHtml(tokens[idx].content)}</code>`
  },
}, '/')

function stripFrontmatter(text) {
  return text.replace(/^---\n[\s\S]*?\n---\n/, '')
}

// base 从站点配置里读（和 generate.mjs 一致），用来检查有没有重复加前缀
const BASE = (fs.readFileSync(path.join(DOCS, '.vitepress/config.mts'), 'utf8').match(/const base = '([^']*)'/) || [, '/'])[1]
const DOUBLE_BASE = BASE === '/' ? null : `${BASE}${BASE.slice(1)}`

const files = []
;(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.vitepress' || e.name === 'public') continue
    const abs = path.join(dir, e.name)
    if (e.isDirectory()) walk(abs)
    else if (e.name.endsWith('.md')) files.push(abs)
  }
})(DOCS)

const problems = []
const warnings = new Map()
for (const abs of files) {
  const rel = path.relative(ROOT, abs)
  const raw = fs.readFileSync(abs, 'utf8')
  let html
  try {
    html = md.render(stripFrontmatter(raw))
  } catch (err) {
    problems.push({ rel, errors: [`markdown渲染失败: ${err.message}`] })
    continue
  }
  const errors = []
  // 子路径部署最容易踩的坑：base 被加了两次 → /repo/repo/images/x.png
  if (DOUBLE_BASE) {
    const dup = [...raw.matchAll(new RegExp(`(?:href|src)=["'][^"']*${DOUBLE_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'))]
    if (dup.length) {
      errors.push(`发现重复的 base 前缀 ×${dup.length}，例：${dup[0][0].slice(0, 100)}`)
    }
  }
  compile(html, {
    onError(e) {
      errors.push(`${e.message} @${e.loc ? `${e.loc.start.line}:${e.loc.start.column}` : '?'}`)
    },
    onWarn(w) {
      // 结构告警（例如 <td> 出现在 <p> 里）不算致命，但会导致 hydration 不匹配，统计出来方便排查
      const list = warnings.get(rel) || []
      list.push(w.message)
      warnings.set(rel, list)
    },
  })
  if (errors.length) problems.push({ rel, errors })
}

if (warnings.size) {
  const total = [...warnings.values()].reduce((sum, list) => sum + list.length, 0)
  console.log(`⚠ ${warnings.size} 个页面存在 HTML 结构告警（共 ${total} 条）：`)
  for (const [rel, list] of [...warnings.entries()].sort((a, b) => b[1].length - a[1].length).slice(0, 10)) {
    console.log(`  ${rel}  ×${list.length}  例：${list[0]}`)
  }
}

if (!problems.length) {
  console.log(`✓ HTML 自检通过（${files.length} 个页面）`)
} else {
  console.log(`✗ ${problems.length} / ${files.length} 个页面存在问题：`)
  for (const p of problems) {
    console.log(`\n  ${p.rel}`)
    for (const e of p.errors.slice(0, 6)) console.log(`    - ${e}`)
  }
  process.exitCode = 1
}
