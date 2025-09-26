'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'German' : 'English'}`}
    >
      <motion.div
        className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center text-xs font-semibold"
        animate={{
          x: language === 'en' ? 0 : 32,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {language === 'en' ? 'EN' : 'DE'}
      </motion.div>
      <div className="flex w-full justify-between px-2 text-xs font-medium text-gray-600 dark:text-gray-400">
        <span>EN</span>
        <span>DE</span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;
