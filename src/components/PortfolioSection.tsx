'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'e-commerce':
        return 'from-green-500 to-emerald-600';
      case 'corporate':
        return 'from-blue-500 to-cyan-600';
      case 'saas':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="portfolio" ref={ref} className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            {t.portfolio.title}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t.portfolio.subtitle}
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {t.portfolio.projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              variants={projectVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedProject(index)}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-20"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                  animate={{
                    background: [
                      `linear-gradient(135deg, #3b82f6, #8b5cf6)`,
                      `linear-gradient(135deg, #8b5cf6, #ec4899)`,
                      `linear-gradient(135deg, #ec4899, #3b82f6)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Category Badge */}
                <motion.div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(project.category)}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {project.category}
                </motion.div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.div
                    className="text-white text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <p className="text-sm font-medium">View Details</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="space-y-2">
                  {project.results.slice(0, 2).map((result, resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.1 + resultIndex * 0.1 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: resultIndex * 0.5 }}
                      />
                      <span>{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-xl transition-colors duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More Projects</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject !== null && (
                <>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {t.portfolio.projects[selectedProject].title}
                      </h3>
                      <motion.button
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        onClick={() => setSelectedProject(null)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {t.portfolio.projects[selectedProject].description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Results:</h4>
                      {t.portfolio.projects[selectedProject].results.map((result, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div
                            className="w-3 h-3 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          />
                          <span className="text-gray-700 dark:text-gray-300">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
