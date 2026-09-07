import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import PortableContent from '../components/PortableContent';
import { fallbackCaseStudies } from '../data/fallbackContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { CASE_STUDY_QUERY } from '../lib/queries';
import { hasSanityImageAsset, isSanityConfigured, sanityClient, urlFor } from '../lib/sanity';
import type { CaseStudy } from '../types/content';

export default function CaseStudyDetail() {
  const { slug = '' } = useParams();
  const local = fallbackCaseStudies.find((project) => project.slug === slug);
  const [project, setProject] = useState<CaseStudy | undefined>(local);
  const [isLoading, setIsLoading] = useState(isSanityConfigured);
  usePageMetadata(project?.title || 'Case Study', project?.problem);

  useEffect(() => {
    if (!isSanityConfigured) return;
    let active = true;
    sanityClient.fetch<CaseStudy | null>(CASE_STUDY_QUERY, { slug }).then((result) => { if (active && result) setProject(result); }).catch(() => {}).finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, [slug]);

  if (isLoading && !project) return <main className="mx-auto max-w-6xl px-6 py-24" role="status">Loading case study…</main>;
  if (!project) return <main className="mx-auto max-w-3xl px-6 py-24"><p className="eyebrow">404</p><h1 className="mt-3 text-4xl font-bold">Case study not found</h1><Button to="/projects" className="mt-8">Browse all work</Button></main>;

  const imageUrl = hasSanityImageAsset(project.heroImage) ? urlFor(project.heroImage)?.width(1400).height(800).fit('crop').auto('format').url() : null;
  return <PageTransition>
    <article>
      <header className="bg-gray-950 py-20 text-white"><div className="mx-auto max-w-5xl px-6"><Link to="/projects" className="focus-ring rounded text-sm text-teal-300">← All case studies</Link><p className="mt-10 font-mono text-sm uppercase tracking-[0.2em] text-teal-300">{project.client} {project.role ? `· ${project.role}` : ''}</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">{project.title}</h1><p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">{project.problem}</p>{project.liveUrl ? <div className="mt-8"><a className="focus-ring inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-medium text-gray-950" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site <ExternalLink size={17} /></a></div> : null}</div></header>
      {imageUrl ? <div className="mx-auto -mb-6 max-w-6xl px-6 pt-12"><img src={imageUrl} alt={project.heroImage?.alt || `${project.title} interface`} width="1400" height="800" className="w-full rounded-2xl border border-gray-200 object-cover shadow-lg" /></div> : null}
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[1fr_2fr]">
        <aside>{project.metrics?.length ? <dl className="grid grid-cols-2 gap-6 lg:grid-cols-1">{project.metrics.map((metric) => <div key={metric._key || metric.label}><dt className="text-sm uppercase tracking-wider text-gray-500">{metric.label}</dt><dd className="mt-1 text-xl font-bold">{metric.value}</dd></div>)}</dl> : null}</aside>
        <div>{project.architectureDecisions?.length ? <section><h2 className="text-3xl font-bold">Key decisions</h2><ul className="mt-6 space-y-3">{project.architectureDecisions.map((decision) => <li key={decision} className="border-l-2 border-teal-500 pl-4 text-gray-700">{decision}</li>)}</ul></section> : null}{project.body?.length ? <div className="mt-10"><PortableContent value={project.body} /></div> : <div className="mt-10 rounded-xl bg-gray-50 p-6 text-gray-600">The detailed narrative and verified outcome metrics will be published from Sanity.</div>}</div>
      </div>
    </article>
  </PageTransition>;
}
