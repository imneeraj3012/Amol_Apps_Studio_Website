/* Phase 1 experiment — User Query Form types.
 * No data leaves the browser in this phase; adapters are dry-run only. */

export interface QueryFormData {
  name: string
  email: string
  phone: string
  need: string
  budget: string
  contactMethod: string
  requirement: string
}

export type SubmissionMethod =
  | 'email-service'
  | 'google-forms'
  | 'backend-service'
  | 'mailto'

export interface SubmissionResult {
  method: SubmissionMethod
  /** True only when an actual external handoff happened (mailto launch). */
  delivered: boolean
  /** Human-readable outcome for the test panel. */
  message: string
  /** Generated payload / URL preview (never sent in dry-run). */
  preview?: string
}

export interface SubmissionAdapter {
  method: SubmissionMethod
  label: string
  /** Dry-run by default; only the mailto adapter opens anything, and only
   * when `launch` is explicitly true. */
  submit: (data: QueryFormData, launch?: boolean) => SubmissionResult
}

export const NEED_OPTIONS = [
  'Custom Software',
  'Web Application',
  'Mobile Application',
  'Windows Application',
  'AI Solution',
  'Business Automation',
  'Not sure / Need advice',
  'Other',
] as const

export const BUDGET_OPTIONS = [
  'Not decided yet',
  'Below ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,50,000',
  'Above ₹2,50,000',
] as const

export const CONTACT_METHOD_OPTIONS = [
  'Email',
  'WhatsApp',
  'Phone Call',
  'Any of the above',
] as const

export const EMPTY_QUERY_FORM: QueryFormData = {
  name: '',
  email: '',
  phone: '',
  need: '',
  budget: '',
  contactMethod: '',
  requirement: '',
}
