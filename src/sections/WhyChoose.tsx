import { Section } from '../components/Section'
import { whyChooseIntro, whyChooseReasons } from '../data/home'
import './WhyChoose.css'

/* M3 — "Why Choose" four-card row from Website_sample.png. No invented
 * stats, clients, awards, or percentages. */

const reasonIcons: Record<string, string> = {
  'Business-Focused':
    'M5 3h14v4H5V3Zm-2 6h18v3H3V9Zm2 5h6v7H5v-7Zm8 0h6v7h-6v-7Z',
  'AI-Assisted Development':
    'M12 2a7 7 0 0 0-4 12.7V15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v-.3A7 7 0 0 0 12 2ZM9 21h6v-2H9v2ZM7 8h4v4H7V8Zm6 0h4v4h-4V8Z',
  'Quality & Reliability':
    'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1.5 14.5-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7Z',
  'End-to-End Delivery':
    'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H2v-1Zm14 1v-1a6 6 0 0 0-4-5.6A3.5 3.5 0 0 1 16 12a3.5 3.5 0 0 1 2.2 6.2c2 .8 3.8 2.6 3.8 4.8v1h-6Z',
}

export function WhyChoose() {
  return (
    <Section
      id="about"
      title="Why Choose Amol Apps Studio"
      description={whyChooseIntro}
      band
    >
      <ul className="why__grid">
        {whyChooseReasons.map((reason) => (
          <li key={reason.title} className="why__card">
            <span
              className={`why__icon tone-${reason.tone}`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d={reasonIcons[reason.title] ?? reasonIcons['Business-Focused']}
                  fill="currentColor"
                />
              </svg>
            </span>
            <h3 className="why__title">{reason.title}</h3>
            <p className="why__desc">{reason.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
