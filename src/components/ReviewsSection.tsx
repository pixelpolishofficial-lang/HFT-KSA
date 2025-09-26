'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % t.reviews.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, t.reviews.testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <motion.svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ));
  };

  const getAvatarColor = (index: number) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="reviews" ref={ref} className="section-padding gradient-bg">
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
            {t.reviews.title}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t.reviews.subtitle}
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl"
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Quote Icon */}
                <motion.div
                  className="text-6xl text-blue-500/20 mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  "
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {t.reviews.testimonials[currentTestimonial].content}
                </motion.blockquote>

                {/* Author Info */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${getAvatarColor(currentTestimonial)} flex items-center justify-center text-white font-bold text-xl`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {t.reviews.testimonials[currentTestimonial].name.charAt(0)}
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t.reviews.testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t.reviews.testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {renderStars(t.reviews.testimonials[currentTestimonial].rating)}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {t.reviews.testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {t.reviews.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-blue-500' : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setCurrentTestimonial(index)}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {testimonial.content.length > 120
                  ? `${testimonial.content.substring(0, 120)}...`
                  : testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <motion.div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${getAvatarColor(index)} flex items-center justify-center text-white font-semibold text-sm`}
                  whileHover={{ scale: 1.1 }}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fiverr Integration */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            whileHover={{ scale: 1.02 }}
          >
            See more reviews and book my services on Fiverr
          </motion.p>
          
          <motion.a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View on Fiverr</span>
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

export default ReviewsSection;
