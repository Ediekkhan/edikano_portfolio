import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';

// Blog posts data
const blogPosts = [
  {
    title: 'How to Build Accessible React Components',
    excerpt: 'Learn the best practices for creating accessible React components that everyone can use, regardless of abilities.',
    date: 'June 15, 2023',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'how-to-build-accessible-react-components',
    tags: ['React', 'Accessibility', 'Frontend']
  },
  {
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'Explore powerful CSS techniques like Grid, Flexbox, CSS Variables, and more that will level up your styling skills.',
    date: 'May 22, 2023',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'modern-css-techniques',
    tags: ['CSS', 'Web Design', 'Frontend']
  },
  {
    title: 'Optimizing React Performance: A Deep Dive',
    excerpt: 'Learn advanced techniques to optimize your React applications for better performance and user experience.',
    date: 'April 10, 2023',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/11035351/pexels-photo-11035351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'optimizing-react-performance',
    tags: ['React', 'Performance', 'JavaScript']
  },
  {
    title: 'Getting Started with TypeScript in React Projects',
    excerpt: 'A beginner-friendly guide to integrating TypeScript into your React projects for better type safety and developer experience.',
    date: 'March 5, 2023',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'typescript-in-react-projects',
    tags: ['TypeScript', 'React', 'JavaScript']
  },
  {
    title: 'Building a Design System from Scratch',
    excerpt: 'Learn how to create a comprehensive design system that improves consistency and speeds up development.',
    date: 'February 18, 2023',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'building-design-system',
    tags: ['Design Systems', 'UI/UX', 'Frontend']
  },
  {
    title: 'State Management in React: Context API vs. Redux',
    excerpt: 'A comparison of different state management approaches in React and when to use each one for your projects.',
    date: 'January 30, 2023',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'react-state-management',
    tags: ['React', 'Redux', 'State Management']
  }
];

// Extract all unique tags
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags || [])));

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Articles</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Thoughts, tips, and insights on web development, design, and the tech industry.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Search and filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 focus:outline-none"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Tags filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === null
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    tag === selectedTag
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          <div> COMING SOON!!</div>
          {/* Blog posts grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div> */}
          
          {/* Empty state */}
          {/* {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                }}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )} */}
        </div>
      </section>
      
      {/* Newsletter Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading 
            title="Subscribe to my newsletter" 
            subtitle="Get notified when I publish new content, tips, and resources."
            align="center"
          />
          
          <motion.div 
            className="mt-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3 text-center">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section> */}
    </PageTransition>
  );
}