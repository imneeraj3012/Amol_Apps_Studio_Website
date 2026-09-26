import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  /** Anchor id (e.g. "services") so placeholder nav targets resolve. */
  id?: string
  /** Small uppercase label, e.g. "OUR SERVICES". */
  eyebrow?: string
  /** Section title. */
  title?: string
  /** Supporting copy shown beside/below the title. */
  description?: string
  /** Light-blue band background, as in the mockup's alternating sections. */
  band?: boolean
  children: ReactNode
}

/* M2 — section wrapper matching the mockup's section pattern: eyebrow +
 * bold navy title with optional right-aligned description, then content.
 * Real sections arrive in M3+. */

export function Section({
  id,
  eyebrow,
  title,
  description,
  band = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={band ? 'section section--band' : 'section'}
      aria-labelledby={title && id ? `${id}-title` : undefined}
    >
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="section__head">
            <div className="section__titles">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2
                  className="section__title"
                  id={title && id ? `${id}-title` : undefined}
                >
                  {title}
                </h2>
              )}
            </div>
            {description && <p className="section__desc">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
