import { siteMeta } from '../data/site'
import type {
  QueryFormData,
  SubmissionAdapter,
  SubmissionMethod,
} from '../types/queryForm'

/* Phase 1 experiment — submission adapters, UI-separated.
 * IMPORTANT: every adapter is a dry-run in this phase. Nothing is sent to
 * any external service. No credentials, endpoints, or form IDs exist yet. */

// ---------------------------------------------------------------------------
// Shared payload builder (reused by all four mechanisms)
// ---------------------------------------------------------------------------

export function buildQueryPayload(data: QueryFormData): Record<string, string> {
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.trim() || '—',
    need: data.need,
    budget: data.budget || '—',
    contactMethod: data.contactMethod || '—',
    requirement: data.requirement.trim(),
  }
}

export function formatQueryEmailBody(data: QueryFormData): string {
  const payload = buildQueryPayload(data)
  return [
    'New project query from the Amol Apps Studio website (TEST — Phase 1 experiment).',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phone}`,
    `What do you need: ${payload.need}`,
    `Budget Range: ${payload.budget}`,
    `Preferred Contact Method: ${payload.contactMethod}`,
    '',
    'Requirement:',
    payload.requirement,
  ].join('\n')
}

// ---------------------------------------------------------------------------
// A. EMAIL SERVICE — placeholder configuration point (no sending yet)
// ---------------------------------------------------------------------------

export const EMAIL_SERVICE_CONFIG = {
  /** Insert the email-service endpoint here in a later phase. */
  endpoint: '' as string,
  configured: false,
}

const emailServiceAdapter: SubmissionAdapter = {
  method: 'email-service',
  label: 'Email service',
  submit: (data) => ({
    method: 'email-service',
    delivered: false,
    message: EMAIL_SERVICE_CONFIG.configured
      ? 'Email-service endpoint is configured (sending still disabled in Phase 1).'
      : 'Dry-run: payload prepared. No endpoint configured — see EMAIL_SERVICE_CONFIG in src/utils/querySubmit.ts.',
    preview: JSON.stringify(buildQueryPayload(data), null, 2),
  }),
}

// ---------------------------------------------------------------------------
// B. GOOGLE FORMS — adapter structure only (no form/field IDs invented)
// ---------------------------------------------------------------------------

export const GOOGLE_FORMS_CONFIG = {
  /** Added after the Google Form is created. Do not invent IDs here. */
  formId: '' as string,
  fieldIds: {} as Record<string, string>,
  configured: false,
}

const googleFormsAdapter: SubmissionAdapter = {
  method: 'google-forms',
  label: 'Google Forms',
  submit: (data) => ({
    method: 'google-forms',
    delivered: false,
    message: GOOGLE_FORMS_CONFIG.configured
      ? 'Google Form is configured (submission still disabled in Phase 1).'
      : 'Dry-run: adapter ready. Actual Google Form ID + field IDs will be added in GOOGLE_FORMS_CONFIG after the form is created.',
    preview: JSON.stringify(buildQueryPayload(data), null, 2),
  }),
}

// ---------------------------------------------------------------------------
// C. FORM BACKEND/SERVICE — provider-neutral interface (no endpoint invented)
// ---------------------------------------------------------------------------

export const BACKEND_SERVICE_CONFIG = {
  /** e.g. Formspree / Web3Forms / FormSubmit endpoint — added later. */
  endpoint: '' as string,
  configured: false,
}

const backendServiceAdapter: SubmissionAdapter = {
  method: 'backend-service',
  label: 'Form backend / service',
  submit: (data) => ({
    method: 'backend-service',
    delivered: false,
    message: BACKEND_SERVICE_CONFIG.configured
      ? 'Backend endpoint is configured (submission still disabled in Phase 1).'
      : 'Dry-run: payload prepared. Provider endpoint will be added in BACKEND_SERVICE_CONFIG when a backend is selected.',
    preview: JSON.stringify(buildQueryPayload(data), null, 2),
  }),
}

// ---------------------------------------------------------------------------
// D. MAILTO — local payload generation only (no auto-launch in dry-run)
// ---------------------------------------------------------------------------

export function buildMailtoUrl(data: QueryFormData): string {
  const subject = `Project query from ${data.name.trim()} — ${data.need}`
  const body = formatQueryEmailBody(data)
  return `mailto:${siteMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const mailtoAdapter: SubmissionAdapter = {
  method: 'mailto',
  label: 'Static mailto',
  submit: (data, launch = false) => {
    const url = buildMailtoUrl(data)
    if (launch) {
      window.location.href = url
      return {
        method: 'mailto',
        delivered: true,
        message: `Opening the email client addressed to ${siteMeta.email}.`,
        preview: url,
      }
    }
    return {
      method: 'mailto',
      delivered: false,
      message: `Dry-run: mailto link generated for ${siteMeta.email}. Email client launches only via the explicit test button.`,
      preview: url,
    }
  },
}

// ---------------------------------------------------------------------------

export const SUBMISSION_ADAPTERS: Record<SubmissionMethod, SubmissionAdapter> = {
  'email-service': emailServiceAdapter,
  'google-forms': googleFormsAdapter,
  'backend-service': backendServiceAdapter,
  mailto: mailtoAdapter,
}
