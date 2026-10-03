import { Button } from '../components/Button'
import { startProjectCta } from '../data/site'
import { withBase } from '../utils/paths'
import './PortfolioHero.css'

/* Portfolio hero: compact copy-left / screenshot-right composition in the
 * site hero language. Uses the FileCraft screenshot already in the repo. */

export function PortfolioHero() {
  return (
    <section className="pf-hero" aria-labelledby="portfolio-hero-title">
      <div className="container pf-hero__inner">
        <div className="pf-hero__copy">
          <p className="eyebrow">Portfolio</p>
          <h1 className="pf-hero__title" id="portfolio-hero-title">
            Real Applications,
            <span className="pf-hero__title-line">Real Solutions</span>
          </h1>
          <p className="pf-hero__intro">
            A selection of applications designed and built by Amol Apps
            Studio — practical software for real business and productivity
            needs.
          </p>
          <div className="pf-hero__ctas">
            <Button href={startProjectCta.href}>
              {startProjectCta.label}
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="#portfolio-work" variant="outline">
              View Our Work
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        <div className="pf-hero__visual">
          <div className="pf-hero__frame">
            <picture>
              <source
                type="image/webp"
                srcSet={`${withBase('images/FileCraft-960.webp')} 960w, ${withBase('images/FileCraft.webp')} 1920w`}
                sizes="(max-width: 1023px) 92vw, 620px"
              />
              <img
                className="pf-hero__img"
                src={withBase('images/FileCraft.png')}
                alt="FileCraft Windows application"
                width={1920}
                height={1020}
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
