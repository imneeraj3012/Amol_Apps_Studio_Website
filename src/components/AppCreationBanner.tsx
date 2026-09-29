import { withBase } from '../utils/paths'
import './AppCreationBanner.css'

/* M4 follow-up — global site-wide banner showing the app creation process
 * (idea to launch). Rendered by SiteShell ABOVE the Header on every page.
 * The GIF itself is the complete visual: no overlays, captions, or extra
 * animation. Non-interactive. */

export function AppCreationBanner() {
  return (
    <>
      <div className="app-creation-banner" role="presentation">
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
            alt="Amol Apps Studio app creation process from idea to launch"
            width={1600}
            height={300}
            decoding="async"
          />
        </picture>
      </div>
      <div className="app-creation-banner__spacer" aria-hidden="true" />
    </>
  )
}
