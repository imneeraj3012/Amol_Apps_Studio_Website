import { SiteNotice } from '../components/SiteNotice'
import { FeaturedProjects } from '../sections/FeaturedProjects'
import { FinalCta } from '../sections/FinalCta'
import { Hero } from '../sections/Hero'
import { Process } from '../sections/Process'
import { Services } from '../sections/Services'
import { WhyChoose } from '../sections/WhyChoose'

/* M3 — homepage in the finalized reference order: Hero, Services,
 * Featured Projects, Process, Why Choose, Final CTA. Header/Footer come
 * from the M2 SiteShell. Anchors: #services, #portfolio, #about, #contact
 * resolve to sections below; #home resolves to the SiteShell wrapper.
 * M9 — compact SiteNotice renders above Hero (Home only). */

export function Home() {
  return (
    <>
      <SiteNotice />
      <Hero />
      <Services />
      <FeaturedProjects />
      <Process />
      <WhyChoose />
      <FinalCta contactHref="#/contact" />
    </>
  )
}
