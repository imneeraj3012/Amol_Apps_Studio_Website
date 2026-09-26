import { siteMeta } from '../data/site'
import './Logo.css'

interface LogoProps {
  /** Compact variant (header on small screens, footer). Hides the tagline. */
  compact?: boolean
}

/* M2 — brand treatment derived from the approved mockup: blue geometric "A"
 * mark + "AMOL APPS STUDIO" wordmark with tagline beneath. Inline SVG keeps
 * the mark crisp and subpath-safe (no image asset required). */

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="logo">
      <svg
        className="logo__mark"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16 2 30 28h-6.4L16 12.6 8.4 28H2L16 2Z"
          fill="#1f6bf5"
        />
        <path d="M12.2 22h7.6l1.7 3.4H10.5l1.7-3.4Z" fill="#7c9df7" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{siteMeta.name}</span>
        {!compact && <span className="logo__tagline">{siteMeta.tagline}</span>}
      </span>
    </span>
  )
}
