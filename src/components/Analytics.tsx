'use client';

import { useEffect } from 'react';
import { usePlausible } from 'plausible-tracker';

const Analytics: React.FC = () => {
  const { trackEvent } = usePlausible();

  useEffect(() => {
    // Track page view
    trackEvent('Page View', {
      props: {
        page: window.location.pathname,
      },
    });

    // Track language preference
    const language = localStorage.getItem('language') || 'en';
    trackEvent('Language Preference', {
      props: {
        language,
      },
    });
  }, [trackEvent]);

  // Track custom events
  const trackContactForm = () => {
    trackEvent('Contact Form Submit');
  };

  const trackFiverrClick = () => {
    trackEvent('Fiverr Link Click');
  };

  const trackPortfolioView = (projectName: string) => {
    trackEvent('Portfolio Project View', {
      props: {
        project: projectName,
      },
    });
  };

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    (window as any).trackContactForm = trackContactForm;
    (window as any).trackFiverrClick = trackFiverrClick;
    (window as any).trackPortfolioView = trackPortfolioView;
  }, []);

  return null;
};

export default Analytics;
