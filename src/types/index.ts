/* M2 — shared TypeScript types. Extend in later milestones. */

export interface SiteMeta {
  name: string
  tagline: string
  email: string
}

export interface NavItem {
  label: string
  /** Placeholder/hash target until real pages exist (M3+). */
  href: string
}
