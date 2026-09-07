import type { CaseStudy } from '../types/content';

// Only projects with known, working public URLs are included here. Add verified
// outcomes and screenshots in Sanity rather than inventing portfolio evidence.
export const fallbackCaseStudies: CaseStudy[] = [
  {
    _id: 'afric-innovate',
    title: 'AfricInnovate Platform',
    slug: 'afric-innovate-platform',
    client: 'AfricInnovate Tech',
    role: 'Frontend Developer',
    problem: 'Build responsive application interfaces and dependable client-side state for a growing African technology platform.',
    architectureDecisions: ['Reusable React interface components', 'Typed frontend development', 'Centralized state management'],
    metrics: [
      { label: 'Team', value: '5 developers' },
      { label: 'Focus', value: 'Responsive UI' },
    ],
    liveUrl: 'https://www.africinnovate.com',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    category: 'Frontend',
  },
  {
    _id: 'pk5-agro-allied',
    title: 'PK5 Agro-Allied',
    slug: 'pk5-agro-allied',
    client: 'PK5 Holdings',
    role: 'Frontend Engineer',
    problem: 'Create the complete responsive frontend architecture for an agro-allied business and establish a maintainable foundation for continued product development.',
    architectureDecisions: ['Modular React component architecture', 'Responsive cross-device implementation', 'Documented integration patterns for maintainability'],
    liveUrl: 'https://pk5agroallied.com/',
    tech: ['React', 'TypeScript'],
    category: 'Frontend',
  },
  {
    _id: 'pk5-mining',
    title: 'PK5 Mining Portal',
    slug: 'pk5-mining-portal',
    client: 'PK5 Holdings',
    role: 'Frontend Engineer',
    problem: 'Translate Figma prototypes into a modular enterprise portal and recruitment experience that remained consistent across devices.',
    architectureDecisions: ['Figma-to-code component mapping', 'Reusable interface modules', 'Recruitment workflow implementation'],
    liveUrl: 'https://pk5miningltd.com/',
    tech: ['React', 'TypeScript'],
    category: 'Web App',
  },
  {
    _id: 'football-telegram',
    title: 'FootballTelegram Publishing',
    slug: 'football-telegram-publishing',
    client: 'FootballTelegram',
    role: 'Web Content Manager',
    problem: 'Keep a football publication clear, current, and visually consistent while managing recurring editorial updates.',
    architectureDecisions: ['WordPress publishing workflow', 'Custom CSS for presentation consistency', 'Repeatable weekly content updates'],
    metrics: [
      { label: 'Cadence', value: 'Weekly updates' },
      { label: 'Tenure', value: '2019—2021' },
    ],
    tech: ['WordPress', 'CSS'],
    category: 'Content Platform',
  },
];
