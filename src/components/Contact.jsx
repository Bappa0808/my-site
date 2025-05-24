import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'YOUR_USER_ID'
      );
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-2xl text-accent" />,
      title: 'Email',
      value: 'bappaberas0808@gmail.com',
      link: 'mailto:bappaberas0808@gmail.com'
    },
    {
      icon: <FiPhone className="text-2xl text-accent" />,
      title: 'Phone',
      value: '+91 6296142213',
      link: 'tel:+91 6296142213'
    },
    {
      icon: <FiMapPin className="text-2xl text-accent" />,
      title: 'Location',
      value: 'Kolkata, WB, IN',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">Let's discuss your project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glassmorphism-card p-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 mb-6 last:mb-0 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-black-100 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {info.title}
                    </h3>
                    <p className="text-black dark:text-white font-medium group-hover:text-accent">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glassmorphism-card p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-2 rounded-lg bg-white dark:bg-black-100 border ${
                    errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-2 rounded-lg bg-white dark:bg-black-100 border ${
                    errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg bg-white dark:bg-black-100 border ${
                    errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  }`}
                />
                {errors.message && (
                  <span className="text-sm text-red-500">{errors.message.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FiSend className="mr-2" /> Send Message
                  </span>
                )}
              </motion.button>

              {/* Status message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-center p-3 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus === 'success'
                    ? 'Message sent successfully!'
                    : 'Failed to send message. Please try again.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 