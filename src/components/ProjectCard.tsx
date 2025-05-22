import { Github as GitHub, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tech, link, github, image }: ProjectProps) {
  return (
    <motion.div 
      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="mb-4">
          <ul className="flex flex-wrap gap-2 text-xs">
            {tech.map((t) => (
              <li key={t} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">{t}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-6 pb-6 mt-auto flex gap-4">
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm"
            aria-label={`GitHub repository for ${title}`}
          >
            <GitHub size={16} /> Code
          </a>
        )}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1 text-sm ml-auto"
          aria-label={`Live demo for ${title}`}
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}