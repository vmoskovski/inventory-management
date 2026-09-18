import { ref } from 'vue'

const STORAGE_KEY = 'sidebar-collapsed'
const isCollapsed = ref(false)

export function useSidebar() {
  const init = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) {
      isCollapsed.value = stored === 'true'
    } else {
      isCollapsed.value = window.innerWidth < 1024
    }
  }

  const toggle = () => {
    isCollapsed.value = !isCollapsed.value
    localStorage.setItem(STORAGE_KEY, String(isCollapsed.value))
  }

  const handleResize = () => {
    if (window.innerWidth < 1024 && !isCollapsed.value) {
      isCollapsed.value = true
      localStorage.setItem(STORAGE_KEY, 'true')
    }
  }

  return { isCollapsed, init, toggle, handleResize }
}
