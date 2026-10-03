import type { ReactNode } from 'react'
import { AppCreationBanner } from './AppCreationBanner'
import { Footer } from './Footer'
import { Header } from './Header'
import './SiteShell.css'

interface SiteShellProps {
  children: ReactNode
  /** Active nav label (M4: reflects the current page). */
  active?: string
}

/* M2 — reusable application shell. Future pages render inside <main> without
 * structural rewrites:
 *
 *   App
 *    └── SiteShell
 *         ├── Header
 *         ├── <main> (page content)
 *         └── Footer
 *
 * Page content itself arrives from M3 onwards. */

export function SiteShell({ children, active = 'Home' }: SiteShellProps) {
  return (
    <div className="site-shell" id="home">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AppCreationBanner />
      <Header active={active} />
      <main id="main-content" className="site-shell__main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
