import type { HelpCard, ServiceDetail, Technology } from '../types'

/* M4 — Services page content. Capability lists describe the *type* of work
 * the studio does; they do not claim commercial client deliveries.
 * Project images evidence development capability only. */

export const servicesHeroIntro =
  'From custom applications to AI-powered automation, we build practical digital solutions designed around your requirements.'

export const servicesOverviewIntro =
  'Six core service areas to help businesses, entrepreneurs and individuals turn their ideas into practical digital solutions.'

export const serviceDetailsIntro =
  "Each service area is designed to solve real business problems. Here's how we can help you with practical examples and the type of solutions we build."

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'detail-custom-software',
    title: 'Custom Software',
    description: 'Build software around the way your business actually works.',
    capabilities: [
      'Custom business applications',
      'Workflow-specific tools',
      'Internal productivity software',
      'Data-driven applications',
      'Purpose-built desktop or web solutions',
    ],
    visual: {
      kind: 'image',
      image: 'images/FileCraft.png',
      imageWebp: 'images/FileCraft.webp',
      imageWebpSmall: 'images/FileCraft-960.webp',
      alt: 'FileCraft Windows application — an example of custom software development',
      width: 1920,
      height: 1020,
    },
    tone: 'blue',
  },
  {
    slug: 'detail-web-applications',
    title: 'Web Applications',
    description:
      'Turn business processes into accessible browser-based applications.',
    capabilities: [
      'Business dashboards',
      'Ordering and management systems',
      'Customer portals',
      'Internal tools and workflows',
      'Scalable web solutions',
    ],
    visual: {
      kind: 'image',
      image: 'images/Agrosupply -Desktop.png',
      imageWebp: 'images/Agrosupply -Desktop.webp',
      imageWebpSmall: 'images/Agrosupply -Desktop-960.webp',
      alt: 'AgroSupply web application — an example of browser-based business software',
      width: 1920,
      height: 1080,
    },
    tone: 'purple',
  },
  {
    slug: 'detail-mobile-applications',
    title: 'Mobile Applications',
    description: 'Bring your product or business workflow to mobile devices.',
    capabilities: [
      'Android applications',
      'Business and utility apps',
      'Mobile-first workflows',
      'Cross-platform applications where suitable',
      'App publishing support',
    ],
    visual: {
      kind: 'image',
      image: 'images/Calculator_Home.png',
      imageWebp: 'images/Calculator_Home.webp',
      alt: 'Custom Calculator Studio mobile application — an example of mobile development',
      width: 517,
      height: 1028,
    },
    tone: 'green',
  },
  {
    slug: 'detail-windows-applications',
    title: 'Windows Applications',
    description: 'Powerful desktop software designed for Windows workflows.',
    capabilities: [
      'Productivity utilities',
      'File-processing tools',
      'Business desktop applications',
      'Data-processing tools',
      'Specialized internal applications',
    ],
    visual: {
      kind: 'image',
      image: 'images/FileCraft.png',
      imageWebp: 'images/FileCraft.webp',
      imageWebpSmall: 'images/FileCraft-960.webp',
      alt: 'FileCraft Windows application — an example of Windows desktop development',
      width: 1920,
      height: 1020,
    },
    tone: 'orange',
  },
  {
    slug: 'detail-ai-solutions',
    title: 'AI Solutions',
    description:
      'Use AI where it creates practical value — not simply because it is available.',
    capabilities: [
      'AI-assisted workflows',
      'AI-powered application features',
      'Local AI integrations',
      'Intelligent document and data processing',
      'Practical AI automation',
    ],
    visual: { kind: 'ai' },
    tone: 'pink',
  },
  {
    slug: 'detail-business-automation',
    title: 'Business Automation',
    description:
      'Reduce repetitive work and turn manual processes into structured workflows.',
    capabilities: [
      'Data-entry automation',
      'Excel-to-web workflows',
      'Form automation',
      'Document processing',
      'Repetitive business task automation',
    ],
    visual: { kind: 'automation' },
    tone: 'teal',
  },
]

export const helpCardsIntro =
  'Have a business idea, an existing process to improve, or a specific requirement? We can work with you to design and build the right solution.'

export const helpCards: HelpCard[] = [
  {
    title: 'Turn Your Idea Into an App',
    description: 'From concept to a working product.',
    tone: 'blue',
  },
  {
    title: 'Digitize Manual Processes',
    description: 'Replace manual work with digital workflows.',
    tone: 'purple',
  },
  {
    title: 'Build Business Solutions',
    description: 'Applications designed around your needs.',
    tone: 'green',
  },
  {
    title: 'Ongoing Support',
    description: 'Reliable support and future enhancements.',
    tone: 'orange',
  },
]

export const technologiesIntro =
  'We use modern, practical and proven technologies to build reliable solutions for web, mobile, desktop and AI-powered applications.'

export const technologies: Technology[] = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Flutter' },
  { name: 'Python' },
  { name: 'PySide6' },
  { name: 'Supabase' },
  { name: 'SQLite' },
  { name: 'AI / LLM Integration' },
]
