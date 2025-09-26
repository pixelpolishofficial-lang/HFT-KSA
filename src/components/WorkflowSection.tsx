'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const WorkflowSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const getStepIcon = (index: number) => {
    const icons = [
      // Discovery & Planning
      <svg key="discovery" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>,
      // Design & Prototyping
      <svg key="design" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>,
      // Development & Testing
      <svg key="development" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>,
      // Launch & Support
      <svg key="launch" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
    ];
    return icons[index] || icons[0];
  };

  const getStepColor = (index: number) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
    ];
    return colors[index] || colors[0];
  };

  return (
    <section id="workflow" ref={ref} className="section-padding bg-white dark:bg-gray-900">
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
            {t.workflow.title}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t.workflow.subtitle}
          </motion.p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-orange-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.div
            className="space-y-16 lg:space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {t.workflow.steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16`}
                variants={stepVariants}
              >
                {/* Step Content */}
                <motion.div
                  className={`flex-1 text-center lg:text-left ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r text-white mb-6 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {getStepIcon(index)}
                  </motion.div>

                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                    whileHover={{ color: '#3b82f6' }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0"
                    whileHover={{ color: '#6b7280' }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Step Number */}
                  <motion.div
                    className="mt-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-bold text-lg"
                    whileHover={{ scale: 1.1, backgroundColor: '#3b82f6', color: 'white' }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>

                {/* Step Visual */}
                <motion.div
                  className="flex-1 max-w-md mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative h-64 bg-gradient-to-br rounded-xl shadow-lg overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                    animate={{
                      background: [
                        `linear-gradient(135deg, #3b82f6, #06b6d4)`,
                        `linear-gradient(135deg, #8b5cf6, #ec4899)`,
                        `linear-gradient(135deg, #10b981, #059669)`,
                        `linear-gradient(135deg, #f97316, #dc2626)`,
                      ][index],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Animated Elements */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 bg-white/30 rounded-full"
                          animate={{
                            scale: [1, 0.8, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>

                    {/* Floating Particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/40 rounded-full"
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${30 + (i * 10)}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            Ready to start your project? Let's discuss how I can bring your vision to life with this proven workflow.
          </motion.p>
          
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
            <span>Start Your Project</span>
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

export default WorkflowSection;
