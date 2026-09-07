import { defineQuery } from 'groq';

export const CASE_STUDIES_QUERY = defineQuery(/* groq */ `
  *[_type == "caseStudy" && defined(slug.current)] | order(_updatedAt desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    role,
    problem,
    architectureDecisions,
    metrics[]{_key, label, value},
    heroImage{asset, alt, crop, hotspot},
    liveUrl,
    body
  }
`);

export const CASE_STUDY_QUERY = defineQuery(/* groq */ `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    client,
    role,
    problem,
    architectureDecisions,
    metrics[]{_key, label, value},
    heroImage{asset, alt, crop, hotspot},
    liveUrl,
    body
  }
`);

export const BLOG_POSTS_QUERY = defineQuery(/* groq */ `
  *[_type == "blogPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    readingTime
  }
`);

export const BLOG_POST_QUERY = defineQuery(/* groq */ `
  *[_type == "blogPost" && slug.current == $slug && publishedAt <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    body,
    readingTime
  }
`);
