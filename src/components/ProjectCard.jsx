import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const ProjectCard = ({ 
  project: { title, description, tags, image, liveUrl, githubUrl },
  index 
}) => {
  const cardRef = useRef(null);
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate tilt angle based on mouse position
    const angleX = (mouseY - cardCenterY) / (rect.height / 2) * 8; // Max 8 degrees
    const angleY = (mouseX - cardCenterX) / (rect.width / 2) * 8; // Max 8 degrees

    setTiltAngle({ x: -angleX, y: angleY });
  };

  const resetTilt = () => {
    setTiltAngle({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glassmorphism-card overflow-hidden relative group cursor-default ${
        isHovered ? 'z-10' : 'z-0'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tiltAngle.x}deg) rotateY(${tiltAngle.y}deg) scale(${isHovered ? 1.03 : 1})`,
        transition: isHovered ? 'none' : 'all 0.5s ease'
      }}
    >
      {/* Project number badge */}
      <div className="absolute top-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-20">
        {(index + 1).toString().padStart(2, '0')}
      </div>
      
      {/* Project image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Project content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-black-100 text-gray-800 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center mt-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink /> Live Demo
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub /> Source Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}; 