import type { ServiceItem } from '../types'

/* M3 — services shown on the homepage. Descriptions match the finalized
 * homepage reference (Website_sample.png). No invented claims.
 * M4 adds icon paths + detail slugs so the Services page reuses the same
 * data (homepage rendering is unchanged). */

export const services: ServiceItem[] = [
  {
    title: 'Custom Software',
    description:
      'Purpose-built applications for your specific business requirements.',
    tone: 'blue',
    icon: 'M3 4h18v12H3V4Zm2 2v8h14V6H5Zm4 12h6v2H9v-2ZM11 8h2v4h-2V8Z',
    slug: 'detail-custom-software',
  },
  {
    title: 'Web Applications',
    description: 'Browser-based business and productivity solutions.',
    tone: 'purple',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7 6h-3.2a15.6 15.6 0 0 0-1.5-3.6A8 8 0 0 1 19 8ZM12 4a14.4 14.4 0 0 1 1.9 4H10A14.4 14.4 0 0 1 12 4ZM4.5 14a8 8 0 0 1 0-4H8a16.6 16.6 0 0 0-.4 2c0 .7.1 1.3.4 2H4.5Zm.8 2H8c.4 1.3.9 2.5 1.5 3.6A8 8 0 0 1 5.3 16Zm3.2 0h7c-.4 1.4-1 2.8-1.5 4-1.3.5-2.7.5-4 0-.5-1.2-1.1-2.6-1.5-4Zm8.3 3.6c.6-1.1 1.1-2.3 1.5-3.6h2.2a8 8 0 0 1-3.7 3.6ZM16 14c0-.7-.1-1.3-.4-2h3.9a8 8 0 0 1 0 4H16c.3-.7.4-1.3.4-2ZM10.1 8H14c.3 1.2.5 2.6.5 4H9.5c0-1.4.2-2.8.6-4Zm-1.6 6h7c0 .7-.1 1.4-.4 2H8.9c-.3-.6-.4-1.3-.4-2Z',
    slug: 'detail-web-applications',
  },
  {
    title: 'Mobile Applications',
    description: 'Android and mobile applications.',
    tone: 'green',
    icon: 'M7 2h10v20H7V2Zm2 2v14h6V4H9Zm3 15.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
    slug: 'detail-mobile-applications',
  },
  {
    title: 'Windows Applications',
    description: 'Desktop software and utilities for Windows.',
    tone: 'orange',
    icon: 'M3 3h8.5v8.5H3V3Zm10.5 0H21v8.5h-7.5V3ZM3 13.5h8.5V21H3v-7.5Zm10.5 0H21V21h-7.5v-7.5Z',
    slug: 'detail-windows-applications',
  },
  {
    title: 'AI Solutions',
    description: 'AI-powered applications and intelligent workflows.',
    tone: 'pink',
    icon: 'M9 2v2H7v2H5v12h4v2h6v-2h4V6h-2V4h-2V2H9Zm0 4h6v2h2v10h-2v2H9v-2H7V8h2V6Zm3 6.5A1.75 1.75 0 1 0 12 9a1.75 1.75 0 0 0 0 3.5Zm-4 1.5v2h2v-2H8Zm8 0v2h2v-2h-2Z',
    slug: 'detail-ai-solutions',
  },
  {
    title: 'Business Automation',
    description: 'Automate repetitive processes and improve efficiency.',
    tone: 'teal',
    icon: 'M12 8a4 4 0 1 0 4 4M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1M18 12a6 6 0 1 1-6-6',
    slug: 'detail-business-automation',
  },
]

export const servicesIntro =
  'Custom software and digital solutions designed to help businesses, entrepreneurs and individuals work smarter.'
