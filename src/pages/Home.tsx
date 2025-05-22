import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, Terminal, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import profilepng from "../asset/WhatsApp Image 2025-05-18 at 17.16.31.jpeg"


// Sample featured projects
const featuredProjects = [
  {
    title: 'AfricInnovate Dashboard',
    description: 'Implemented responsive dashboard UI and state management using React, Context API, and Redux.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    link: 'https://www.africinnovate.com/',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Law Firm UI',
    description: 'Built modular UI components and improved performance by 30% using lazy loading and code splitting.',
    tech: ['React', 'SASS', 'React Router'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Frontend Developer <span className="text-teal-400">&</span> UI Designer
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's turn your vision into reality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button to="/projects" variant="primary" size="lg">
                    View My Work
                  </Button>
                  <Button to="/contact" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                    Contact Me
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="md:col-span-5 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400 shadow-xl">
                  <img 
                    src={profilepng}
                    alt="Edikan Okon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 py-2 px-4 rounded-lg shadow-lg font-medium">
                  <span className="text-teal-600">+ years</span> experience
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I specialize in creating responsive, user-friendly interfaces with clean, efficient code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Creating intuitive and engaging user interfaces with a focus on user experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">
                Building responsive, fast and accessible websites using modern web technologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
              <p className="text-gray-600">
                Developing interactive web applications with modern JavaScript frameworks.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-gray-600">
                Improving website speed and performance for better user experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
              <p className="text-gray-600">
                Some of my recent work that I'm proud of.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="text-teal-600 hover:text-teal-700 font-medium flex items-center group"
            >
              View All Projects
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate to create something amazing together.
          </p>
          <Button 
            to="/contact" 
            variant="primary" 
            size="lg" 
            className="bg-teal-500 hover:bg-teal-600 focus:ring-teal-400"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}