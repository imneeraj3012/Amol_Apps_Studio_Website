import { useState } from 'react'
import { QueryForm } from '../components/QueryForm'
import { Section } from '../components/Section'
import { ContactHero } from '../sections/ContactHero'
import { siteMeta } from '../data/site'
import type { QueryFormData } from '../types/queryForm'
import './ContactPage.css'

/* Contact page: production wrapper around the shared QueryForm.
 * Valid enquiries are delivered via EmailJS before the confirmation
 * summary appears. The direct-email section below remains as a
 * secondary fallback. No storage, tracking, or private keys involved. */

export function ContactPage() {
  const [submitted, setSubmitted] = useState<QueryFormData | null>(null)

  return (
    <>
      <ContactHero />
      <Section id="contact-form" eyebrow="Project Query" title="Tell Us About Your Project">
        <div className="contact__card">
          {submitted ? (
            <div className="contact__confirm" role="status">
              <h3>Thanks, {submitted.name.trim()}!</h3>
              <p>
                Your enquiry has been sent successfully. We&apos;ll get back
                to you soon. Here is a summary of your query:
              </p>
              <dl className="contact__summary">
                <div>
                  <dt>What you need</dt>
                  <dd>{submitted.need}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{submitted.email.trim()}</dd>
                </div>
                {submitted.budget && (
                  <div>
                    <dt>Budget</dt>
                    <dd>{submitted.budget}</dd>
                  </div>
                )}
              </dl>
              <div className="contact__confirm-actions">
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => setSubmitted(null)}
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <QueryForm onValidSubmit={setSubmitted} sendViaEmailJs />
          )}
        </div>
      </Section>
      <Section id="contact-direct" eyebrow="Prefer Email" title="Write to Us Directly">
        <p className="contact__direct">
          Prefer your own email app? Write to{' '}
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a> with a
          short description of your idea or requirement, and we&apos;ll get
          back to you.
        </p>
      </Section>
    </>
  )
}
