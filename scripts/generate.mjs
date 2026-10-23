import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createMarkdownRenderer } from 'vitepress'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const SRC = path.join(ROOT, 'content')
const DOCS = path.join(ROOT, 'docs')
const PUBLIC = path.join(DOCS, 'public')
const VP_DIR = path.join(DOCS, '.vitepress')

const posix = path.posix

/** 和 docs/.vitepress/config.mts 里的 markdown 配置保持一致 */
const md = await createMarkdownRenderer(
  DOCS,
  {
    image: { lazyLoading: true },
    config(m) {
      m.renderer.rules.code_inline = (tokens, idx) =>
        `<code v-pre>${m.utils.escapeHtml(tokens[idx].content)}</code>`
    },
  },
  '/',
)

/* ------------------------------------------------------------------ */
/* 元数据                                                              */
/* ------------------------------------------------------------------ */

const TOPIC_LABELS = {
  ansible: 'Ansible',
  argo: 'Argo CD',
  aws: 'AWS',
  azure: 'Azure',
  chaos_engineering: '混沌工程',
  cicd: 'CI/CD',
  circleci: 'CircleCI',
  cloud: '云平台基础',
  containers: '容器与 Docker',
  databases: '数据库',
  datadog: 'DataDog',
  devops: 'DevOps',
  dns: 'DNS',
  flask_container_ci: 'Flask CI 实战（一）',
  flask_container_ci2: 'Flask CI 实战（二）',
  gcp: 'Google Cloud',
  git: 'Git',
  grafana: 'Grafana',
  kafka: 'Kafka',
  kubernetes: 'Kubernetes',
  linux: 'Linux',
  misc: '杂项练习',
  node: 'Node.js',
  observability: '可观测性',
  openshift: 'OpenShift',
  os: '操作系统练习',
  perl: 'Perl',
  programming: '编程练习',
  python: 'Python 练习',
  security: '安全',
  shell: 'Shell 脚本',
  soft_skills: '软技能与 HR',
  software_development: '软件开发',
  sql: 'SQL 练习',
  sre: 'SRE',
  terraform: 'Terraform',
  zuul: 'Zuul',
}

const TOPIC_CATEGORIES = [
  {
    name: '基础与通用',
    dirs: ['devops', 'linux', 'os', 'dns', 'git', 'shell', 'security', 'soft_skills'],
  },
  {
    name: '容器与云原生',
    dirs: ['kubernetes', 'containers', 'openshift', 'argo', 'cicd', 'circleci', 'zuul', 'chaos_engineering', 'flask_container_ci', 'flask_container_ci2'],
  },
  {
    name: '云平台与基础设施',
    dirs: ['aws', 'azure', 'gcp', 'cloud', 'terraform', 'ansible'],
  },
  {
    name: '可观测性与数据',
    dirs: ['observability', 'grafana', 'datadog', 'kafka', 'databases', 'sql'],
  },
  {
    name: '开发与脚本',
    dirs: ['python', 'programming', 'node', 'perl', 'software_development'],
  },
  {
    name: 'SRE 与其他',
    dirs: ['sre', 'misc'],
  },
]

const GUIDE_LABELS = {
  'devops-applications': 'DevOps 应用领域',
  network: '网络',
  'operating-system': '操作系统',
  virtualization: '虚拟化',
  prometheus: 'Prometheus',
  go: 'Go',
  mongo: 'MongoDB',
  sql: 'SQL',
  openstack: 'OpenStack',
  puppet: 'Puppet',
  elastic: 'Elastic Stack',
  distributed: '分布式系统',
  misc: '杂项',
  cassandra: 'Cassandra',
  http: 'HTTP 与负载均衡',
  storage: '存储',
  'questions-you-can-ask': '你可以问面试官的问题',
  testing: '测试',
  regex: '正则表达式',
  'system-design': '系统设计',
  hardware: '硬件',
  'big-data': '大数据',
  ceph: 'Ceph',
  packer: 'Packer',
  release: '发布',
  certificates: '认证',
  'additional-devops-and-sre-projects': '更多 DevOps / SRE 项目',
  credits: '贡献者',
  license: '许可证',
}

const EXTERNAL_MAP = {
  'README_EN.md': 'https://github.com/shiranzby/SRE_Study/blob/codex/chinese-localization/README_EN.md',
  'README-pt-BR.md': 'https://github.com/shiranzby/SRE_Study/blob/codex/chinese-localization/README-pt-BR.md',
  'CONTRIBUTING-pt-BR.md': 'https://github.com/shiranzby/SRE_Study/blob/codex/chinese-localization/CONTRIBUTING-pt-BR.md',
  'credits-pt-BR.md': 'https://github.com/shiranzby/SRE_Study/blob/codex/chinese-localization/credits-pt-BR.md',
  'faq-pt-BR.md': 'https://github.com/shiranzby/SRE_Study/blob/codex/chinese-localization/faq-pt-BR.md',
  'prepare_for_interview-pt-BR.md': 'https://github.com/shiranzby/SRE_Study/blob/codex/chinese-localization/prepare_for_interview-pt-BR.md',
}

const SKIP_MD = [
  /-pt-BR\.md$/i,
  /(^|\/)README_EN\.md$/,
  /^tests\//,
  /^scripts\//,
]

