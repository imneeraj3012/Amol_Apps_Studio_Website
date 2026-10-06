import './SiteNotice.css'

/* M9 — small Home-only website-status notice. Rendered by Home above Hero
 * (below Header, below the global App Creation Banner which lives in
 * SiteShell). Compact, non-blocking, in-flow. */

export function SiteNotice() {
  return (
    <section className="site-notice" aria-labelledby="site-notice-title">
      <div className="container site-notice__inner">
        <p className="site-notice__title" id="site-notice-title">
          <span aria-hidden="true">✨</span> We&apos;re improving our website
        </p>
        <p className="site-notice__text">
          Our website is currently being refined as we add more details,
          projects, and resources. The site is fully functional, and
          we&apos;re continuing to improve your experience.
        </p>
      </div>
    </section>
  )
}
