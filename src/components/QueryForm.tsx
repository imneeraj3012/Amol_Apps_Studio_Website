import { useRef, useState } from 'react'
import type { QueryFormData } from '../types/queryForm'
import {
  BUDGET_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  EMPTY_QUERY_FORM,
  NEED_OPTIONS,
} from '../types/queryForm'
import { siteMeta } from '../data/site'
import { sendQueryViaEmailJs } from '../utils/emailjs'
import './QueryForm.css'

/* User Query Form. Custom inline validation styled with design tokens
 * (novalidate; no browser-default bubbles). Reports valid data upward.
 * Production Contact page sets sendViaEmailJs so valid data is delivered
 * through EmailJS before the success callback fires; other callers keep
 * the existing dry-run behavior.
 *
 * M6.5 — lightweight client-side abuse protection (dependency-free: no
 * CAPTCHA, no backend, no storage, no tracking):
 * - Honeypot: an off-screen, unfocusable, non-required extra field that
 *   normal users never see or touch. Kept out of QueryFormData so it never
 *   affects validation, the EmailJS template mapping, or the confirmation
 *   summary.
 * - Timing: submissions completed unrealistically fast after mount are
 *   treated the same way (conservative threshold; genuine users are never
 *   asked to wait).
 * Both cases resolve through the normal onValidSubmit success flow without
 * calling EmailJS, revealing nothing about the mechanism. */

interface QueryFormProps {
  onValidSubmit: (data: QueryFormData) => void
  submitLabel?: string
  /** When true, a valid submission is sent via EmailJS first and
   * onValidSubmit fires only on EmailJS success. Defaults to false so
   * existing dry-run callers are unaffected. */
  sendViaEmailJs?: boolean
}

type Errors = Partial<Record<keyof QueryFormData, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/* M6.5 — submissions faster than this after mount are bot-speed. Genuine
 * users always take longer (name + email + select + 10-char message). */
const MIN_INTERACTION_MS = 3000

function validate(data: QueryFormData): Errors {
  const errors: Errors = {}
  if (data.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  } else if (data.name.trim().length > 80) {
    errors.name = 'Name must be 80 characters or fewer.'
  }
  if (!data.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  } else if (data.email.trim().length > 120) {
    errors.email = 'Email address must be 120 characters or fewer.'
  }
  if (data.phone.trim() && data.phone.trim().length > 30) {
    errors.phone = 'Phone number must be 30 characters or fewer.'
  }
  if (!data.need) {
    errors.need = 'Please choose what you need.'
  }
  if (data.requirement.trim().length < 10) {
    errors.requirement =
      'Please describe your requirement (at least 10 characters).'
  } else if (data.requirement.trim().length > 2000) {
    errors.requirement = 'Requirement must be 2000 characters or fewer.'
  }
  return errors
}

