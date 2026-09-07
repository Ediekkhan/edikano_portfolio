import type { PortableTextBlock } from '@portabletext/react';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface ImpactMetric {
  _key?: string;
  label: string;
  value: string;
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  client?: string;
  role?: string;
  problem: string;
  architectureDecisions?: string[];
  metrics?: ImpactMetric[];
  heroImage?: SanityImageSource & { alt?: string };
  liveUrl?: string;
  body?: PortableTextBlock[];
  tech?: string[];
  category?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  body?: PortableTextBlock[];
  readingTime: string;
}
