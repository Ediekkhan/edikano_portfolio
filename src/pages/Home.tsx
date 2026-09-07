import { ArrowRight, Code2, Gauge, Layers3, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { useCaseStudies } from '../hooks/useCaseStudies';
import { usePageMetadata } from '../hooks/usePageMetadata';

const experience = [
  { period: '2025—2026', role: 'Frontend Engineer', company: 'PK5 Holdings' },
  { period: '2024—2025', role: 'Software Engineer', company: 'Alozinotechno.com Ltd' },
  { period: '2022—2023', role: 'Front-end Web Developer', company: 'AfricInnovate' },
  { period: '2019—2021', role: 'Web Content Manager', company: 'FootballTelegram' },
];

const capabilities = [
  { icon: Code2, title: 'React engineering', text: 'Typed, reusable interfaces built for maintainability and real product change.' },
  { icon: Gauge, title: 'Accessible performance', text: 'Fast experiences with semantic markup, keyboard support, and measurable performance.' },
  { icon: Layers3, title: 'Design systems', text: 'Consistent components and visual rules that help products and teams scale.' },
  { icon: Sparkles, title: 'UI implementation', text: 'Thoughtful interaction details that preserve design intent across screen sizes.' },
];

export default function Home() {
  usePageMetadata('Frontend Developer', 'Edikan Okon builds fast, accessible React products for startups and growing teams.');
  const { caseStudies, isLoading } = useCaseStudies();
  const reduceMotion = useReducedMotion();
  const [flagship, ...supporting] = caseStudies;

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(20,184,166,0.2),transparent_30%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <motion.div className="max-w-5xl" initial={reduceMotion ? undefined : { opacity: 0, y: 20 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}>
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.24em] text-teal-300">Frontend engineer · UI craft</p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">I’m Edikan Okon, a frontend developer building fast, accessible React products for startups and growing teams.</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">Based in Enugu, Nigeria <span aria-hidden="true">·</span> Available for remote frontend roles and selected freelance projects.</p>
            <div className="mt-10 flex flex-wrap gap-4"><Button to="/projects" size="lg">Explore case studies</Button><Button to="/contact" variant="outline" size="lg" className="border-gray-600 text-white hover:bg-white/10">Start a conversation</Button></div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="flagship-heading"><div className="mx-auto max-w-6xl px-6"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow">Selected work · 01</p><h2 id="flagship-heading" className="mt-3 text-3xl font-bold md:text-4xl">Flagship case study</h2></div>{isLoading ? <span className="text-sm text-gray-500" role="status">Checking for new work…</span> : null}</div>{flagship ? <ProjectCard project={flagship} featured /> : null}</div></section>

      <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="supporting-heading"><div className="mx-auto max-w-6xl px-6"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow">Selected work · 02—03</p><h2 id="supporting-heading" className="mt-3 text-3xl font-bold md:text-4xl">Supporting case studies</h2></div><Link to="/projects" className="focus-ring hidden items-center gap-2 rounded text-sm font-medium text-teal-700 sm:flex">All work <ArrowRight size={16} /></Link></div><div className="grid gap-8 md:grid-cols-2">{supporting.slice(0, 2).map((project) => <ProjectCard key={project._id} project={project} />)}{supporting.length === 0 ? <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-gray-600 md:col-span-2">More verified case studies will appear here as they are published in Sanity.</div> : null}</div></div></section>

      <section className="py-20 md:py-28" aria-labelledby="experience-heading"><div className="mx-auto max-w-6xl px-6"><p className="eyebrow">Experience</p><h2 id="experience-heading" className="mt-3 text-3xl font-bold md:text-4xl">A track record across product and content</h2><ol className="mt-12 border-t border-gray-200">{experience.map((item) => <li key={`${item.period}-${item.company}`} className="grid gap-2 border-b border-gray-200 py-6 sm:grid-cols-[10rem_1fr_1fr] sm:items-baseline"><span className="font-mono text-sm text-teal-700">{item.period}</span><strong className="text-lg">{item.role}</strong><span className="text-gray-600">{item.company}</span></li>)}</ol></div></section>

      <section className="bg-gray-950 py-20 text-white md:py-28" aria-labelledby="capabilities-heading"><div className="mx-auto max-w-6xl px-6"><p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-300">Core capabilities</p><h2 id="capabilities-heading" className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Design judgment backed by frontend engineering.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-gray-700 md:grid-cols-2 lg:grid-cols-4">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="bg-gray-900 p-7"><Icon className="text-teal-300" aria-hidden="true" /><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-gray-400">{text}</p></article>)}</div></div></section>

      <section className="bg-teal-500 py-20 text-gray-950"><div className="mx-auto max-w-4xl px-6 text-center"><p className="font-mono text-sm font-semibold uppercase tracking-[0.2em]">Have a useful problem to solve?</p><h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Let’s build something clear, fast, and dependable.</h2><Button to="/contact" variant="secondary" size="lg" className="mt-8">Get in touch</Button></div></section>
    </PageTransition>
  );
}
