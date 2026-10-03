/* M2 — shared TypeScript types. M3 extends with homepage content models. */

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

/* M3 — homepage content models (static, local-data driven; no CMS/API). */

export type AccentTone =
  | 'blue'
  | 'purple'
  | 'green'
  | 'orange'
  | 'pink'
  | 'teal'

export interface HeroBenefit {
  label: string
  detail: string
}

export interface ServiceItem {
  title: string
  description: string
  tone: AccentTone
  /** Inline SVG path for the service icon (shared M3/M4 icon strategy). */
  icon: string
  /** Anchor id of the matching M4 detail block. */
  slug: string
}

export interface ProjectItem {
  name: string
  tagline: string
  description: string
  tone: AccentTone
  /** Path relative to public/, e.g. "images/FileCraft.png". */
  image: string
  /* M6.1 — optimized WebP sibling (PNG stays as fallback), e.g.
   * "images/FileCraft.webp". */
  imageWebp: string
  /* M6.1 — optional narrower WebP variant for small viewports, e.g.
   * "images/FileCraft-960.webp" (960px wide). */
  imageWebpSmall?: string
  /** Meaningful alt text for the real screenshot. */
  alt: string
  /** Intrinsic dimensions (avoids layout shift). */
  width: number
  height: number
  /** Key points restating the approved description (portfolio detail). */
  highlights: string[]
}

export interface ProcessStep {
  index: string
  title: string
  description: string
  tone: AccentTone
}

export interface WhyChooseReason {
  title: string
  description: string
  tone: AccentTone
}

/* M4 — services page content models (static, local-data driven). */

export type ServiceVisual =
  | {
      kind: 'image'
      /** Path relative to public/, e.g. "images/FileCraft.png". */
      image: string
      /* M6.1 — optimized WebP sibling (PNG stays as fallback). */
      imageWebp: string
      /* M6.1 — optional narrower WebP variant for small viewports. */
      imageWebpSmall?: string
      alt: string
      width: number
      height: number
    }
  | { kind: 'ai' }
  | { kind: 'automation' }

export interface ServiceDetail {
  /** Anchor id for the detail block, e.g. "detail-custom-software". */
  slug: string
  title: string
  description: string
  capabilities: string[]
  visual: ServiceVisual
  tone: AccentTone
}

export interface HelpCard {
  title: string
  description: string
  tone: AccentTone
}

export interface Technology {
  name: string
}
