import { FinalCta } from '../sections/FinalCta'
import { HowWeCanHelp } from '../sections/HowWeCanHelp'
import { ServiceDetails } from '../sections/ServiceDetails'
import { ServicesHero } from '../sections/ServicesHero'
import { ServicesOverview } from '../sections/ServicesOverview'
import { Technologies } from '../sections/Technologies'

/* M4 — Services page in the Services_mockup.png order: hero, glance
 * overview, detailed blocks, help cards, technologies, final CTA.
 * Header/Footer come from the M2 SiteShell. */

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetails />
      <HowWeCanHelp />
      <Technologies />
      <FinalCta />
    </>
  )
}
