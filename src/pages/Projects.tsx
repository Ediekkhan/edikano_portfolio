import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { useCaseStudies } from '../hooks/useCaseStudies';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function Projects() {
  usePageMetadata('Case Studies', 'Evidence-led frontend case studies by Edikan Okon.');
  const { caseStudies, isLoading } = useCaseStudies();
  const categories = ['All', ...Array.from(new Set(caseStudies.map((project) => project.category).filter((category): category is string => Boolean(category))))];
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? caseStudies : caseStudies.filter((project) => project.category === activeCategory);

  return (
    <PageTransition>
      <section className="bg-gray-950 py-20 text-white"><div className="mx-auto max-w-6xl px-6"><p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-300">Evidence over decoration</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">Case studies</h1><p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-300">The problem, decisions, delivery, and verified impact behind selected frontend work.</p></div></section>
      <section className="py-20"><div className="mx-auto max-w-6xl px-6">
        {categories.length > 1 ? <div className="mb-12 flex flex-wrap gap-2" aria-label="Filter case studies">{categories.map((category) => <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} className={`focus-ring rounded-full px-5 py-2 text-sm font-medium ${activeCategory === category ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{category}</button>)}</div> : null}
        {isLoading ? <p role="status" className="mb-8 text-gray-500">Loading published case studies…</p> : null}
        <div className="grid gap-8 md:grid-cols-2">{filtered.map((project) => <ProjectCard key={project._id} project={project} />)}</div>
      </div></section>
    </PageTransition>
  );
}
