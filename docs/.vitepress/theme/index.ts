import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { nextTick, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import './custom.css'

function scrollToLegacyAnchor() {
  const raw = decodeURIComponent(window.location.hash.slice(1))
  if (!raw) return
  const el =
    document.getElementById(raw) ||
    document.getElementsByName(raw)[0] ||
    document.querySelector(`[name="${CSS.escape(raw)}"]`)
  if (el) el.scrollIntoView({ block: 'start' })
}

function addQaToolbar() {
  const doc = document.querySelector<HTMLElement>('.vp-doc')
  if (!doc) return

  doc.querySelector('.qa-toolbar')?.remove()
  const details = Array.from(doc.querySelectorAll<HTMLDetailsElement>('details'))
  if (details.length === 0) return

  const bar = document.createElement('div')
  bar.className = 'qa-toolbar'
  bar.innerHTML = `
    <span class="qa-toolbar__count">共 ${details.length} 个问答</span>
    <button type="button" data-qa="expand">全部展开</button>
    <button type="button" data-qa="collapse">全部收起</button>
  `
  bar.addEventListener('click', (event) => {
    const btn = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-qa]')
    if (!btn) return
    const open = btn.dataset.qa === 'expand'
    for (const item of details) item.open = open
  })

  const h1 = doc.querySelector('h1')
  if (h1) h1.insertAdjacentElement('afterend', bar)
  else doc.prepend(bar)
}

export default {
  extends: DefaultTheme,
  setup() {
    if (typeof window === 'undefined') return

    const router = useRouter()

    const enhance = () => {
      nextTick(() => {
        addQaToolbar()
        // 等页面渲染完成后再滚到锚点
        window.setTimeout(scrollToLegacyAnchor, 60)
      })
    }

    router.onAfterRouteChanged = enhance
    onMounted(() => {
      enhance()
      window.addEventListener('hashchange', () => window.setTimeout(scrollToLegacyAnchor, 30))
    })
  },
} satisfies Theme
