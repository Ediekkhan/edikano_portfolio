import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hasSanityImageAsset, urlFor } from '../lib/sanity';
import type { CaseStudy } from '../types/content';

interface ProjectCardProps { project: CaseStudy; featured?: boolean }

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const imageUrl = hasSanityImageAsset(project.heroImage)
    ? urlFor(project.heroImage)?.width(featured ? 1200 : 800).height(600).fit('crop').auto('format').url()
    : null;

  return (
    <motion.article
      className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ${featured ? 'lg:grid lg:grid-cols-2' : 'flex h-full flex-col'}`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={`relative overflow-hidden bg-gray-900 ${featured ? 'min-h-72' : 'h-52'}`}>
        {imageUrl ? (
          <img src={imageUrl} alt={project.heroImage?.alt || `${project.title} product interface`} width={featured ? 1200 : 800} height={600} loading={featured ? 'eager' : 'lazy'} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        ) : (
          <div className="absolute inset-0 flex items-end bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.3),_transparent_45%),linear-gradient(135deg,#111827,#1f2937)] p-7 text-white">
            <div><span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Product case study</span><p className="mt-3 text-2xl font-semibold">{project.title}</p><p className="mt-1 text-sm text-gray-300">Screenshot coming from Sanity</p></div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wider text-teal-700">
          {project.client ? <span>{project.client}</span> : null}{project.client && project.role ? <span aria-hidden="true">/</span> : null}{project.role ? <span>{project.role}</span> : null}
        </div>
        <h3 className={`${featured ? 'text-3xl' : 'text-2xl'} font-bold text-gray-950`}>{project.title}</h3>
        <p className="mt-3 leading-relaxed text-gray-600">{project.problem}</p>
        {project.metrics?.length ? (
          <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-gray-100 py-5">
            {project.metrics.slice(0, 2).map((metric) => <div key={metric._key || `${metric.label}-${metric.value}`}><dt className="text-xs uppercase tracking-wider text-gray-500">{metric.label}</dt><dd className="mt-1 font-semibold text-gray-950">{metric.value}</dd></div>)}
          </dl>
        ) : null}
        {project.tech?.length ? <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">{project.tech.map((technology) => <li key={technology} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{technology}</li>)}</ul> : null}
        <div className="mt-auto flex flex-wrap items-center gap-5 pt-6 text-sm font-medium">
          <Link className="focus-ring inline-flex items-center gap-2 rounded text-teal-700 hover:text-teal-900" to={`/projects/${project.slug}`}>Read case study <ArrowRight size={16} /></Link>
          {project.liveUrl ? <a className="focus-ring ml-auto inline-flex items-center gap-1 rounded text-gray-600 hover:text-gray-950" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live site</a> : null}
        </div>
      </div>
    </motion.article>
  );
}
