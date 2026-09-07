import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white text-gray-900">
        <a href="#main-content" className="focus-ring sr-only z-[100] rounded bg-white px-4 py-3 text-gray-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-24" role="status">Loading page…</div>}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<CaseStudyDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
