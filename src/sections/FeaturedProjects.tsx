import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { featuredProjects, featuredProjectsIntro } from '../data/projects'
import { withBase } from '../utils/paths'
import './FeaturedProjects.css'

/* M3 — featured projects from Website_sample.png. Real screenshots from
 * public/images/ render in uniform 16/10 media frames with object-fit:
 * contain, so nothing is cropped or distorted (portrait shots letterbox
 * on a neutral backdrop instead). */

const projectGlyphs: Record<string, string> = {
  FileCraft: 'M4 3h7l9 9v9H4V3Zm3 4v4h4V7H7Zm11 8-4-4h4v4Z',
  AgroSupply:
    'M12 2C7 2 3 6 3 11c0 2 .7 3.9 1.8 5.4L2 21l4.8-2.3A9.9 9.9 0 0 0 12 20c5 0 9-4 9-9s-4-9-9-9Zm-4 7h2v5H8v-5Zm4 0h2v5h-2v-5Zm4 0h2v5h-2v-5Z',
  MyNotebook:
    'M5 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 4v2h8V7H7Zm0 4v2h8v-2H7Zm0 4v2h5v-2H7Z',
  'Custom Calculator Studio':
    'M5 2h14v20H5V2Zm2 2v5h4V4H7Zm6 0v5h4V4h-4ZM7 11v3h4v-3H7Zm6 0v3h4v-3h-4ZM7 16v4h10v-4H7Z',
}

export function FeaturedProjects() {
  return (
    <Section
      id="portfolio"
      eyebrow="Featured Projects"
      title="Our Recent Work"
      description={featuredProjectsIntro}
      band
    >
      <div className="projects__head-action">
        <Button href="#portfolio" variant="outline" size="sm">
          View All Projects
          <span aria-hidden="true">→</span>
        </Button>
      </div>
      <ul className="projects__grid">
        {featuredProjects.map((project) => (
          <li
            key={project.name}
            className={`project-card tone-${project.tone}`}
          >
            <div className="project-card__media">
              <img
                className="project-card__img"
                src={withBase(project.image)}
                alt={project.alt}
                width={project.width}
                height={project.height}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-card__body">
              <p className="project-card__name">
                <svg
                  className={`project-card__glyph tone-${project.tone}`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d={projectGlyphs[project.name] ?? projectGlyphs.FileCraft}
                    fill="currentColor"
                  />
                </svg>
                {project.name}
              </p>
              <p className="project-card__tagline">{project.tagline}</p>
              <p className="project-card__desc">{project.description}</p>
              <a
                className="project-card__link"
                href="#contact"
                aria-label={`${project.name} — view project (contact to enquire)`}
              >
                View Project <span aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