export function QueryForm({
  onValidSubmit,
  submitLabel = 'Submit Query',
  sendViaEmailJs = false,
}: QueryFormProps) {
  const [data, setData] = useState<QueryFormData>(EMPTY_QUERY_FORM)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  /* M6.5 — uncontrolled honeypot input (never in form state) + mount
   * timestamp. In-memory only: no cookies, no storage, no tracking. */
  const honeypotRef = useRef<HTMLInputElement>(null)
  const [mountedAt] = useState(() => Date.now())

  const set = (field: keyof QueryFormData, value: string) => {
    const next = { ...data, [field]: value }
    setData(next)
    if (submitError) setSubmitError(null)
    if (touched) setErrors(validate(next))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (sending) return
    const nextErrors = validate(data)
    setErrors(nextErrors)
    setTouched(true)
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = document.querySelector(
        '.query-form [aria-invalid="true"]',
      )
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus()
      return
    }
    /* M6.5 — silent spam guard (after validation, before any delivery).
     * Filled honeypot or bot-speed submission: resolve as a normal success
     * WITHOUT calling EmailJS. No error is shown, so the mechanism is not
     * revealed to automated clients. */
    const honeypotFilled =
      (honeypotRef.current?.value ?? '').trim().length > 0
    const submittedTooFast =
      Date.now() - mountedAt < MIN_INTERACTION_MS
    if (honeypotFilled || submittedTooFast) {
      onValidSubmit(data)
      return
    }
    if (!sendViaEmailJs) {
      onValidSubmit(data)
      return
    }
    const formEl = formRef.current
    if (!formEl) return
    const snapshot = data
    setSending(true)
    setSubmitError(null)
    try {
      await sendQueryViaEmailJs(formEl)
      onValidSubmit(snapshot)
    } catch {
      setSubmitError(
        `We couldn't send your enquiry right now. Please try again, or email us directly at ${siteMeta.email}.`,
      )
    } finally {
      setSending(false)
    }
  }

  const fieldError = (field: keyof QueryFormData) =>
    touched ? errors[field] : undefined

  const describedBy = (field: keyof QueryFormData) =>
    fieldError(field) ? `query-${field}-error` : undefined

  return (
    <form
      ref={formRef}
      className="query-form"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* M6.5 — honeypot: a real, submittable field hidden with an
        accessibility-safe visually-hidden technique (never display:none).
        Uncontrolled, non-required, unfocusable (tabIndex -1), removed from
        the accessibility tree (aria-hidden) and from form state. */}
      <div className="query-form__honeypot" aria-hidden="true">
        <label htmlFor="query-website">Website</label>
        <input
          id="query-website"
          ref={honeypotRef}
          name="website"
          type="text"
          defaultValue=""
          autoComplete="off"
          tabIndex={-1}
        />
      </div>
      <div className="query-form__grid">
        <div className="query-form__field">
          <label htmlFor="query-name">Name *</label>
          <input
            id="query-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            value={data.name}
            onChange={(e) => set('name', e.target.value)}
            aria-invalid={fieldError('name') ? true : undefined}
            aria-describedby={describedBy('name')}
            placeholder="Your full name"
          />
          {fieldError('name') && (
            <p className="query-form__error" id="query-name-error" role="alert">
              {fieldError('name')}
            </p>
          )}
        </div>

        <div className="query-form__field">
          <label htmlFor="query-email">Email Address *</label>
          <input
            id="query-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={120}
            value={data.email}
            onChange={(e) => set('email', e.target.value)}
            aria-invalid={fieldError('email') ? true : undefined}
            aria-describedby={describedBy('email')}
            placeholder="you@example.com"
          />
          {fieldError('email') && (
            <p className="query-form__error" id="query-email-error" role="alert">
              {fieldError('email')}
            </p>
          )}
        </div>

        <div className="query-form__field">
          <label htmlFor="query-phone">Phone / WhatsApp</label>
          <input
            id="query-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            value={data.phone}
            onChange={(e) => set('phone', e.target.value)}
            aria-invalid={fieldError('phone') ? true : undefined}
            aria-describedby={describedBy('phone')}
            placeholder="Optional"
          />
          {fieldError('phone') && (
            <p className="query-form__error" id="query-phone-error" role="alert">
              {fieldError('phone')}
            </p>
          )}
        </div>

        <div className="query-form__field">
          <label htmlFor="query-need">What do you need? *</label>
          <select
            id="query-need"
            name="need"
            required
            value={data.need}
            onChange={(e) => set('need', e.target.value)}
            aria-invalid={fieldError('need') ? true : undefined}
            aria-describedby={describedBy('need')}
          >
            <option value="">Select a service…</option>
            {NEED_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldError('need') && (
            <p className="query-form__error" id="query-need-error" role="alert">
              {fieldError('need')}
            </p>
          )}
        </div>

        <div className="query-form__field">
          <label htmlFor="query-budget">Budget Range</label>
          <select
            id="query-budget"
            name="budget"
            value={data.budget}
            onChange={(e) => set('budget', e.target.value)}
          >
            <option value="">Select a range…</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="query-form__field">
          <label htmlFor="query-contact">Preferred Contact Method</label>
          <select
            id="query-contact"
            name="contactMethod"
            value={data.contactMethod}
            onChange={(e) => set('contactMethod', e.target.value)}
          >
            <option value="">Select a method…</option>
            {CONTACT_METHOD_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="query-form__field query-form__field--full">
          <label htmlFor="query-requirement">
            Tell us about your requirement *
          </label>
          <textarea
            id="query-requirement"
            name="requirement"
            required
            rows={6}
            maxLength={2000}
            value={data.requirement}
            onChange={(e) => set('requirement', e.target.value)}
            aria-invalid={fieldError('requirement') ? true : undefined}
            aria-describedby={describedBy('requirement')}
            placeholder="Describe your idea, business problem, required features, timeline, or anything else that helps us understand what you need."
          />
          {fieldError('requirement') && (
            <p
              className="query-form__error"
              id="query-requirement-error"
              role="alert"
            >
              {fieldError('requirement')}
            </p>
          )}
        </div>
      </div>

      <div className="query-form__actions">
        <button
          type="submit"
          className="btn btn--primary"
          disabled={sending}
        >
          {sending ? (
            'Sending...'
          ) : (
            <>
              {submitLabel}
              <span aria-hidden="true">→</span>
            </>
          )}
        </button>
      </div>
      {submitError && (
        <p
          className="query-form__error query-form__submit-error"
          role="alert"
        >
          {submitError}
        </p>
      )}
    </form>
  )
}
