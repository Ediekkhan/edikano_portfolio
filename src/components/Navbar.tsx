import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          Edikan.dev
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? 'text-teal-300 border-b-2 border-teal-300 pb-1' : 'hover:text-teal-300 transition-colors'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? 'text-teal-300 border-b-2 border-teal-300 pb-1' : 'hover:text-teal-300 transition-colors'}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            isActive ? 'text-teal-300 border-b-2 border-teal-300 pb-1' : 'hover:text-teal-300 transition-colors'}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => 
            isActive ? 'text-teal-300 border-b-2 border-teal-300 pb-1' : 'hover:text-teal-300 transition-colors'}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? 'text-teal-300 border-b-2 border-teal-300 pb-1' : 'hover:text-teal-300 transition-colors'}>
            Contact
          </NavLink>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 border-t border-gray-800 shadow-lg py-4 px-6 flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'text-teal-300' : 'hover:text-teal-300 transition-colors'}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'text-teal-300' : 'hover:text-teal-300 transition-colors'}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? 'text-teal-300' : 'hover:text-teal-300 transition-colors'}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => isActive ? 'text-teal-300' : 'hover:text-teal-300 transition-colors'}
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'text-teal-300' : 'hover:text-teal-300 transition-colors'}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}