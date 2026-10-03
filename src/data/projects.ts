import type { ProjectItem } from '../types'

/* M3 — featured projects. Exactly the four established projects, with the
 * approved factual descriptions. No additional projects, no invented
 * features. Screenshots are NOT yet available in the repo — cards render a
 * clearly labelled asset slot preserving layout until real assets land. */

export const featuredProjects: ProjectItem[] = [
  {
    name: 'FileCraft',
    tagline: 'Compare · Transfer · Transform',
    description:
      'A Windows application for comparing, transferring and transforming file content through a structured workflow.',
    tone: 'blue',
    image: 'images/FileCraft.png',
    imageWebp: 'images/FileCraft.webp',
    imageWebpSmall: 'images/FileCraft-960.webp',
    alt: 'FileCraft Windows application',
    width: 1920,
    height: 1020,
    highlights: [
      'Windows desktop application',
      'File content comparison',
      'Content transfer and transformation',
      'Structured step-by-step workflow',
    ],
  },
  {
    name: 'AgroSupply',
    tagline: 'Connect · Order · Grow',
    description:
      'A digital ordering platform to connect manufacturers and distributors and streamline the ordering workflow.',
    tone: 'green',
    image: 'images/Agrosupply -Desktop.png',
    imageWebp: 'images/Agrosupply -Desktop.webp',
    imageWebpSmall: 'images/Agrosupply -Desktop-960.webp',
    alt: 'AgroSupply ordering application',
    width: 1920,
    height: 1080,
    highlights: [
      'Digital ordering platform',
      'Connects manufacturers and distributors',
      'Streamlined ordering workflow',
    ],
  },
  {
    name: 'MyNotebook',
    tagline: 'Simple · Organized · Yours',
    description:
      'A local-first notebook application designed for organized note-taking across supported platforms.',
    tone: 'purple',
    image: 'images/MyNotebook.png',
    imageWebp: 'images/MyNotebook.webp',
    imageWebpSmall: 'images/MyNotebook-960.webp',
    alt: 'MyNotebook notebook application',
    width: 1920,
    height: 1019,
    highlights: [
      'Local-first notebook application',
      'Organized note-taking',
      'Available across supported platforms',
    ],
  },
  {
    name: 'Custom Calculator Studio',
    tagline: 'Calculate · Customize · Expand',
    description:
      'A customizable calculator application with multiple built-in calculators and support for custom calculators.',
    tone: 'pink',
    image: 'images/Calculator_Home.png',
    imageWebp: 'images/Calculator_Home.webp',
    alt: 'Custom Calculator Studio application',
    width: 517,
    height: 1028,
    highlights: [
      'Customizable calculator application',
      'Multiple built-in calculators',
      'Support for custom calculators',
    ],
  },
]

export const featuredProjectsIntro =
  'Real applications. Real solutions. Here are some of our key projects.'
