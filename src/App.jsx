import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Simulate view counter increment
    // In a real app, this would be connected to a backend service
    const storedViews = localStorage.getItem('portfolioViews') || 0;
    const newViewCount = parseInt(storedViews) + 1;
    localStorage.setItem('portfolioViews', newViewCount);
    setViewCount(newViewCount);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative z-0">
        <Navbar viewCount={viewCount} />
        <AnimatePresence>
          <div>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App; 