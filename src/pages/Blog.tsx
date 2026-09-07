import { useEffect, useMemo, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { BLOG_POSTS_QUERY } from '../lib/queries';
import { isSanityConfigured, sanityClient } from '../lib/sanity';
import type { BlogPost } from '../types/content';

export default function Blog() {
  usePageMetadata('Writing', 'Notes from Edikan Okon about frontend engineering, accessibility, and product design.');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(isSanityConfigured);

  useEffect(() => {
    if (!isSanityConfigured) return;
    let active = true;
    sanityClient.fetch<BlogPost[]>(BLOG_POSTS_QUERY).then((results) => { if (active) setPosts(results); }).catch(() => {}).finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, []);

  const filteredPosts = useMemo(() => posts.filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [posts, query]);

  return (
    <PageTransition>
      <section className="bg-gray-950 py-20 text-white"><div className="mx-auto max-w-6xl px-6"><p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-300">Writing</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">Notes from the work</h1><p className="mt-6 max-w-2xl text-xl text-gray-300">Practical thinking about accessible interfaces, React, and product delivery.</p></div></section>
      <section className="py-20"><div className="mx-auto max-w-6xl px-6">
        {posts.length > 0 ? <div className="mb-10 max-w-xl"><label htmlFor="article-search" className="mb-2 block text-sm font-medium">Search articles</label><input id="article-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" /></div> : null}
        {isLoading ? <p role="status">Loading published articles…</p> : null}
        {!isLoading && filteredPosts.length > 0 ? <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{filteredPosts.map((post) => <BlogCard key={post._id} post={post} />)}</div> : null}
        {!isLoading && posts.length > 0 && filteredPosts.length === 0 ? <div role="status" className="rounded-2xl border border-gray-200 bg-gray-50 p-8"><h2 className="text-2xl font-bold">No matching articles</h2><p className="mt-2 text-gray-600">Try a broader search term.</p></div> : null}
        {!isLoading && posts.length === 0 ? <div className="max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-8" role="status" aria-live="polite"><p className="eyebrow">Writing archive</p><h2 className="mt-3 text-3xl font-bold">Articles are being prepared.</h2><p className="mt-4 leading-relaxed text-gray-600">Need evidence of how I communicate technical decisions? Request a writing sample and I’ll send the most relevant one directly.</p><Button href="mailto:eddychristantus@gmail.com?subject=Writing%20sample%20request" className="mt-6">Request a writing sample</Button></div> : null}
      </div></section>
    </PageTransition>
  );
}