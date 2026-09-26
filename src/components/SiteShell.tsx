import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './SiteShell.css'

interface SiteShellProps {
  children: ReactNode
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

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell" id="home">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="site-shell__main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
