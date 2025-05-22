import { Github as GitHub, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold text-teal-400">Edikan.dev</p>
            <p className="text-sm text-gray-400 mt-1">Frontend Developer & UI/UX Enthusiast</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Ediekkhan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/edikan-okon/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/Ediekkhan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Edikan Okon. All rights reserved.</p>
          <div className="mt-2 md:mt-0 text-sm text-gray-400 flex flex-col md:flex-row md:space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors mt-1 md:mt-0">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}