import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/content';

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt);
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3 text-sm text-gray-500"><time dateTime={post.publishedAt}>{date.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}</time><span aria-hidden="true">·</span><span className="inline-flex items-center gap-1"><Clock size={14} aria-hidden="true" />{post.readingTime}</span></div>
      <h2 className="mt-5 text-2xl font-bold text-gray-950"><Link className="focus-ring rounded hover:text-teal-700" to={`/blog/${post.slug}`}>{post.title}</Link></h2>
      <p className="mt-3 flex-1 leading-relaxed text-gray-600">{post.excerpt}</p>
      <Link className="focus-ring mt-6 inline-flex items-center gap-2 self-start rounded text-sm font-semibold text-teal-700" to={`/blog/${post.slug}`}>Read article <ArrowRight size={16} /></Link>
    </article>
  );
}
