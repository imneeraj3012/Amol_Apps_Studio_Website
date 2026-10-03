import { Section } from '../components/Section'
import { serviceDetailsIntro, serviceDetails } from '../data/servicesPage'
import type { ServiceDetail } from '../types'
import { withBase } from '../utils/paths'
import './ServiceDetails.css'

/* M4 — "Our Services in Detail": six pastel blocks in the mockup's
 * two-per-row composition. Each block pairs capabilities with a visual:
 * real screenshots where available, otherwise a lightweight CSS/icon
 * illustration (AI, automation) — no stock imagery. */

const CHECK_PATH =
  'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.2-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-6.8 7Z'

function AiVisual() {
  return (
    <div className="detail-visual detail-visual--ai" role="img" aria-label="Illustration of AI-assisted application features">
      <span className="detail-visual__chip" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M4 3h16v12H8l-4 4V3Zm3 4v2h10V7H7Zm0 4v2h7v-2H7Z" fill="currentColor" /></svg>
      </span>
      <span className="detail-visual__chip" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M6 2h9l5 5v15H6V2Zm2 4v12h10V8h-5V6H8Z" fill="currentColor" /></svg>
      </span>
      <span className="detail-visual__center" aria-hidden="true">AI</span>
      <span className="detail-visual__chip" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M12 3C7 3 3 5.2 3 8s4 5 9 5 9-2.2 9-5-4-5-9-5Zm-7 5.5h2v4H5v-4Zm4 0h6v4H9v-4Zm8 0h2v4h-2v-4ZM5 13h2v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4h-2v4h-2v-3h-2v3h-2v-3H9v3H7v-3H5v3H3v-1c0-.4 0-.7.2-1H5v-2Z" fill="currentColor" /></svg>
      </span>
      <span className="detail-visual__chip" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M12 8a4 4 0 1 0 4 4M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1M18 12a6 6 0 1 1-6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </span>
    </div>
  )
}

function AutomationVisual() {
  return (
    <div className="detail-visual detail-visual--automation" role="img" aria-label="Illustration of business workflow automation">
      <span className="detail-visual__chip" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M5 3h14v4H5V3Zm-2 6h18v3H3V9Zm2 5h6v7H5v-7Zm8 0h6v7h-6v-7Z" fill="currentColor" /></svg>
      </span>
      <span className="detail-visual__chip" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M6 2h9l5 5v15H6V2Zm2 4v12h10V8h-5V6H8Zm3 6v2h4v-2H11Z" fill="currentColor" /></svg>
      </span>
      <span className="detail-visual__center detail-visual__center--gear" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm9 5.1v-3.2l-2.2-.5a7.6 7.6 0 0 0-.8-1.9l1.2-1.9-2.2-2.3-1.9 1.2a7.6 7.6 0 0 0-1.9-.8L12.7 2H9.3l-.5 2.2a7.6 7.6 0 0 0-1.9.8L5 3.8 2.8 6.1l1.2 1.9a7.6 7.6 0 0 0-.8 1.9L1 10.4v3.2l2.2.5c.2.7.5 1.3.8 1.9L2.8 18l2.2 2.2 1.9-1.2c.6.3 1.2.6 1.9.8l.5 2.2h3.4l.5-2.2a7.6 7.6 0 0 0 1.9-.8l1.9 1.2 2.2-2.2-1.2-1.9c.3-.6.6-1.2.8-1.9l2.2-.5Z" fill="currentColor" /></svg>
      </span>
      <span className="detail-visual__chip" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M4 5h16v14H4V5Zm2 2v3h5V7H6Zm0 5v4h11v-4H6Z" fill="currentColor" /></svg>
      </span>
    </div>
  )
}

function DetailVisual({ detail }: { detail: ServiceDetail }) {
  if (detail.visual.kind === 'ai') return <AiVisual />
  if (detail.visual.kind === 'automation') return <AutomationVisual />
  return (
    <div className="detail-visual detail-visual--photo">
      <picture>
        <source
          type="image/webp"
          srcSet={
            detail.visual.imageWebpSmall
              ? `${withBase(detail.visual.imageWebpSmall)} 960w, ${withBase(detail.visual.imageWebp)} ${detail.visual.width}w`
              : withBase(detail.visual.imageWebp)
          }
          sizes={
            detail.visual.imageWebpSmall
              ? '(max-width: 639px) 92vw, (max-width: 1023px) 44vw, 270px'
              : undefined
          }
        />
        <img
          className="detail-visual__img"
          src={withBase(detail.visual.image)}
          alt={detail.visual.alt}
          width={detail.visual.width}
          height={detail.visual.height}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  )
}

export function ServiceDetails() {
  return (
    <Section
      id="services-detail"
      eyebrow="Detailed Overview"
      title="Our Services in Detail"
      description={serviceDetailsIntro}
      band
    >
      <div className="detail-grid">
        {serviceDetails.map((detail) => (
          <article
            key={detail.slug}
            id={detail.slug}
            className={`detail-card tone-${detail.tone}`}
            aria-labelledby={`${detail.slug}-title`}
          >
            <div className="detail-card__body">
              <h3
                className="detail-card__title"
                id={`${detail.slug}-title`}
              >
                {detail.title}
              </h3>
              <p className="detail-card__desc">{detail.description}</p>
              <ul className="detail-card__list">
                {detail.capabilities.map((capability) => (
                  <li key={capability}>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d={CHECK_PATH} fill="currentColor" />
                    </svg>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <DetailVisual detail={detail} />
          </article>
        ))}
      </div>
    </Section>
  )
}