const SKIP_ASSET = new Set([
  'CNAME',
  'LICENSE',
  '.gitignore',
  '.travis.yml',
])

/* ------------------------------------------------------------------ */
/* 工具函数                                                            */
/* ------------------------------------------------------------------ */

function walk(dir, base = dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === '.github' || entry.name === 'node_modules') continue
    const abs = path.join(dir, entry.name)
    const rel = posix.relative(SRC, abs)
    if (entry.isDirectory()) walk(abs, base, out)
    else out.push(rel)
  }
  return out
}

function stripBom(text) {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text
}

function cleanInline(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractTitle(text) {
  let fence = false
  for (const raw of text.split('\n').slice(0, 120)) {
    if (/^\s*(```|~~~)/.test(raw)) {
      fence = !fence
      continue
    }
    if (fence) continue
    const m = raw.match(/^#{1,2}\s+(.+?)\s*#*\s*$/)
    if (m) {
      const title = cleanInline(m[1])
      if (title) return title
    }
  }
  return null
}

function humanizeSlug(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/** 按反引号切分一行，标记哪些片段是行内代码 */
function splitInlineCode(line) {
  const parts = []
  let buf = ''
  let inCode = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '`') {
      parts.push({ text: buf, code: inCode })
      buf = ''
      inCode = !inCode
      buf += ch
    } else {
      buf += ch
    }
  }
  parts.push({ text: buf, code: inCode })
  return parts
}

/* ------------------------------------------------------------------ */
/* 读取源文件                                                          */
/* ------------------------------------------------------------------ */

const allFiles = walk(SRC)
const fileSet = new Set(allFiles)
const dirSet = new Set()
for (const rel of allFiles) {
  const parts = rel.split('/')
  for (let i = 1; i < parts.length; i++) dirSet.add(parts.slice(0, i).join('/'))
}

const mdFiles = allFiles.filter((rel) => rel.endsWith('.md') && !SKIP_MD.some((re) => re.test(rel)))
const assetFiles = allFiles.filter(
  (rel) => !rel.endsWith('.md') && !SKIP_ASSET.has(rel) && !rel.startsWith('tests/') && !rel.startsWith('scripts/'),
)

/* ------------------------------------------------------------------ */
/* 清理输出目录                                                        */
/* ------------------------------------------------------------------ */

for (const entry of fs.readdirSync(DOCS)) {
  if (entry === '.vitepress') continue
  fs.rmSync(path.join(DOCS, entry), { recursive: true, force: true })
}
fs.mkdirSync(PUBLIC, { recursive: true })
fs.mkdirSync(path.join(DOCS, 'guide'), { recursive: true })

/* ------------------------------------------------------------------ */
/* 复制静态资源                                                        */
/* ------------------------------------------------------------------ */

let assetCount = 0
for (const rel of assetFiles) {
  const dest = path.join(PUBLIC, rel)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(path.join(SRC, rel), dest)
  assetCount++
}

/* ------------------------------------------------------------------ */
/* 页面对象                                                            */
/* ------------------------------------------------------------------ */

/** @type {{relOut:string, route:string, routeKey:string, baseDir:string, content:string, title:string, source:string, topic?:string}[]} */
const pages = []

function routeOf(relOut) {
  const noExt = relOut.replace(/\.md$/i, '')
  if (noExt === 'index') return '/'
  if (noExt.endsWith('/index')) return `/${noExt.slice(0, -'index'.length)}`
  return `/${noExt}`
}

function addPage({ relOut, baseDir, content, title, source, topic }) {
  pages.push({
    relOut,
    route: routeOf(relOut),
    routeKey: routeOf(relOut).replace(/\/$/, '') || '/',
    baseDir,
    content: stripBom(content),
    title,
    source,
    topic,
  })
}

/* ------------------------------------------------------------------ */
/* 拆分根 README                                                       */
/* ------------------------------------------------------------------ */

const rootReadme = stripBom(fs.readFileSync(path.join(SRC, 'README.md'), 'utf8'))
const lines = rootReadme.split('\n')
const preamble = []
const sections = []
let current = null
let inFence = false

for (const line of lines) {
  if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
  if (!inFence && /^##\s+/.test(line)) {
    const heading = line.replace(/^##\s+/, '').trim()
    let anchor = null
    const tail = current ? current.body : preamble
    for (let i = tail.length - 1; i >= 0; i--) {
      if (!tail[i].trim()) continue
      const m = tail[i].match(/<a\s+name="([^"]+)"/)
      if (m) anchor = m[1]
      break
    }
    current = { heading, anchor, body: [] }
    sections.push(current)
    if (anchor) tail.pop() // 把锚点移出正文，稍后单独放回
  } else if (current) {
    current.body.push(line)
  } else {
    preamble.push(line)
  }
}

function demoteHeadings(body) {
  const out = []
  let fence = false
  for (const line of body) {
    if (/^\s*(```|~~~)/.test(line)) {
      fence = !fence
      out.push(line)
      continue
    }
    if (fence) {
      out.push(line)
      continue
    }
    const m = line.match(/^(#{3,6})\s+(.*)$/)
    if (m) out.push(`#${m[1]} ${m[2]}`)
    else out.push(line)
  }
  return out
}

const guidePages = []
const usedSlugs = new Set()
sections.forEach((section, index) => {
  let slug = (section.anchor || `section-${index + 1}`).toLowerCase()
  if (usedSlugs.has(slug)) slug = `${slug}-${index + 1}`
  usedSlugs.add(slug)

  const label = GUIDE_LABELS[slug] || section.heading
  const body = demoteHeadings(section.body).join('\n').replace(/^\n+/, '')
  const content = `${section.anchor ? `<a id="${section.anchor}"></a>\n` : ''}# ${label}\n\n${body}`

  addPage({
    relOut: `guide/${slug}.md`,
    baseDir: '',
    content,
    title: label,
    source: 'README.md',
  })
  guidePages.push({ text: label, link: `/guide/${slug}` })
})

// 总览页（README 的开头部分）
let preambleText = preamble.join('\n')
preambleText = preambleText.replace(/^:globe_with_meridians:.*$/m, '')
// README 里那张 <center><table> 图标墙在 markdown 里是断开的（行与行之间有空行），
// 交给 Vue 解析会出问题；首页本来就有更清楚的专题卡片，这里直接换成同一份卡片。
preambleText = preambleText.replace(
  /<!--\s*ALL-TOPICS-LIST:START\s*-->[\s\S]*?<!--\s*ALL-TOPICS-LIST:END\s*-->/i,
  '@@TOPIC_CARDS@@',
)
preambleText = preambleText.replace(/\n{3,}/g, '\n\n')
addPage({
  relOut: 'guide/index.md',
  baseDir: '',
  content: `# 题库总览\n\n> 共 2624 道题，按主题分为 ${sections.length} 个章节、${Object.keys(TOPIC_LABELS).length} 个专题。点击下面的图标或链接开始。\n\n${preambleText}`,
  title: '题库总览',
  source: 'README.md',
})

guidePages.unshift({ text: '题库总览', link: '/guide/' })

/* ------------------------------------------------------------------ */
/* 其余 Markdown                                                       */
/* ------------------------------------------------------------------ */

const topicMeta = {}

for (const rel of mdFiles) {
  if (rel === 'README.md') continue
  if (rel === 'LICENSE' || rel === 'CNAME') continue

  const raw = fs.readFileSync(path.join(SRC, rel), 'utf8')
  const content = stripBom(raw)
  const baseDir = posix.dirname(rel) === '.' ? '' : posix.dirname(rel)
  const title = extractTitle(content) || humanizeSlug(posix.basename(rel, '.md'))

  let relOut = rel
  if (/\/README\.md$/i.test(rel) || rel === 'README.md') {
    relOut = rel.replace(/README\.md$/i, 'index.md')
  }
  if (rel === 'LICENSE') relOut = 'license.md'

  const relParts = rel.split('/')
  const topic = rel.startsWith('topics/') && relParts.length >= 3 ? relParts[1] : null
  if (topic) {
    if (!topicMeta[topic]) topicMeta[topic] = { label: TOPIC_LABELS[topic] || topic, pages: 0, questions: 0 }
    topicMeta[topic].pages++
    topicMeta[topic].questions += (content.match(/<details>/g) || []).length
  }

  addPage({ relOut, baseDir, content, title, source: rel, topic })
}

/* ------------------------------------------------------------------ */
/* 统计与文案数字                                                      */
/* ------------------------------------------------------------------ */

const totalQuestions = pages.reduce((sum, p) => sum + (p.content.match(/<details>/g) || []).length, 0)

for (const page of pages) {
  if (page.relOut === 'guide/index.md') {
    page.content = page.content.replace(/2624/g, String(totalQuestions))
  }
}

/* ------------------------------------------------------------------ */
/* 链接重写                                                            */
/* ------------------------------------------------------------------ */

function encodePath(p) {
  return encodeURI(p)
}

function resolveTarget(rawTarget, baseDir) {
  let target = rawTarget.trim()
  if (!target) return null
  if (/^(https?:|mailto:|tel:|data:|javascript:|#|\/\/)/i.test(target)) return null

  const hashIndex = target.indexOf('#')
  let filePart = hashIndex >= 0 ? target.slice(0, hashIndex) : target
  const hash = hashIndex >= 0 ? target.slice(hashIndex) : ''
  if (!filePart) return null
  filePart = filePart.replace(/^<|>$/g, '')

  let p
  try {
    p = decodeURI(filePart)
  } catch {
    p = filePart
  }

  if (p.startsWith('/')) p = p.slice(1)
  else p = posix.normalize(posix.join(baseDir, p))
  if (p.startsWith('..')) return null
  p = p.replace(/^\.\//, '').replace(/\/+$/, '')
  if (!p) return '/' + hash

  if (EXTERNAL_MAP[p]) return EXTERNAL_MAP[p] + hash

  if (/\.md$/i.test(p)) {
    if (/\/README\.md$/i.test(p) || p === 'README.md') {
      const dir = p.replace(/\/?README\.md$/i, '')
      return (dir ? `/${dir}/` : '/') + hash
    }
    if (p === 'LICENSE' || p === 'LICENSE.md') return '/license' + hash
    return `/${p.slice(0, -3)}` + hash
  }

  if (dirSet.has(p)) return `/${p}/` + hash
  if (fileSet.has(p)) return `/${encodePath(p)}` + hash

  // 上游有些图片是按仓库根目录写的（例如 topics/git/README.md 里的 images/…），
  // 相对本文件找不到时，再按根目录试一次
  const fromRoot = posix.normalize(filePart.replace(/^\.?\//, ''))
  if (fromRoot !== p && (fileSet.has(fromRoot) || dirSet.has(fromRoot))) {
    return `/${encodePath(fromRoot)}` + hash
  }

  // 目标确实不存在（例如 upstream 缺少的 scenarios/），仍返回根路径，避免相对路径错位
  return `/${encodePath(p)}` + hash
}

const MD_LINK_RE = /(!?\[[^\]]*\]\()([^)]+)(\))/g
const HTML_ATTR_RE = /(href|src)=(["'])(.*?)\2/g

function rewriteLineLinks(line, baseDir) {
  return splitInlineCode(line)
    .map((part) => {
      if (part.code) return part.text
      let text = part.text

      text = text.replace(MD_LINK_RE, (match, open, target, close) => {
        const resolved = resolveTarget(target, baseDir)
        return resolved ? `${open}${resolved}${close}` : match
      })

      text = text.replace(HTML_ATTR_RE, (match, attr, quote, value) => {
        const resolved = resolveTarget(value, baseDir)
        return resolved ? `${attr}=${quote}${resolved}${quote}` : match
      })

      return text
    })
    .join('')
}

function rewriteLinks(content, baseDir) {
  const out = []
  let fence = false
  for (const line of content.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      fence = !fence
      out.push(line)
      continue
    }
    out.push(fence ? line : rewriteLineLinks(line, baseDir))
  }
  return out.join('\n')
}

for (const page of pages) {
  page.content = rewriteLinks(page.content, page.baseDir)
}

/* ------------------------------------------------------------------ */
/* 锚点映射与 #hash 链接                                               */
/* ------------------------------------------------------------------ */

const anchorMap = new Map() // lowercase name -> Set(route)
const pageAnchors = new Map() // route -> Set(lowercase name)

for (const page of pages) {
  const set = new Set()
  for (const m of page.content.matchAll(/<a\s+(?:name|id)="([^"]+)"/g)) {
    const key = m[1].toLowerCase()
    set.add(key)
    if (!anchorMap.has(key)) anchorMap.set(key, new Set())
    anchorMap.get(key).add(page.route)
  }
  pageAnchors.set(page.route, set)
  page.anchors = set
}

function remapHash(hash, page) {
  const raw = hash.replace(/^#/, '')
  if (!raw) return hash
  let name
  try {
    name = decodeURIComponent(raw)
  } catch {
    name = raw
  }
  const key = name.toLowerCase()
  if (page.anchors.has(key)) return hash
  const routes = anchorMap.get(key)
  if (!routes || routes.size !== 1) return hash
  const [route] = routes
  if (route === page.route) return hash
  // 目标路由已经自带尾斜杠时也能正确拼接
  return `${route}${hash}`
}

for (const page of pages) {
  page.content = page.content
    .replace(/(!?\[[^\]]*\]\()(#[^)]+)(\))/g, (match, open, hash, close) => {
      const next = remapHash(hash, page)
      return next === hash ? match : `${open}${next}${close}`
    })
    .replace(/(href=)(["'])(#[^"']+)\2/g, (match, attr, quote, hash) => {
      const next = remapHash(hash, page)
      return next === hash ? match : `${attr}${quote}${next}${quote}`
    })
}

/* ------------------------------------------------------------------ */
/* 问答块规整：把 <details> 改写成 Vue 模板能安全解析的形式             */
/* ------------------------------------------------------------------ */

/**
 * 原始写法长这样（`<summary>` 和答案之间只隔一个空行）：
 *
 *   <details>
 *   <summary>问题</summary><br><b>
 *
 *   答案（markdown）
 *   </b></details>
 *
 * markdown-it 会把 `<details>\n<summary>…</summary>` 当成一个 HTML 块（遇到空行结束），
 * 于是 `<details>` 要等到后面的 `</details>` 才闭合，`<b>`/`</b>` 又被空行切到不同的块里，
 * Vue 编译模板时就会报 “Element is missing end tag”。
 *
 * 这里改成：
 *
 *   <details>
 *   <summary>问题（已经渲染成行内 HTML）</summary>
 *
 *   答案（markdown，去掉包裹用的 <br><b>…</b>）
 *
 *   </details>
 */
function rewriteDetailsBlock(block) {
  const body = block
    .replace(/^\s*<details[^>]*>/i, '')
    .replace(/\s*<\/details>\s*$/i, '')
    .replace(/<br\s*\/?>\s*$/i, '')
  const si = body.search(/<summary[^>]*>/i)
  const se = body.search(/<\/summary>/i)
  if (si < 0 || se < 0) return null

  const open = body.match(/<summary[^>]*>/i)[0]
  let question = body.slice(si + open.length, se)
  let answer = body.slice(se + '</summary>'.length)

  // 问题：压成一行，去掉换行/换行标签/加粗标签（这些在 HTML 块里不会被 markdown 处理）
  question = question
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/?b>/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
  question = md.renderInline(question).replace(/\s+/g, ' ').trim()

  // 答案：去掉包裹答案的 <br><b> … </b>
  answer = answer
    .replace(/^\s*<br\s*\/?>\s*/i, '')
    .replace(/^\s*<b>\s*/i, '')
    .replace(/\s*<\/b>\s*$/i, '')
    .replace(/^\s*\n+/, '')
    .replace(/\s+$/, '')

  const out = ['<details>', `<summary>${question}</summary>`, '']
  if (answer) out.push(answer, '')
  out.push('</details>')
  return out
}

function normalizeQnA(content) {
  const lines = content.split('\n')
  const out = []
  let fence = false
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (/^\s*(```|~~~)/.test(line)) {
      fence = !fence
      out.push(line)
      i++
      continue
    }
    if (fence) {
      out.push(line)
      i++
      continue
    }
    if (/^\s*<summary[^>]*>/i.test(line)) {
      // 上游漏写 <details> 的孤立 <summary>，补上外层标签后按正常问答块处理
      let end = -1
      for (let k = i + 1; k < Math.min(lines.length, i + 60); k++) {
        if (/^\s*<\/b>\s*$/i.test(lines[k])) {
          end = k
          break
        }
        if (/^\s*<a\s/i.test(lines[k]) || /^#{1,6}\s/.test(lines[k])) break
      }
      if (end < 0) {
        for (let k = i + 1; k < lines.length; k++) {
          if (!lines[k].trim()) {
            end = k - 1
            break
          }
        }
      }
      const rewritten =
        end >= 0 ? rewriteDetailsBlock(`<details>\n${lines.slice(i, end + 1).join('\n')}\n</details>`) : null
      if (rewritten) {
        out.push(...rewritten)
        i = end + 1
        continue
      }
    }
    if (!/^\s*<details[ >]/i.test(line)) {
      out.push(line)
      i++
      continue
    }
    let depth = 0
    let j = i
    for (; j < lines.length; j++) {
      if (/<details[ >]/i.test(lines[j])) depth++
      if (/<\/details>/i.test(lines[j])) {
        depth--
        if (depth <= 0) break
      }
    }
    if (j >= lines.length) {
      out.push(line)
      i++
      continue
    }
    const rewritten = rewriteDetailsBlock(lines.slice(i, j + 1).join('\n'))
    if (rewritten) out.push(...rewritten)
    else out.push(...lines.slice(i, j + 1))
    i = j + 1
  }
  return out.join('\n')
}

/* ------------------------------------------------------------------ */
/* HTML 清洗：白名单 + 配对                                            */
/* ------------------------------------------------------------------ */

const VOID_TAGS = new Set([
  'br', 'hr', 'img', 'input', 'source', 'track', 'wbr', 'col', 'area', 'base', 'link', 'meta', 'embed', 'param',
])

/** 允许出现的标签，其余（<PID>、<HOSTNAME>、<job-name> 之类的占位符）一律转义 */
const ALLOWED_TAGS = new Set([
  'details', 'summary', 'b', 'strong', 'i', 'em', 'u', 's', 'del', 'ins', 'mark', 'small', 'sub', 'sup',
  'code', 'pre', 'kbd', 'samp', 'var', 'abbr', 'cite', 'q', 'time', 'span', 'div', 'p', 'a', 'img',
  'br', 'hr', 'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th',
  'center', 'blockquote', 'figure', 'figcaption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
])

/** 允许跨空行保持打开的标签（markdown-it 的 HTML 块也能跨空行闭合） */
const CROSS_CHUNK_TAGS = new Set(['details'])

/** 被空行截断时可以自动闭合、并在下一段重新打开的行内标签 */
const REOPEN_TAGS = new Set([
  'b', 'strong', 'i', 'em', 'u', 's', 'del', 'ins', 'mark', 'small', 'sub', 'sup',
  'code', 'kbd', 'samp', 'var', 'a', 'span', 'abbr', 'cite', 'q',
])

const TAG_RE = /<(\/?)([a-zA-Z][a-zA-Z0-9:_.-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g

/** 这些标签开头的段落会被 markdown-it 当作原始 HTML 块，块内不再解析 markdown */
const BLOCK_TAGS = new Set([
  'details', 'summary', 'p', 'div', 'span', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th',
  'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'pre', 'blockquote', 'center', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'figure', 'figcaption', 'hr', 'br', 'form', 'fieldset', 'iframe', 'section', 'article', 'aside',
  'header', 'footer', 'nav', 'main', 'address', 'script', 'style', 'textarea', 'video', 'audio', 'picture',
])

/** 行内代码区间（反引号包裹），这些内容不进 HTML 清洗 */
function inlineCodeRanges(line) {
  const ranges = []
  let start = -1
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== '`') continue
    if (start < 0) start = i
    else {
      ranges.push([start, i])
      start = -1
    }
  }
  if (start >= 0) ranges.push([start, line.length])
  return ranges
}

const sanitizeReport = new Map()

function sanitizeHtml(content) {
  const lines = content.split('\n')
  const n = lines.length

  const fenced = new Array(n).fill(false)
  let fence = false
  for (let i = 0; i < n; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) {
      fenced[i] = true
      fence = !fence
      continue
    }
    fenced[i] = fence
  }

  // 代码块以外、按空行切块：markdown-it 的段落 / HTML 块都不会跨越空行
  const chunks = []
  for (let i = 0; i < n; ) {
    if (fenced[i] || !lines[i].trim()) {
      i++
      continue
    }
    const start = i
    while (i < n && !fenced[i] && lines[i].trim()) i++
    chunks.push({ start, end: i })
  }

  const slots = new Map() // marker -> { raw, escape }
  let seq = 0
  const makeMarker = (raw) => {
    const marker = `\u0000${seq++}\u0000`
    slots.set(marker, { raw, escape: false })
    return marker
  }
  const escapeTag = (raw) => raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const tagName = (raw) => (raw.match(/^<\/?\s*([a-zA-Z][a-zA-Z0-9:-]*)/) || [, ''])[1].toLowerCase()
  const shouldEscape = (tag) => {
    sanitizeReport.set(tag, (sanitizeReport.get(tag) || 0) + 1)
  }

  const stack = []
  let reopenQueue = []

  for (const chunk of chunks) {
    // 以块级标签开头的段落是原始 HTML 块，块内的反引号不会变成行内代码
    const headTag = (lines[chunk.start].trim().match(/^<\/?([a-zA-Z][a-zA-Z0-9:-]*)/) || [])[1]
    const isRawHtmlChunk = Boolean(headTag) && BLOCK_TAGS.has(headTag.toLowerCase())

    // 上一段遗留下来、需要继续生效的行内标签
    if (reopenQueue.length) {
      let prefix = ''
      for (const raw of reopenQueue) {
        const marker = makeMarker(raw)
        stack.push({ tag: tagName(raw), chunk: chunk.start, marker, raw })
        prefix += marker
      }
      lines[chunk.start] = prefix + lines[chunk.start]
      reopenQueue = []
    }

    for (let li = chunk.start; li < chunk.end; li++) {
      const line = lines[li]
      const codeRanges = isRawHtmlChunk ? [] : inlineCodeRanges(line)
      const inCode = (pos) => codeRanges.some(([a, b]) => pos > a && pos < b)
      let result = ''
      let last = 0
      TAG_RE.lastIndex = 0
      let m
      while ((m = TAG_RE.exec(line))) {
        const at = m.index
        if (inCode(at)) continue
        if (at > 0 && line[at - 1] === '\\') continue // markdown 转义，交给 markdown-it 处理
        const [full, slash, name, , selfClose] = m
        const tag = name.toLowerCase()
        result += line.slice(last, at)
        last = at + full.length

        if (!ALLOWED_TAGS.has(tag)) {
          shouldEscape(tag)
          result += escapeTag(full)
          continue
        }

        const marker = makeMarker(full)
        if (slash) {
          const idx = stack.map((s) => s.tag).lastIndexOf(tag)
          if (idx >= 0) {
            // 中间那些没闭合的标签（比如 <b> 跨了段）只能转义
            for (let k = stack.length - 1; k > idx; k--) {
              slots.get(stack[k].marker).escape = true
              shouldEscape(stack[k].tag)
              stack.pop()
            }
            stack.pop()
            result += marker
          } else {
            slots.get(marker).escape = true
            shouldEscape(tag)
            result += marker
          }
        } else if (selfClose || VOID_TAGS.has(tag)) {
          result += marker
        } else {
          stack.push({ tag, chunk: chunk.start, marker, raw: full })
          result += marker
        }
      }
      result += line.slice(last)
      lines[li] = result
    }

    // 段落结束：处理仍然打开的标签
    const stillOpen = []
    while (stack.length && stack[stack.length - 1].chunk === chunk.start) stillOpen.push(stack.pop())
    for (const item of stillOpen) {
      const slot = slots.get(item.marker)
      if (CROSS_CHUNK_TAGS.has(item.tag)) {
        stack.push(item)
      } else if (REOPEN_TAGS.has(item.tag) && !slot.escape) {
        // 自动闭合，并在下一段重新打开，保留原来的加粗/代码等效果
        lines[chunk.end - 1] += `</${item.tag}>`
        reopenQueue.unshift(slot.raw)
      } else {
        slot.escape = true
        shouldEscape(item.tag)
      }
    }
  }

  // 文档结束时还没闭合的标签只能转义
  for (const item of stack) {
    slots.get(item.marker).escape = true
    shouldEscape(item.tag)
  }

  return lines
    .join('\n')
    .replace(/\u0000(\d+)\u0000/g, (_, id) => {
      const slot = slots.get(`\u0000${id}\u0000`)
      return slot.escape ? escapeTag(slot.raw) : slot.raw
    })
}

/* ------------------------------------------------------------------ */
/* Vue 插值转义 & 锚点 id 化                                           */
/* ------------------------------------------------------------------ */

/**
 * 块级 HTML 标签前面补一个空行。
 * 否则 markdown-it 会把 `<ul>`、`<table>` 这类标签当成上一段里的行内 HTML，
 * Vue 编译时就会报 “<ul> cannot be child of <p>”。
 */
function spaceOutBlockTags(content) {
  const BLOCK_START = /^\s*<(ul|ol|table|thead|tbody|tfoot|tr|div|blockquote|pre|center|figure|dl|h[1-6])(\s|>|\/)/i
  const out = []
  let fence = false
  for (const raw of content.split('\n')) {
    let line = raw
    if (/^\s*(```|~~~)/.test(line)) {
      fence = !fence
      out.push(line)
      continue
    }
    if (!fence && BLOCK_START.test(line) && out.length && out[out.length - 1].trim()) {
      const prev = out[out.length - 1]
      out.push('')
      // 缩进 4 格以上会被 markdown 当成代码块，这里顶格写（HTML 忽略这点缩进）
      if (/^[ \t]{4,}/.test(line) && !/^\s*([*+-]|\d+[.)])\s/.test(prev)) line = line.trimStart()
    }
    out.push(line)
  }
  return out.join('\n')
}

/** `<table><tr>` 中间补上 `<tbody>`，跟浏览器的解析结果保持一致（避免 hydration 不一致） */
function addTableBody(content) {
  return content.replace(/<table(\s[^>]*)?>([\s\S]*?)<\/table>/gi, (match, attrs, inner) => {
    if (/<tbody[\s>]/i.test(inner) || !/<tr[\s>]/i.test(inner)) return match
    return `<table${attrs || ''}><tbody>${inner}</tbody></table>`
  })
}

function escapeInterpolation(content) {
  const out = []
  let fence = false
  for (const line of content.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      fence = !fence
      out.push(line)
      continue
    }
    if (fence) {
      out.push(line)
      continue
    }
    out.push(
      splitInlineCode(line)
        .map((part) => (part.code ? part.text : part.text.replace(/\{\{/g, '&#123;&#123;')))
        .join(''),
    )
  }
  return out.join('\n')
}

for (const page of pages) {
  // 原文里用反斜杠转义的示例 HTML（CONTRIBUTING.md）改成代码块，避免 Vue 解析出错
  page.content = page.content.replace(
    '\\<details>\n<summary>[问题]</summary><br><b>\n\n[解答]\n\\</b></details>',
    '```html\n<details>\n<summary>[问题]</summary><br><b>\n\n[解答]\n</b></details>\n```',
  )
  page.content = page.content.replace(/<\/br>/gi, '<br>')
  page.content = spaceOutBlockTags(page.content)
  // 规整 <details> 问答块，再统一清洗 HTML（白名单 + 配对）
  page.content = normalizeQnA(page.content)
  page.content = sanitizeHtml(page.content)
  page.content = addTableBody(page.content)
  page.content = escapeInterpolation(page.content)
  page.content = page.content.replace(/<a\s+name="([^"]+)"><\/a>/g, '<a id="$1"></a>')
  page.content = page.content.replace(/<a\s+name="([^"]+)"\s*\/>/g, '<a id="$1"></a>')
}

/* ------------------------------------------------------------------ */
/* 写入页面                                                            */
/* ------------------------------------------------------------------ */

function frontmatter(title) {
  return `---\ntitle: ${JSON.stringify(title)}\n---\n\n`
}

for (const page of pages) {
  const dest = path.join(DOCS, page.relOut)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, frontmatter(page.title) + page.content, 'utf8')
}

/* ------------------------------------------------------------------ */
/* 篇章 / 专题结构                                                     */
/* ------------------------------------------------------------------ */

const topicOrder = TOPIC_CATEGORIES.flatMap((c) => c.dirs)
const topicDirs = [...new Set(Object.keys(topicMeta))]

function topicRoute(dir) {
  const hasIndex = fs.existsSync(path.join(DOCS, 'topics', dir, 'index.md'))
  if (hasIndex) return `/topics/${dir}/`
  // 没有 index 的专题：链接到第一个子页面
  const files = pages.filter((p) => p.topic === dir).sort((a, b) => a.relOut.localeCompare(b.relOut))
  return files.length ? files[0].route : `/topics/${dir}/`
}

const topicCards = []
for (const cat of TOPIC_CATEGORIES) {
  const items = []
  for (const dir of cat.dirs) {
    if (!topicMeta[dir]) continue
    items.push({
      dir,
      label: TOPIC_LABELS[dir] || dir,
      route: topicRoute(dir),
      questions: topicMeta[dir].questions,
    })
  }
  if (items.length) topicCards.push({ name: cat.name, items })
}

/* ------------------------------------------------------------------ */
/* 侧边栏                                                              */
/* ------------------------------------------------------------------ */

const certPages = pages
  .filter((p) => p.relOut.startsWith('certificates/'))
  .sort((a, b) => a.relOut.localeCompare(b.relOut))
  .map((p) => ({ text: p.title, link: p.route }))

const scenarioPages = pages
  .filter((p) => /^topics\/[^/]+\.md$/.test(p.relOut))
  .sort((a, b) => a.relOut.localeCompare(b.relOut))
  .map((p) => ({ text: p.title, link: p.route }))

const extraExercisePages = [
  { text: 'Docker 故障排查场景', link: '/exercises/docker/docker-debugging' },
  { text: 'Shell 目录比较练习', link: '/exercises/shell/solutions/directories_comparison' },
]

const sidebar = [
  {
    text: '开始',
    items: [
      { text: '题库总览', link: '/guide/' },
      { text: '阅读说明', link: '/about' },
    ],
  },
  {
    text: '题库章节',
    collapsed: false,
    items: guidePages.slice(1),
  },
  {
    text: '专题练习',
    collapsed: true,
    items: topicOrder
      .filter((dir) => topicMeta[dir])
      .map((dir) => ({ text: TOPIC_LABELS[dir] || dir, link: topicRoute(dir) })),
  },
  {
    text: '动手场景',
    collapsed: true,
    items: scenarioPages,
  },
  {
    text: '额外练习',
    collapsed: true,
    items: extraExercisePages,
  },
  {
    text: '面试与认证',
    collapsed: true,
    items: [
      { text: '如何准备面试', link: '/prepare_for_interview' },
      { text: '常见问题 FAQ', link: '/faq' },
      {
        text: '认证备考',
        collapsed: true,
        items: certPages,
      },
      { text: '贡献指南', link: '/CONTRIBUTING' },
      { text: '贡献者', link: '/credits' },
    ],
  },
]

fs.writeFileSync(path.join(VP_DIR, 'sidebar.json'), JSON.stringify(sidebar, null, 2) + '\n', 'utf8')

/* ------------------------------------------------------------------ */
/* 首页                                                                */
/* ------------------------------------------------------------------ */

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

let cardsHtml = ''
for (const group of topicCards) {
  cardsHtml += `<h3 class="topic-group-title">${escapeHtml(group.name)}</h3>\n<div class="topic-grid">\n`
  for (const item of group.items) {
    cardsHtml += `  <a class="topic-card" href="${item.route}">\n    <span class="topic-card__name">${escapeHtml(item.label)}</span>\n    <span class="topic-card__meta">${item.questions ? `${item.questions} 道题` : '练习与答案'}</span>\n  </a>\n`
  }
  cardsHtml += `</div>\n\n`
}

// 总览页用和首页一样的专题卡片（占位符在这里才拿得到卡片 HTML，所以补写一次）
const guideIndexPage = pages.find((p) => p.relOut === 'guide/index.md')
if (guideIndexPage && guideIndexPage.content.includes('@@TOPIC_CARDS@@')) {
  guideIndexPage.content = guideIndexPage.content.replace(
    '@@TOPIC_CARDS@@',
    `<div class="topic-sections">\n${cardsHtml}</div>`,
  )
  fs.writeFileSync(
    path.join(DOCS, 'guide/index.md'),
    frontmatter(guideIndexPage.title) + guideIndexPage.content,
    'utf8',
  )
}

const guideLinks = guidePages
  .slice(1)
  .map((item) => `<a href="${item.link}">${escapeHtml(item.text)}</a>`)
  .join(' · ')

const homeContent = `---
layout: home

hero:
  name: DevOps 练习题库
  text: 中文版 · ${totalQuestions} 道问答
  tagline: Linux、Kubernetes、AWS、Docker、Terraform、SRE…… 可折叠问答 + 全文搜索，按专题循序渐进
  actions:
    - theme: brand
      text: 开始刷题
      link: /guide/
    - theme: alt
      text: 按专题浏览
      link: /topics/devops/
    - theme: alt
      text: 阅读说明
      link: /about

features:
  - title: 完整中文翻译
    details: 基于社区中文译本，覆盖 ${totalQuestions} 道问答、${topicDirs.length} 个专题，包含练习与参考答案。
  - title: 适合阅读的结构
    details: 问答默认折叠，可一键展开；每页带大纲导航，长文不再难啃。
  - title: 全文搜索
    details: 内置离线中文搜索（Pagefind），无需联网，输入关键词即可定位题目。
---

## 按专题刷题

<div class="topic-sections">
${cardsHtml}</div>

## 按章节阅读

<div class="guide-links">
${guideLinks}
</div>

## 说明

- 内容来自 [bregman-arie/devops-exercises](https://github.com/bregman-arie/devops-exercises)，中文翻译来自 [shiranzby/SRE_Study](https://github.com/shiranzby/SRE_Study)。
- 翻译由 AI 辅助完成，部分术语可能不准确，遇到疑问请对照[英文原版](https://github.com/bregman-arie/devops-exercises)。
- 本站仅用于学习交流，遵循上游 **CC BY-NC-ND 3.0** 许可，详见[阅读说明](/about)。
`

fs.writeFileSync(path.join(DOCS, 'index.md'), homeContent, 'utf8')

/* ------------------------------------------------------------------ */
/* 阅读说明 / 关于                                                     */
/* ------------------------------------------------------------------ */

const aboutTemplate = fs.readFileSync(path.join(ROOT, 'templates', 'about.md'), 'utf8')
fs.writeFileSync(path.join(DOCS, 'about.md'), aboutTemplate.replaceAll('{{TOTAL_QUESTIONS}}', String(totalQuestions)), 'utf8')

/* ------------------------------------------------------------------ */
/* 报告                                                                */
/* ------------------------------------------------------------------ */

console.log(`✓ 生成完成`)
console.log(`  Markdown 页面: ${pages.length}`)
console.log(`  静态资源:     ${assetCount}`)
console.log(`  问答题:       ${totalQuestions}`)
console.log(`  题库章节:     ${guidePages.length - 1}`)
console.log(`  专题:         ${topicDirs.length}`)
if (sanitizeReport.size) {
  const items = [...sanitizeReport.entries()].sort((a, b) => b[1] - a[1])
  console.log(`  转义/修正的标签: ${items.map(([t, c]) => `${t}×${c}`).join(', ')}`)
}
