import { Section } from '../components/Section'
import { processIntro, processSteps } from '../data/process'
import './Process.css'

/* M3 — six-step process flow from Website_sample.png: numbered steps with
 * circular pastel icons and connecting arrows on desktop. */

const stepIcons: Record<string, string> = {
  Understand:
    'M9 21h6v-2H9v2Zm10-4a7 7 0 0 0-3-1.3V14a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1.7A7 7 0 0 0 5 17l2 2v1h10v-1l2-2ZM12 2a7 7 0 0 0-4 12.7V15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v-.3A7 7 0 0 0 12 2Z',
  Plan: 'M6 2h9l5 5v15H6V2Zm8 1v5h5M8 13h8v2H8v-2Zm0 4h8v2H8v-2Z',
  Design: 'M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1Zm11.5-12.5 3 3M14 6l3 3',
  Build: 'M8 3 2 7l6 4V3Zm8 0v8l6-4-6-4ZM2 13l6 4v-8l-6 4Zm16 0-6-4v8l6-4Z',
  Test: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z',
  Deliver:
    'M2 21l21-9L2 3v7l15 2-15 2v7Zm4-14v4h4V7H6Zm0 10v-4h4v4H6Z',
}

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Our Process"
      title="From Idea to Working Product"
      description={processIntro}
    >
      <ol className="process__flow">
        {processSteps.map((step) => (
          <li key={step.index} className="process__step">
            <span
              className={`process__icon tone-${step.tone}`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d={stepIcons[step.title] ?? stepIcons.Understand}
                  fill="currentColor"
                />
              </svg>
            </span>
            <p className="process__index">{step.index}</p>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__desc">{step.description}</p>
            <span className="process__arrow" aria-hidden="true">
              →
            </span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
