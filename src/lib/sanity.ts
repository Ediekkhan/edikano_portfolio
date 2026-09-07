import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2025-05-01',
  useCdn: true,
  perspective: 'published',
});

const builder = isSanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

export function hasSanityImageAsset(source: SanityImageSource | undefined): source is SanityImageSource {
  return Boolean(source && typeof source === 'object' && 'asset' in source && source.asset);
}
