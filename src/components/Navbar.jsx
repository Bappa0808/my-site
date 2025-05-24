import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FiMoon, FiSun, FiMenu, FiX, FiEye } from 'react-icons/fi';

export const Navbar = ({ viewCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { title: 'Home', id: 'hero' },
    { title: 'Skills', id: 'skills' },
    { title: 'Projects', id: 'projects' },
    { title: 'Experience', id: 'experience' },
    { title: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 glassmorphism shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div 
            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            B
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="text-accent"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right side - Theme toggle and view counter */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <FiEye className="mr-1" /> {viewCount} views
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-tertiary"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-700" />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
            <FiEye className="mr-1" /> {viewCount}
          </div>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-gray-200 dark:bg-tertiary"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-700" />}
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-white"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism shadow-lg"
          >
            <div className="py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block nav-link py-2"
                  activeClass="text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}; 