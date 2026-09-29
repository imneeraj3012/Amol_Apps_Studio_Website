import { useCallback, useEffect, useState } from 'react'
import { SiteShell } from './components/SiteShell'
import { Home } from './pages/Home'
import { ServicesPage } from './pages/ServicesPage'
import {
  anchorExists,
  parseHash,
  type RouteState,
} from './utils/route'
import './App.css'

/* M3 — homepage on top of the M2 shell. SiteShell still owns Header /
 * <main> / Footer; Home renders the section order from Website_sample.png.
 * M4 — minimal hash router: "#/" renders Home, "#/services" renders the
 * Services page. Legacy plain anchors ("#contact") keep working by
 * resolving to home + that section. */

function scrollToAnchor(anchor: string) {
  const target = document.getElementById(anchor)
  if (target) target.scrollIntoView({ block: 'start' })
}

function App() {
  const [routeState, setRouteState] = useState<RouteState>(() =>
    typeof window === 'undefined'
      ? { route: 'home', anchor: null }
      : parseHash(window.location.hash),
  )

  const syncFromHash = useCallback(() => {
    const next = parseHash(window.location.hash)
    // In-page anchors already in the DOM use native browser scrolling.
    if (!window.location.hash.startsWith('#/') && anchorExists(next.anchor)) {
      return
    }
    setRouteState(next)
  }, [])

  useEffect(() => {
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [syncFromHash])

  const { route, anchor } = routeState

  // Scroll after the routed page has rendered.
  useEffect(() => {
    if (anchor) {
      const frame = requestAnimationFrame(() => scrollToAnchor(anchor))
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0 })
  }, [route, anchor])

  useEffect(() => {
    document.title =
      route === 'services'
        ? 'Services — Amol Apps Studio'
        : 'Amol Apps Studio — Turning Business Ideas Into Real Apps'
  }, [route])

  return (
    <SiteShell active={route === 'services' ? 'Services' : 'Home'}>
      {route === 'services' ? <ServicesPage /> : <Home />}
    </SiteShell>
  )
}

export default App
