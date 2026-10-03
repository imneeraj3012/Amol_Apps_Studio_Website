import emailjs from '@emailjs/browser'

/* Production EmailJS delivery for the Contact page query form.
 * Client-side public identifiers only — no private key is used or stored.
 * Template variables (name, email, phone, need, budget, contactMethod,
 * requirement) match the QueryForm field name attributes 1:1, so
 * sendForm() submits the live DOM form directly. */

export const EMAILJS_SERVICE_ID = 'service_3inkpsk'
export const EMAILJS_TEMPLATE_ID = 'template_abmmnii'
export const EMAILJS_PUBLIC_KEY = '9b3Zevp7rKPkEb8y1'

export function sendQueryViaEmailJs(
  form: HTMLFormElement,
): ReturnType<typeof emailjs.sendForm> {
  return emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
    publicKey: EMAILJS_PUBLIC_KEY,
  })
}
