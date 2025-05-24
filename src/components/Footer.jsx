import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FiGithub />,
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: <FiTwitter />,
      url: 'https://twitter.com/yourusername',
      label: 'Twitter'
    }
  ];

  return (
    <footer className="bg-white dark:bg-black-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Bappa. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <span className="text-xl">{link.icon}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 