import { primaryNav, siteMeta } from '../data/site'
import { Logo } from './Logo'
import './Footer.css'

/* M2 — footer visual structure from the approved mockup: brand lockup left,
 * navigation center, contact + copyright right/below. Only established facts:
 * name, tagline, nav, business email, copyright. Nothing invented. */

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Logo compact />
          <p className="site-footer__tagline">{siteMeta.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.label}>
                <a className="site-footer__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__meta">
          <a
            className="site-footer__email"
            href={`mailto:${siteMeta.email}`}
          >
            {siteMeta.email}
          </a>
          <p className="site-footer__copy">
            © {year} {siteMeta.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
