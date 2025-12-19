import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useEffect, useMemo } from "react"
import type { RefObject } from "react"
import { useActiveOnTop } from "./utils/functions"

function App() {
  const sectionIds = [
    'home',
    'introduction',
    'about',
    'education',
    'certifications',
    'stack',
    'projects'
  ]

  // Refs collection kept stable across renders
  const refs = useMemo(() => sectionIds.map(() => ({ current: null } as RefObject<HTMLElement>)), [])

  useEffect(() => {
    // Populate refs from DOM once the components mount
    sectionIds.forEach((id, i) => {
      refs[i].current = document.getElementById(id) as HTMLElement | null
    })
  }, [refs])

  const activeId = useActiveOnTop(refs, { threshold: 120 })
  const activeHref = activeId && activeId !== 'introduction' ? `#${activeId}` : null

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen bg-paper-dark overflow-x-hidden">
      <Header activeHref={activeHref} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
