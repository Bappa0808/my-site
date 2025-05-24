import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { ParticlesBackground } from './ParticlesBackground';
import { TypewriterText } from './TypewriterText';

export const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column - Text content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              My name is
            </motion.h2>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6"
            >
              Bappa
            </motion.h1>
            
            <motion.div 
              variants={itemVariants} 
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
            >
              I am a{" "}
              <span className="text-accent font-semibold">
                <TypewriterText 
                  texts={[
                    "Web Developer", 
                    "Graphic Designer", 
                    "UI/UX Expert"
                  ]} 
                  typingSpeed={100} 
                />
              </span>
              <p className="mt-2">with 50+ Projects</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <a 
                href="/Bappa_Bera_Resume.pdf" 
                className="btn btn-primary"
                download
              >
                <FiDownload /> Download CV
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
              >
                Hire Me <FiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-xs mx-auto lg:ml-auto -mt-8">
              {/* Orange corner background */}
              <div className="absolute top-0 right-0 w-3/4 h-full bg-accent rounded-tl-[150px] rounded-tr-[50px] rounded-bl-[250px] rounded-br-[150px] -z-10"></div>
              
              {/* Image */}
              <img 
                src="/hero.png" 
                alt="Portfolio owner" 
                className="w-full h-auto relative z-10"
              />
              
              {/* Badge */}
              <motion.div
                className="absolute bottom-10 right-10 bg-black dark:bg-black text-white text-sm px-5 py-2 rounded-full z-20"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                50+ Projects
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Skill tags */}
        <motion.div 
          className="flex flex-wrap gap-3 mt-12 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {['React', 'Graphic Design', 'Node', 'Javascript', 'Python', 'C++'].map((skill, index) => (
            <div 
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === 0 ? 'bg-orange-200 text-orange-800' : 
                index === 1 ? 'bg-accent text-white' : 
                index === 2 ? 'bg-black text-white dark:bg-white dark:text-black' : 
                index === 3 ? 'bg-yellow-200 text-yellow-800' : 
                index === 4 ? 'bg-gray-200 text-gray-800' : 
                'bg-orange-800 text-white'
              }`}
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};