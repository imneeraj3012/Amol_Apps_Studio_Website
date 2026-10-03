import './ContactHero.css'

/* Contact hero: compact introduction above the production query form. */

export function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="container container--narrow contact-hero__inner">
        <p className="eyebrow">Contact</p>
        <h1 className="contact-hero__title" id="contact-hero-title">
          Get in Touch
        </h1>
        <p className="contact-hero__intro">
          Have an app idea, business requirement, or automation challenge?
          Tell us a little about it, and we&apos;ll get back to you.
        </p>
      </div>
    </section>
  )
}
