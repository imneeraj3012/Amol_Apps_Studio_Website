import { Button } from '../components/Button'
import { finalCta } from '../data/home'
import { siteMeta, startProjectCta } from '../data/site'
import './FinalCta.css'

/* M3 — final CTA banner from Website_sample.png: strong blue rounded
 * container, white typography, Start a Project + Get in Touch actions.
 * Contact target reuses the known business email (mailto). */

interface FinalCtaProps {
  /** Get-in-Touch target. Defaults to the business email; the homepage
   * passes the experimental query-form route instead. */
  contactHref?: string
}

export function FinalCta({
  contactHref = `mailto:${siteMeta.email}`,
}: FinalCtaProps) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="cta-banner">
          <svg
            className="cta-banner__plane"
            viewBox="0 0 64 64"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M4 32 60 6 38 60l-8-22-26-6Z"
              fill="rgba(255,255,255,0.28)"
            />
            <path d="M30 38 60 6 38 60l-4-14-16-8Z" fill="#fff" opacity="0.9" />
          </svg>
          <div className="cta-banner__copy">
            <p className="cta-banner__eyebrow">{finalCta.eyebrow}</p>
            <h2 className="cta-banner__title" id="contact-title">
              {finalCta.title}
            </h2>
            <p className="cta-banner__desc">{finalCta.description}</p>
          </div>
          <div className="cta-banner__actions">
            <Button href={startProjectCta.href} variant="onNavy">
              <svg
                className="btn__icon"
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M1.5 14.5 14.5 1.5M14.5 1.5H4.8M14.5 1.5v9.7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {startProjectCta.label}
            </Button>
            <a
              className="cta-banner__ghost"
              href={contactHref}
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M8 1.5C4.4 1.5 1.5 4.4 1.5 8c0 1.4.4 2.6 1.2 3.7L1.5 14.5l2.9-1.2c.9.5 2 1.2 3.6 1.2 3.6 0 6.5-2.9 6.5-6.5S11.6 1.5 8 1.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
