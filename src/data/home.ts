import type { HeroBenefit, WhyChooseReason } from '../types'

/* M3 — homepage-only content: hero benefits + "why choose" reasons.
 * Only established positioning; no invented stats, awards, or claims. */

export const heroTags = ['Software', 'Web', 'Mobile', 'AI', 'Automation']

export const heroBenefits: HeroBenefit[] = [
  { label: 'Practical', detail: 'Solutions' },
  { label: 'Business', detail: 'Focused' },
  { label: 'Modern', detail: 'Technology' },
  { label: 'End-to-End', detail: 'Support' },
]

export const heroIntro =
  'We build practical software, web, mobile, AI-powered and automation solutions for businesses and individuals. From idea and design to development, testing and deployment — we turn your requirements into working digital products.'

export const whyChooseIntro =
  'Practical solutions, modern technology and a business-focused approach.'

export const whyChooseReasons: WhyChooseReason[] = [
  {
    title: 'Business-Focused',
    description:
      'We start with your problem and focus on practical solutions that create real value.',
    tone: 'orange',
  },
  {
    title: 'AI-Assisted Development',
    description:
      'Modern AI tools help accelerate development and enable faster iteration and better solutions.',
    tone: 'blue',
  },
  {
    title: 'Quality & Reliability',
    description:
      'Well-designed, tested and maintainable solutions that you can rely on.',
    tone: 'green',
  },
  {
    title: 'End-to-End Delivery',
    description:
      'From concept and design through development, testing and deployment.',
    tone: 'purple',
  },
]

export const finalCta = {
  eyebrow: "Let's Work Together",
  title: 'Have an idea for an app or digital solution?',
  description:
    "Let's discuss your requirements and turn your idea into a working product.",
}
