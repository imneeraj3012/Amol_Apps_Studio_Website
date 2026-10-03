import { AboutHero } from '../sections/AboutHero'
import { FinalCta } from '../sections/FinalCta'
import { Process } from '../sections/Process'
import { Technologies } from '../sections/Technologies'
import { WhyChoose } from '../sections/WhyChoose'

/* About page: introduction, approach (reused WhyChoose), capabilities
 * (reused Technologies), process (reused Process), CTA. Only established
 * facts — no invented history, team, clients, or statistics. */

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyChoose />
      <Technologies />
      <Process />
      <FinalCta contactHref="#/contact" />
    </>
  )
}
