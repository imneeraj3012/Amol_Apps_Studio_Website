import './SiteNotice.css'

/* M9 — small Home-only website-status notice. Rendered by Home above Hero
 * (below Header, below the global App Creation Banner which lives in
 * SiteShell). Compact, non-blocking, in-flow. */

export function SiteNotice() {
  return (
    <section className="site-notice" aria-labelledby="site-notice-title">
      <div className="container site-notice__inner">
        <p className="site-notice__title" id="site-notice-title">
          <span aria-hidden="true">✨</span> We’re currently improving our website
        </p>
        <p className="site-notice__text">
          Some sections and content are being updated as we add more details,
          projects, and resources. During this period, you may experience
          temporary issues, and some features or functionality may not work
          as expected. We appreciate your patience while we continue
          improving your experience.
        </p>
      </div>
    </section>
  )
}
