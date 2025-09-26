'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const skillVariants = {
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

  const stats = [
    { number: '50+', label: t.about.stats.projects },
    { number: '30+', label: t.about.stats.clients },
    { number: '5+', label: t.about.stats.experience },
    { number: '98%', label: t.about.stats.satisfaction },
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-gray-900">
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
            {t.about.title}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t.about.description}
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {t.about.skills.items.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              variants={skillVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
              
              {/* Animated Progress Bar */}
              <motion.div
                className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-4 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.a
            href="#contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Let's Work Together</span>
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
    </section>
  );
};

export default AboutSection;
