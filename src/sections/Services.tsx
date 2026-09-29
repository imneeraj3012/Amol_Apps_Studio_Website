import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { services, servicesIntro } from '../data/services'
import './Services.css'

/* M3 — services grid from Website_sample.png: six pastel cards with icon,
 * title, short description and arrow action. */

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title="Software Solutions for Your Needs"
      description={servicesIntro}
    >
      <div className="services__head-action">
        <Button href="#contact" variant="outline" size="sm">
          View All Services
          <span aria-hidden="true">→</span>
        </Button>
      </div>
      <ul className="services__grid">
        {services.map((service) => (
          <li
            key={service.title}
            className={`service-card tone-${service.tone}`}
          >
            <span
              className={`service-card__icon tone-${service.tone}`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" focusable="false">
                <path d={service.icon} fill="currentColor" />
              </svg>
            </span>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__desc">{service.description}</p>
            <a
              className="service-card__go"
              href="#contact"
              aria-label={`${service.title} — enquire about this service`}
            >
              <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
