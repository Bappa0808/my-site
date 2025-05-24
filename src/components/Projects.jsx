import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { FiChevronRight } from 'react-icons/fi';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample projects data - in a real app this would come from an API or CMS
  const projects = [
    {
      id: 1,
      title: "Developer Portfolio",
      description: "Modern developer portfolio with dark mode and animations built with React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/dev.png",
      category: "web",
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/username/portfolio",
    },
    {
      id: 2,
      title: "Project Management Dashboard",
      description: "A comprehensive dashboard for project management with analytics and task tracking.",
      tags: ["React", "Node.js", "Chart.js"],
      image: "/project dashboard.mp4",
      category: "app",
      liveUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/username/dashboard",
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "A food delivery application with real-time order tracking and payment integration.",
      tags: ["React Native", "Firebase", "Stripe"],
      image: "/Food Delivery.png",
      category: "mobile",
      liveUrl: "https://example.com/food-app",
      githubUrl: "https://github.com/username/food-app",
    },
    {
      id: 4,
      title: "E-commerce Website",
      description: "Fully responsive e-commerce website with product filtering and cart functionality.",
      tags: ["Next.js", "MongoDB", "Stripe"],
      image: "/project4.jpg",
      category: "web",
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      id: 5,
      title: "Real Estate Listing",
      description: "Real estate platform with property listings, search filters, and booking system.",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "/project5.jpg",
      category: "web",
      liveUrl: "https://example.com/realestate",
      githubUrl: "https://github.com/username/realestate",
    },
    {
      id: 6,
      title: "Task Management App",
      description: "A minimalist task management application with drag and drop functionality.",
      tags: ["React", "Redux", "Firebase"],
      image: "/project6.jpg",
      category: "app",
      liveUrl: "https://example.com/taskapp",
      githubUrl: "https://github.com/username/taskapp",
    },
  ];

  // Filter categories
  const categories = ['all', 'web', 'app', 'mobile', 'design'];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Latest Projects</h2>
          <p className="section-subheading">Check out some of my recent work</p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeFilter === category
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 dark:bg-tertiary text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-black-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* View all projects button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <FiChevronRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}; 