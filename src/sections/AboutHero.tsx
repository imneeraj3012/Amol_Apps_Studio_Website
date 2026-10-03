import { Button } from '../components/Button'
import { services } from '../data/services'
import { startProjectCta } from '../data/site'
import './AboutHero.css'

/* About hero: studio introduction plus a "what we do" service index
 * linking to the Services page. Only established facts — no invented
 * history, team, clients, or statistics. */

export function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="container about-hero__inner">
        <div className="about-hero__copy">
          <p className="eyebrow">About</p>
          <h1 className="about-hero__title" id="about-hero-title">
            Turning Business Ideas
            <span className="about-hero__title-line">Into Real Apps</span>
          </h1>
          <p className="about-hero__intro">
            Amol Apps Studio builds practical software for businesses,
            entrepreneurs, and individuals — custom applications, web and
            mobile apps, Windows software, AI-powered features, and business
            automation, designed around the way you actually work.
          </p>
          <p className="about-hero__intro">
            Every project starts with your problem, not with a technology.
            We focus on working products: clear scope, thoughtful design,
            modern tools, thorough testing, and support after delivery.
          </p>
          <div className="about-hero__ctas">
            <Button href={startProjectCta.href}>
              {startProjectCta.label}
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="#/services" variant="outline">
              Explore Services
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        <div
          className="about-hero__panel"
          aria-label="What Amol Apps Studio builds"
        >
          <h2 className="about-hero__panel-title">What We Do</h2>
          <ul className="about-hero__list">
            {services.map((service) => (
              <li key={service.title}>
                <a href={`#/services#${service.slug}`}>
                  <span
                    className={`about-hero__icon tone-${service.tone}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d={service.icon} fill="currentColor" />
                    </svg>
                  </span>
                  <span className="about-hero__item-text">
                    <strong>{service.title}</strong>
                    <span>{service.description}</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
