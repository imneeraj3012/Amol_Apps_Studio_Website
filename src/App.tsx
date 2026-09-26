import { Button } from './components/Button'
import { Card } from './components/Card'
import { SiteShell } from './components/SiteShell'
import { siteMeta, startProjectCta } from './data/site'
import './App.css'

/* M2 — shell preview placeholder. NOT a page: no Home/Services/Portfolio/
 * About/Contact content. Real pages arrive from M3 onwards and render inside
 * SiteShell's <main> without structural changes. */

function App() {
  return (
    <SiteShell>
      <div className="container shell-preview">
        <Card className="shell-preview__card">
          <p className="eyebrow">M2 — Design System + Website Shell</p>
          <h1 className="shell-preview__title">{siteMeta.name}</h1>
          <p>{siteMeta.tagline}</p>
          <p className="shell-preview__note">
            The reusable shell (header, navigation, footer), design tokens,
            and UI primitives are in place. Page content arrives with M3.
          </p>
          <div className="shell-preview__actions">
            <Button href={startProjectCta.href}>
              {startProjectCta.label}
            </Button>
            <Button href="#services" variant="outline">
              View All Services
            </Button>
          </div>
        </Card>
      </div>
    </SiteShell>
  )
}

export default App
