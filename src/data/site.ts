import type { NavItem, SiteMeta } from '../types'

/* M2 — established site facts only. Page content (services, portfolio,
 * testimonials, pricing, stats) arrives in later milestones — do not invent
 * it here. */

export const siteMeta: SiteMeta = {
  name: 'Amol Apps Studio',
  tagline: 'Turning Business Ideas Into Real Apps',
  email: 'amolapps.studio@gmail.com',
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const startProjectCta = {
  label: 'Start a Project',
  href: '#contact',
}
