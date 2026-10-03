import { FinalCta } from '../sections/FinalCta'
import { PortfolioHero } from '../sections/PortfolioHero'
import { PortfolioProjects } from '../sections/PortfolioProjects'

/* Portfolio page: hero, overview grid, detailed project blocks, CTA.
 * Only established project facts — no clients, metrics, or testimonials. */

export function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioProjects />
      <FinalCta contactHref="#/contact" />
    </>
  )
}
