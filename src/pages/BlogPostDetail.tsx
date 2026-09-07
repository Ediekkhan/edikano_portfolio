import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PortableContent from '../components/PortableContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { BLOG_POST_QUERY } from '../lib/queries';
import { isSanityConfigured, sanityClient } from '../lib/sanity';
import type { BlogPost } from '../types/content';

export default function BlogPostDetail() {
  const { slug = '' } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(isSanityConfigured);
  usePageMetadata(post?.title || 'Article', post?.excerpt);

  useEffect(() => {
    if (!isSanityConfigured) return;
    let active = true;
    sanityClient.fetch<BlogPost | null>(BLOG_POST_QUERY, { slug }).then((result) => { if (active) setPost(result); }).catch(() => {}).finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, [slug]);

  if (isLoading) return <main className="mx-auto max-w-3xl px-6 py-24" role="status">Loading article…</main>;
  if (!post) return <main className="mx-auto max-w-3xl px-6 py-24"><p className="eyebrow">404</p><h1 className="mt-3 text-4xl font-bold">Article not found</h1><Link className="focus-ring mt-8 inline-block rounded text-teal-700" to="/blog">Return to writing</Link></main>;

  return <PageTransition><article><header className="bg-gray-950 py-20 text-white"><div className="mx-auto max-w-3xl px-6"><Link className="focus-ring rounded text-sm text-teal-300" to="/blog">← All writing</Link><p className="mt-10 text-sm text-gray-400"><time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}</time> · {post.readingTime}</p><h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">{post.title}</h1><p className="mt-6 text-xl leading-relaxed text-gray-300">{post.excerpt}</p></div></header><div className="mx-auto max-w-3xl px-6 py-16">{post.body ? <PortableContent value={post.body} /> : null}</div></article></PageTransition>;
}
