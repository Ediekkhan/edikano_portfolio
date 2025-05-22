import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

// Project categories
const categories = ['All', 'Frontend', 'UI/UX', 'Web App', 'Other'];

// Projects data
const projects = [
  {
    title: 'AfricInnovate Dashboard',
    description: 'Implemented responsive dashboard UI and state management using React, Context API, and Redux.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    link: 'https://www.africinnovate.com',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Frontend'
  },
  {
    title: 'Law Firm UI',
    description: 'Built modular UI components and improved performance by 30% using lazy loading and code splitting.',
    tech: ['React', 'SASS', 'React Router'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX'
  },
  {
    title: 'FootballTelegram Blog',
    description: 'Developed and managed blog layout with WordPress and custom CSS for weekly updates.',
    tech: ['WordPress', 'CSS'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/4974917/pexels-photo-4974917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Frontend'
  },
  {
    title: 'E-commerce Platform',
    description: 'Created a full-featured e-commerce platform with product listings, cart, checkout, and payment integration.',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web App'
  },
  {
    title: 'Restaurant Booking System',
    description: 'Designed and implemented a restaurant reservation system with table management and customer notifications.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web App'
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Built a finance tracking application with expense categorization, budgeting, and visualization features.',
    tech: ['Vue.js', 'Firebase', 'Chart.js'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web App'
  },
  {
    title: 'Travel Blog UI Kit',
    description: 'Designed a comprehensive UI kit for travel bloggers with customizable components and layouts.',
    tech: ['Figma', 'Illustrator', 'HTML/CSS'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX'
  },
  {
    title: 'Mobile Weather App',
    description: 'Developed a weather application with location-based forecasts, animated visualizations, and alerts.',
    tech: ['React Native', 'API Integration', 'Geolocation'],
    link: '#',
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Other'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explore my portfolio of frontend and UI/UX projects, showcasing my skills, 
              creativity, and problem-solving approach.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Gallery */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            title="My Project Process" 
            subtitle="How I approach development projects from start to finish"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
              <p className="text-gray-600">
                I start by understanding your requirements, target audience, and project goals. This helps me create 
                a detailed roadmap and technical strategy for the project.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Prototyping</h3>
              <p className="text-gray-600">
                Creating wireframes and interactive prototypes to visualize the user interface and experience. 
                This allows for early feedback and iterations before moving to development.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Development & Testing</h3>
              <p className="text-gray-600">
                Writing clean, maintainable code while following best practices. Regular testing ensures quality, 
                performance, and cross-browser compatibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can help turn your idea into reality.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 focus:ring-teal-400"
            >
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

// Import Button component
import Button from '../components/Button';