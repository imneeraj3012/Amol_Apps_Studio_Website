import { Button } from '../components/Button'
import { heroBenefits, heroIntro, heroTags } from '../data/home'
import { startProjectCta } from '../data/site'
import { withBase } from '../utils/paths'
import './Hero.css'

/* M3 — hero matching Website_sample.png: tag pill, headline with gradient
 * emphasis, intro, dual CTA, benefit row, and the four-project device
 * composition with real screenshots from public/images/ (object-fit:
 * contain — fully visible, never distorted). */

const benefitIcons: Record<string, string> = {
  Practical:
    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
  Business:
    'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6v1H2v-1Zm14 1v-1a6 6 0 0 0-4-5.6A3.5 3.5 0 0 1 16 12a3.5 3.5 0 0 1 2.2 6.2c2 .8 3.8 2.6 3.8 4.8v1h-6Z',
  Modern:
    'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  'End-to-End':
    'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1.5 14.5-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7Z',
}

function DeviceBar({ label }: { label: string }) {
  return (
    <span className="device__bar" aria-hidden="true">
      <span className="device__dots">
        <i />
        <i />
        <i />
      </span>
      <span className="device__bar-label">{label}</span>
    </span>
  )
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__tags" aria-label="Focus areas">
            {heroTags.map((tag) => (
              <span key={tag} className="hero__tag">
                {tag}
              </span>
            ))}
          </p>
          <h1 className="hero__title" id="hero-title">
            Turning Business Ideas Into{' '}
            <span className="hero__gradient">Real&nbsp;Apps</span>
          </h1>
          <p className="hero__intro">{heroIntro}</p>
          <div className="hero__ctas">
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
            <Button href="#portfolio" variant="outline">
              <svg
                className="btn__icon"
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4 2.5v11l9-5.5-9-5.5Z" fill="currentColor" />
              </svg>
              Watch Our Work
            </Button>
          </div>
          <ul className="hero__benefits">
            {heroBenefits.map((benefit) => (
              <li key={benefit.label} className="hero__benefit">
                <svg
                  className="hero__benefit-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={benefitIcons[benefit.label]} fill="currentColor" />
                </svg>
                <span className="hero__benefit-text">
                  {benefit.label}
                  <span>{benefit.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <span className="hero__blob" aria-hidden="true" />
          <p className="hero__scribble" aria-hidden="true">
            Ideas
            <span>Applications</span>
            <span>Real Results</span>
          </p>
          <div className="hero__devices">
            <div className="device device--filecraft">
              <DeviceBar label="FileCraft" />
              <div className="device__slot device__slot--wide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${withBase('images/FileCraft-960.webp')} 960w, ${withBase('images/FileCraft.webp')} 1920w`}
                    sizes="(max-width: 1023px) 92vw, 640px"
                  />
                  <img
                    className="device__img"
                    src={withBase('images/FileCraft.png')}
                    alt="FileCraft Windows application"
                    width={1920}
                    height={1020}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="device device--agrosupply">
              <DeviceBar label="AgroSupply" />
              <div className="device__slot device__slot--wide">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${withBase('images/Agrosupply -Desktop-960.webp')} 960w, ${withBase('images/Agrosupply -Desktop.webp')} 1920w`}
                    sizes="(max-width: 1023px) 60vw, 420px"
                  />
                  <img
                    className="device__img"
                    src={withBase('images/Agrosupply -Desktop.png')}
                    alt="AgroSupply ordering application"
                    width={1920}
                    height={1080}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="device device--mynotebook">
              <DeviceBar label="MyNotebook" />
              <div className="device__slot">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${withBase('images/MyNotebook-960.webp')} 960w, ${withBase('images/MyNotebook.webp')} 1920w`}
                    sizes="(max-width: 1023px) 30vw, 220px"
                  />
                  <img
                    className="device__img"
                    src={withBase('images/MyNotebook.png')}
                    alt="MyNotebook notebook application"
                    width={1920}
                    height={1019}
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="device device--calculator">
              <DeviceBar label="Calculator" />
              <div className="device__slot device__slot--phone">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={withBase('images/Calculator_Home.webp')}
                  />
                  <img
                    className="device__img"
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
