import { useEffect, useState } from 'react'
import { withBase } from '../utils/paths'
import './AppCreationBanner.css'

/* Global site-wide banner showing the app creation process (idea to
 * launch). Rendered by SiteShell above the Header on every page as a
 * normal in-flow element: it scrolls away naturally (not fixed/sticky).
 * WebP preferred, GIF fallback; non-interactive.
 *
 * M6.6 — reduced motion: animated image formats cannot be paused with CSS
 * (the global reduced-motion rule in styles already neutralizes CSS
 * animations/transitions), so when the user prefers reduced motion the
 * animated artwork is replaced with a static first-frame rendering of the
 * same banner. Normal users keep the approved animation unchanged.
 *
 * Semantics: plain non-interactive wrapper (no role, so no accessible
 * name is duplicated); the meaningful alternative text stays on the
 * image itself and remains available to assistive technology. */

const BANNER_ALT = 'Amol Apps Studio app creation process from idea to launch'

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function'
    ) {
      return
    }
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) =>
      setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export function AppCreationBanner() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className="app-creation-banner">
      {reducedMotion ? (
        <img
          className="app-creation-banner__img"
          src={withBase(
            'images/amol_apps_studio_app_creation_banner.static.webp',
          )}
          alt={BANNER_ALT}
          width={1600}
          height={300}
          decoding="async"
          fetchPriority="high"
        />
      ) : (
        <picture>
          <source
            srcSet={withBase(
              'images/amol_apps_studio_app_creation_banner.webp',
            )}
            type="image/webp"
          />
          <img
            className="app-creation-banner__img"
            src={withBase('images/amol_apps_studio_app_creation_banner.gif')}
            alt={BANNER_ALT}
            width={1600}
            height={300}
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      )}
    </div>
  )
}
