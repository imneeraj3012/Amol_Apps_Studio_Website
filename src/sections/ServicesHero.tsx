import { Button } from '../components/Button'
import { servicesHeroIntro } from '../data/servicesPage'
import { startProjectCta } from '../data/site'
import { withBase } from '../utils/paths'
import './ServicesHero.css'

/* M4 — services hero from Services_mockup.png: eyebrow, two-line heading,
 * intro, Start a Project + Get in Touch, and the four-real-screenshot
 * device composition (FileCraft dominant, AgroSupply secondary, MyNotebook,
 * Calculator phone). Compact top spacing, matching the M3 hero density. */

function SvcDeviceBar({ label }: { label: string }) {
  return (
    <span className="svc-device__bar" aria-hidden="true">
      <span className="svc-device__dots">
        <i />
        <i />
        <i />
      </span>
      <span className="svc-device__bar-label">{label}</span>
    </span>
  )
}

export function ServicesHero() {
  return (
    <section className="svc-hero" aria-labelledby="services-hero-title">
      <div className="container svc-hero__inner">
        <div className="svc-hero__copy">
          <p className="eyebrow">Our Services</p>
          <h1 className="svc-hero__title" id="services-hero-title">
            Software Solutions
            <span className="svc-hero__title-line">
              Built Around Your Needs
            </span>
          </h1>
          <p className="svc-hero__intro">{servicesHeroIntro}</p>
          <div className="svc-hero__ctas">
            <Button href={startProjectCta.href}>
              <svg
                className="btn__icon"
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M1.5 14.5 14.5 1.5M14.5 1.5H4.8M14.5 1.5v9.7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {startProjectCta.label}
            </Button>
            <Button
              href="#/contact"
              variant="outline"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

        <div className="svc-hero__visual">
          <span className="svc-hero__blob" aria-hidden="true" />
          <p className="svc-hero__scribble" aria-hidden="true">
            Ideas
            <span>Applications</span>
            <span>Real Results</span>
          </p>
          <div className="svc-hero__devices">
            <div className="svc-device svc-device--filecraft">
              <SvcDeviceBar label="FileCraft" />
              <div className="svc-device__slot svc-device__slot--wide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${withBase('images/FileCraft-960.webp')} 960w, ${withBase('images/FileCraft.webp')} 1920w`}
                    sizes="(max-width: 1023px) 92vw, 640px"
                  />
                  <img
                    className="svc-device__img"
                    src={withBase('images/FileCraft.png')}
                    alt="FileCraft Windows application"
                    width={1920}
                    height={1020}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="svc-device svc-device--agrosupply">
              <SvcDeviceBar label="AgroSupply" />
              <div className="svc-device__slot svc-device__slot--wide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${withBase('images/Agrosupply -Desktop-960.webp')} 960w, ${withBase('images/Agrosupply -Desktop.webp')} 1920w`}
                    sizes="(max-width: 1023px) 60vw, 420px"
                  />
                  <img
                    className="svc-device__img"
                    src={withBase('images/Agrosupply -Desktop.png')}
                    alt="AgroSupply ordering application"
                    width={1920}
                    height={1080}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="svc-device svc-device--mynotebook">
              <SvcDeviceBar label="MyNotebook" />
              <div className="svc-device__slot">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${withBase('images/MyNotebook-960.webp')} 960w, ${withBase('images/MyNotebook.webp')} 1920w`}
                    sizes="(max-width: 1023px) 30vw, 220px"
                  />
                  <img
                    className="svc-device__img"
                    src={withBase('images/MyNotebook.png')}
                    alt="MyNotebook notebook application"
                    width={1920}
                    height={1019}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="svc-device svc-device--calculator">
              <SvcDeviceBar label="Calculator" />
              <div className="svc-device__slot svc-device__slot--phone">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={withBase('images/Calculator_Home.webp')}
                  />
                  <img
                    className="svc-device__img"
                    src={withBase('images/Calculator_Home.png')}
                    alt="Custom Calculator Studio application"
                    width={517}
                    height={1028}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
