import { Section } from '../components/Section'
import { technologies, technologiesIntro } from '../data/servicesPage'
import './Technologies.css'

/* M4 — "Technologies & Capabilities": lightweight badge treatment only —
 * no logo wall. Only genuine current development capabilities. */

export function Technologies() {
  return (
    <Section
      id="technologies"
      eyebrow="Our Approach"
      title="Technologies & Capabilities"
      description={technologiesIntro}
    >
      <ul className="tech__list" aria-label="Technologies and capabilities">
        {technologies.map((tech) => (
          <li key={tech.name} className="tech__badge">
            <span className="tech__dot" aria-hidden="true" />
            {tech.name}
          </li>
        ))}
      </ul>
    </Section>
  )
}
