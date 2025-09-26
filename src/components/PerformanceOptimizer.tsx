'use client';

import { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        // Add critical image paths here
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Optimize animations for performance
    const optimizeAnimations = () => {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-delay', '0ms');
      }

      // Use transform3d for hardware acceleration
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach((element) => {
        (element as HTMLElement).style.transform = 'translate3d(0, 0, 0)';
      });
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;

      const updateScrollPosition = () => {
        // Throttle scroll events
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-dependent elements
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', updateScrollPosition, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', updateScrollPosition);
      };
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeAnimations();
    const cleanupScroll = optimizeScroll();

    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
