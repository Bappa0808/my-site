import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceItem = ({ experience, index }) => {
  const itemRef = useRef(null);
  
  return (
    <motion.div 
      ref={itemRef}
      className={`flex gap-4 md:gap-6 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        <div 
          className={`w-4 h-4 rounded-full bg-accent z-10 border-4 border-white dark:border-primary shadow-lg`}
        />
        <div className="w-0.5 bg-gray-200 dark:bg-gray-700 h-full absolute top-4" />
      </div>
      
      {/* Content */}
      <motion.div 
        className={`glassmorphism-card p-6 flex-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
      >
        <div className="flex justify-between flex-wrap gap-2 mb-2">
          <h3 className="font-bold text-lg text-black dark:text-white">{experience.role}</h3>
          <span className="text-accent flex items-center gap-1 text-sm">
            <FiCalendar /> {experience.period}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-300 text-sm">
          <FiBriefcase /> 
          <span className="font-medium">{experience.company}</span>
          <span className="flex items-center gap-1 ml-4">
            <FiMapPin className="text-xs" /> {experience.location}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-black-100 text-gray-800 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"] 
  });
  
  // Sample experience data - in a real app this would come from an API or CMS
  const experiences = [
    
    {
      "id": 1,
      "role": "Freelance Full-Stack Developer & Technical Copywriter",
      "company": "Self-Employed / Client Projects",
      "location": "Remote",
      "period": "2024 - Present",
      "description": "Design and develop responsive, user-friendly web applications using modern frontend technologies (React, JavaScript, SCSS) and backend solutions (Spring Boot). Collaborate with clients to transform requirements into functional applications while ensuring clean, maintainable code. Additionally, craft engaging email copy and technical content to enhance user engagement and communication strategies.",
      "technologies": [
        "HTML5", 
        "CSS3", 
        "JavaScript", 
        "React", 
        "SCSS", 
        "Spring Boot", 
        "Responsive Design", 
        "Email Copywriting",
        "Agile Development"
      ]
    },
    {
      "id": 2,
      "role": "Software Development Intern",
      "company": "Persistent",
      "location": "Remote",
      "period": "2023 - 2024",
      "description": "Gained hands-on experience in software development fundamentals including Java programming (from basic to advanced concepts), data structures, and database management systems. Assisted in developing and maintaining applications using Spring Boot framework. Participated in database design and implementation with MySQL, optimizing queries for better performance. Collaborated with team members on various stages of the software development lifecycle.",
      "technologies": ["Java", "MySQL", "Data Structures", "Spring Boot", "Database Design"]
    },
    {
      "id": 3,
      "role": "AWS Cloud Computing Intern",
      "company": "AWS Cloud Foundation & Architecting Virtual Internship – Edu-skills",
      "location": "Remote",
      "period": "2023",
      "description": "Completed intensive AWS training, gaining practical experience in core cloud services including EC2, S3, IAM, and VPC. Designed and deployed scalable cloud infrastructure following AWS Well-Architected Framework principles. Automated resource provisioning using AWS CLI and explored cost-optimization strategies. Developed troubleshooting skills for cloud environments and documented architectural decisions for future reference.",
      "technologies": [
        "AWS EC2",
        "AWS S3",
        "IAM",
        "VPC",
        "AWS CLI",
        "Cloud Security",
        "Cost Optimization",
        "Infrastructure as Code (Basic)"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-tertiary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading">My professional journey</p>
        </motion.div>

        {/* Progress line */}
        <motion.div 
          className="fixed left-0 top-0 bottom-0 w-1 bg-accent origin-top"
          style={{ scaleY: scrollYProgress, opacity: 0.5 }}
        />

        {/* Timeline */}
        <div className="space-y-12 md:space-y-24 mt-12 relative">
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={experience.id}
              experience={experience}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 