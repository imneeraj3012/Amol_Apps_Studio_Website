import { Section } from '../components/Section'
import { featuredProjects } from '../data/projects'
import { withBase } from '../utils/paths'
import './PortfolioProjects.css'

/* Portfolio work: overview grid linking to full detail blocks below.
 * Only established project facts; no clients, metrics, or testimonials. */

const slugOf = (name: string) =>
  `project-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

export function PortfolioProjects() {
  return (
    <Section
      id="portfolio-work"
      eyebrow="Selected Work"
      title="Projects in Detail"
      description="A closer look at each application — what it does and what it demonstrates."
    >
      <ul className="pf-grid">
        {featuredProjects.map((project) => (
          <li
            key={project.name}
            className={`pf-card tone-${project.tone}`}
          >
            <div className="pf-card__media">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    project.imageWebpSmall
                      ? `${withBase(project.imageWebpSmall)} 960w, ${withBase(project.imageWebp)} ${project.width}w`
                      : withBase(project.imageWebp)
                  }
                  sizes={
                    project.imageWebpSmall
                      ? '(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 260px'
                      : undefined
                  }
                />
                <img
                  className="pf-card__img"
                  src={withBase(project.image)}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="pf-card__body">
              <h3 className="pf-card__name">{project.name}</h3>
              <p className="pf-card__tagline">{project.tagline}</p>
              <a
                className="pf-card__link"
                href={`#${slugOf(project.name)}`}
              >
                View Details <span aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="pf-details">
        {featuredProjects.map((project) => (
          <article
            key={project.name}
            id={slugOf(project.name)}
            className="pf-detail"
            aria-labelledby={`${slugOf(project.name)}-title`}
          >
            <div className="pf-detail__media">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    project.imageWebpSmall
                      ? `${withBase(project.imageWebpSmall)} 960w, ${withBase(project.imageWebp)} ${project.width}w`
                      : withBase(project.imageWebp)
                  }
                  sizes={
                    project.imageWebpSmall
                      ? '(max-width: 639px) 92vw, 540px'
                      : undefined
                  }
                />
                <img
                  className="pf-detail__img"
                  src={withBase(project.image)}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="pf-detail__body">
              <h3
                className="pf-detail__title"
                id={`${slugOf(project.name)}-title`}
              >
                {project.name}
              </h3>
              <p className="pf-detail__tagline">{project.tagline}</p>
              <p className="pf-detail__desc">{project.description}</p>
              <ul className="pf-detail__list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
