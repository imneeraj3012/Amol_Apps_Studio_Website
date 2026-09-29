import { Section } from '../components/Section'
import { services } from '../data/services'
import { servicesOverviewIntro } from '../data/servicesPage'
import './ServicesOverview.css'

/* M4 — "Our Services at a Glance": the same six pastel cards as the
 * homepage (same data, icons, tones), with arrows linking to the matching
 * detail block further down this page. */

export function ServicesOverview() {
  return (
    <Section
      id="services-glance"
      eyebrow="What We Do"
      title="Our Services at a Glance"
      description={servicesOverviewIntro}
    >
      <ul className="glance__grid">
        {services.map((service) => (
          <li
            key={service.title}
            className={`glance-card tone-${service.tone}`}
          >
            <span
              className={`glance-card__icon tone-${service.tone}`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" focusable="false">
                <path d={service.icon} fill="currentColor" />
              </svg>
            </span>
            <h3 className="glance-card__title">{service.title}</h3>
            <p className="glance-card__desc">{service.description}</p>
            <a
              className="glance-card__go"
              href={`#${service.slug}`}
              aria-label={`${service.title} — see details below`}
            >
              <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
