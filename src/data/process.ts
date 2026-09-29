import type { ProcessStep } from '../types'

/* M3 — six-step delivery process from the finalized homepage reference.
 * Do not add stages. */

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Understand',
    description: 'We listen to your idea and requirements.',
    tone: 'blue',
  },
  {
    index: '02',
    title: 'Plan',
    description: 'Define scope, features and approach.',
    tone: 'purple',
  },
  {
    index: '03',
    title: 'Design',
    description: 'Create the user experience and technical design.',
    tone: 'green',
  },
  {
    index: '04',
    title: 'Build',
    description: 'Develop using modern tools and best practices.',
    tone: 'orange',
  },
  {
    index: '05',
    title: 'Test',
    description: 'Thorough testing to ensure quality.',
    tone: 'pink',
  },
  {
    index: '06',
    title: 'Deliver',
    description: 'Deploy and support your solution.',
    tone: 'teal',
  },
]

export const processIntro =
  'A clear and collaborative process to turn your idea into a successful digital solution.'
