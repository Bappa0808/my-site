import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const tabVariants = {
    active: {
      color: '#ff4500',
      borderColor: '#ff4500',
      transition: { duration: 0.3 }
    },
    inactive: {
      color: '',
      borderColor: 'transparent',
      transition: { duration: 0.3 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  const technicalSkills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'TypeScript', level: 75 },
    { name: 'GraphQL', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'MongoDB', level: 75 },
    { name: 'Docker', level: 60 },
  ];

  const designSkills = [
    { name: 'Figma', level: 90 },
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 85 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Motion Design', level: 80 },
    { name: 'Typography', level: 85 },
    { name: 'Color Theory', level: 95 },
  ];

  const softSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Time Management', level: 85 },
    { name: 'Leadership', level: 80 },
    { name: 'Adaptability', level: 95 },
  ];

  const activeSkills = 
    activeTab === 'technical' ? technicalSkills :
    activeTab === 'design' ? designSkills :
    softSkills;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-tertiary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">My Skills</h2>
          <p className="section-subheading">Expertise that drives success</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 border-b border-gray-200 dark:border-gray-700">
          {['technical', 'design', 'soft'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-lg capitalize transition-colors relative`}
              variants={tabVariants}
              animate={activeTab === tab ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab} Skills
              {activeTab === tab && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent" 
                  layoutId="underline"
                  initial={false}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Skills Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left column: Progress bars */}
          <motion.div variants={itemVariants} className="space-y-6">
            {activeSkills.slice(0, Math.ceil(activeSkills.length / 2)).map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-black dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    custom={skill.level}
                    variants={progressVariants}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right column: Progress bars */}
          <motion.div variants={itemVariants} className="space-y-6">
            {activeSkills.slice(Math.ceil(activeSkills.length / 2)).map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-black dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    custom={skill.level}
                    variants={progressVariants}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">Looking for a skilled developer for your next project?</p>
          <motion.a 
            href="#contact"
            className="btn btn-primary inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};