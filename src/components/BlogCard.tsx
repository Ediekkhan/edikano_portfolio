import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  tags?: string[];
}

export default function BlogCard({ title, excerpt, date, readTime, image, slug, tags = [] }: BlogPostProps) {
  return (
    <motion.article 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <a href={`/blog/${slug}`} className="block relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </a>
      
      <div className="p-6 flex-grow">
        {tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-teal-50 text-teal-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <a href={`/blog/${slug}`} className="block">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-teal-600 transition-colors">
            {title}
          </h3>
        </a>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center text-sm text-gray-500 mt-auto">
          <time dateTime={date}>{date}</time>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
}