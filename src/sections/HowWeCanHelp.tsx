import { Section } from '../components/Section'
import { helpCards, helpCardsIntro } from '../data/servicesPage'
import './HowWeCanHelp.css'

/* M4 — "How We Can Help": four compact cards connecting services to
 * customer needs. Deliberately denser than the service grids. */

const helpIcons: Record<string, string> = {
  'Turn Your Idea Into an App':
    'M9 21h6v-2H9v2Zm10-4a7 7 0 0 0-3-1.3V14a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1.7A7 7 0 0 0 5 17l2 2v1h10v-1l2-2ZM12 2a7 7 0 0 0-4 12.7V15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v-.3A7 7 0 0 0 12 2Z',
  'Digitize Manual Processes':
    'M12 8a4 4 0 1 0 4 4M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1M18 12a6 6 0 1 1-6-6',
  'Build Business Solutions':
    'M4 20V10h3v10H4Zm6.5 0V4h3v16h-3ZM17 20v-7h3v7h-3Z',
  'Ongoing Support':
    'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H2v-1Zm14 1v-1a6 6 0 0 0-4-5.6A3.5 3.5 0 0 1 16 12a3.5 3.5 0 0 1 2.2 6.2c2 .8 3.8 2.6 3.8 4.8v1h-6Z',
}

export function HowWeCanHelp() {
  return (
    <Section
      id="how-we-can-help"
      eyebrow="Your Ideas, Our Solutions"
      title="How We Can Help"
      description={helpCardsIntro}
    >
      <ul className="help__grid">
        {helpCards.map((card) => (
          <li key={card.title} className={`help-card tone-${card.tone}`}>
            <span
              className={`help-card__icon tone-${card.tone}`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d={helpIcons[card.title] ?? helpIcons['Turn Your Idea Into an App']}
                  fill="currentColor"
                />
              </svg>
            </span>
            <div className="help-card__text">
              <h3 className="help-card__title">{card.title}</h3>
              <p className="help-card__desc">{card.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
