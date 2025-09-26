export type Language = 'en' | 'de';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    portfolio: string;
    workflow: string;
    reviews: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaFiverr: string;
    ctaContact: string;
  };
  
  // About Section
  about: {
    title: string;
    description: string;
    skills: {
      title: string;
      items: Array<{
        name: string;
        description: string;
      }>;
    };
    stats: {
      projects: string;
      clients: string;
      experience: string;
      satisfaction: string;
    };
  };
  
  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    projects: Array<{
      title: string;
      description: string;
      category: string;
      results: string[];
    }>;
  };
  
  // Workflow Section
  workflow: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Reviews Section
  reviews: {
    title: string;
    subtitle: string;
    testimonials: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
    }>;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
    info: {
      email: string;
      fiverr: string;
      response: string;
    };
  };
  
  // Footer
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      workflow: 'Workflow',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      title: 'Transform Your Vision Into Digital Reality',
      subtitle: 'Professional Web Design & Development',
      description: 'I create stunning, responsive websites that convert visitors into customers. With years of experience and a passion for excellence, I deliver results that exceed expectations.',
      ctaFiverr: 'View My Services',
      ctaContact: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate web designer and developer with over 5 years of experience creating digital experiences that matter. I specialize in modern, responsive designs that not only look great but also drive business results.',
      skills: {
        title: 'Skills & Expertise',
        items: [
          {
            name: 'Web Design',
            description: 'Modern, user-centered designs that convert',
          },
          {
            name: 'Frontend Development',
            description: 'React, Next.js, and cutting-edge technologies',
          },
          {
            name: 'UI/UX Design',
            description: 'Intuitive interfaces that users love',
          },
          {
            name: 'E-commerce',
            description: 'Online stores that drive sales',
          },
        ],
      },
      stats: {
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        satisfaction: 'Client Satisfaction',
      },
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Recent Projects That Drive Results',
      projects: [
        {
          title: 'E-commerce Redesign',
          description: 'Complete redesign of an online store resulting in 150% increase in conversions',
          category: 'E-commerce',
          results: ['150% increase in conversions', '40% faster load times', '95% mobile optimization'],
        },
        {
          title: 'Corporate Website',
          description: 'Modern corporate website with advanced animations and seamless user experience',
          category: 'Corporate',
          results: ['300% increase in engagement', '60% longer session duration', 'Award-winning design'],
        },
        {
          title: 'SaaS Landing Page',
          description: 'High-converting landing page for a SaaS startup with 25% conversion rate',
          category: 'SaaS',
          results: ['25% conversion rate', '200% increase in signups', 'Mobile-first design'],
        },
      ],
    },
    workflow: {
      title: 'My Workflow',
      subtitle: 'How I Bring Your Vision to Life',
      steps: [
        {
          title: 'Discovery & Planning',
          description: 'We discuss your goals, target audience, and requirements to create a solid foundation.',
        },
        {
          title: 'Design & Prototyping',
          description: 'I create wireframes and visual designs that align with your brand and objectives.',
        },
        {
          title: 'Development & Testing',
          description: 'Your website is built with clean, optimized code and thoroughly tested across devices.',
        },
        {
          title: 'Launch & Support',
          description: 'I handle the launch and provide ongoing support to ensure everything runs smoothly.',
        },
      ],
    },
    reviews: {
      title: 'Client Reviews',
      subtitle: 'What My Clients Say',
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'CEO, TechStart',
          content: 'Exceptional work! The website exceeded our expectations and has significantly improved our online presence. Highly recommended!',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          role: 'Founder, E-commerce Plus',
          content: 'Professional, creative, and delivered on time. The new design has increased our sales by 150%. Amazing results!',
          rating: 5,
        },
        {
          name: 'Emma Wilson',
          role: 'Marketing Director',
          content: 'Outstanding attention to detail and great communication throughout the project. The final result is exactly what we envisioned.',
          rating: 5,
        },
      ],
    },
    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'Ready to transform your digital presence?',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! I\'ll get back to you within 24 hours.',
        error: 'Something went wrong. Please try again.',
      },
      info: {
        email: 'hello@example.com',
        fiverr: 'View My Fiverr Profile',
        response: 'I typically respond within 24 hours',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      portfolio: 'Portfolio',
      workflow: 'Arbeitsweise',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Verwandeln Sie Ihre Vision in digitale Realität',
      subtitle: 'Professionelles Webdesign & Entwicklung',
      description: 'Ich erstelle beeindruckende, responsive Websites, die Besucher in Kunden verwandeln. Mit jahrelanger Erfahrung und Leidenschaft für Exzellenz liefere ich Ergebnisse, die Erwartungen übertreffen.',
      ctaFiverr: 'Meine Services ansehen',
      ctaContact: 'Kontakt aufnehmen',
    },
    about: {
      title: 'Über mich',
      description: 'Ich bin ein leidenschaftlicher Webdesigner und Entwickler mit über 5 Jahren Erfahrung in der Erstellung digitaler Erlebnisse, die zählen. Ich spezialisiere mich auf moderne, responsive Designs, die nicht nur großartig aussehen, sondern auch Geschäftsergebnisse liefern.',
      skills: {
        title: 'Fähigkeiten & Expertise',
        items: [
          {
            name: 'Webdesign',
            description: 'Moderne, benutzerzentrierte Designs, die konvertieren',
          },
          {
            name: 'Frontend-Entwicklung',
            description: 'React, Next.js und modernste Technologien',
          },
          {
            name: 'UI/UX Design',
            description: 'Intuitive Benutzeroberflächen, die Benutzer lieben',
          },
          {
            name: 'E-Commerce',
            description: 'Online-Shops, die Verkäufe steigern',
          },
        ],
      },
      stats: {
        projects: 'Abgeschlossene Projekte',
        clients: 'Zufriedene Kunden',
        experience: 'Jahre Erfahrung',
        satisfaction: 'Kundenzufriedenheit',
      },
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Aktuelle Projekte, die Ergebnisse liefern',
      projects: [
        {
          title: 'E-Commerce Redesign',
          description: 'Komplettes Redesign eines Online-Shops mit 150% Steigerung der Konversionen',
          category: 'E-Commerce',
          results: ['150% Steigerung der Konversionen', '40% schnellere Ladezeiten', '95% mobile Optimierung'],
        },
        {
          title: 'Corporate Website',
          description: 'Moderne Unternehmenswebsite mit fortgeschrittenen Animationen und nahtloser Benutzererfahrung',
          category: 'Corporate',
          results: ['300% Steigerung des Engagements', '60% längere Sitzungsdauer', 'Preisgekröntes Design'],
        },
        {
          title: 'SaaS Landing Page',
          description: 'Hochkonvertierende Landing Page für ein SaaS-Startup mit 25% Konversionsrate',
          category: 'SaaS',
          results: ['25% Konversionsrate', '200% Steigerung der Anmeldungen', 'Mobile-first Design'],
        },
      ],
    },
    workflow: {
      title: 'Meine Arbeitsweise',
      subtitle: 'Wie ich Ihre Vision zum Leben erwecke',
      steps: [
        {
          title: 'Entdeckung & Planung',
          description: 'Wir besprechen Ihre Ziele, Zielgruppe und Anforderungen, um eine solide Grundlage zu schaffen.',
        },
        {
          title: 'Design & Prototyping',
          description: 'Ich erstelle Wireframes und visuelle Designs, die mit Ihrer Marke und Ihren Zielen übereinstimmen.',
        },
        {
          title: 'Entwicklung & Testing',
          description: 'Ihre Website wird mit sauberem, optimiertem Code erstellt und gründlich auf allen Geräten getestet.',
        },
        {
          title: 'Launch & Support',
          description: 'Ich kümmere mich um den Launch und biete laufenden Support, um sicherzustellen, dass alles reibungslos läuft.',
        },
      ],
    },
    reviews: {
      title: 'Kundenbewertungen',
      subtitle: 'Was meine Kunden sagen',
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'CEO, TechStart',
          content: 'Außergewöhnliche Arbeit! Die Website hat unsere Erwartungen übertroffen und unsere Online-Präsenz erheblich verbessert. Sehr empfehlenswert!',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          role: 'Gründer, E-commerce Plus',
          content: 'Professionell, kreativ und pünktlich geliefert. Das neue Design hat unsere Verkäufe um 150% gesteigert. Erstaunliche Ergebnisse!',
          rating: 5,
        },
        {
          name: 'Emma Wilson',
          role: 'Marketing Director',
          content: 'Hervorragende Aufmerksamkeit für Details und großartige Kommunikation während des gesamten Projekts. Das Endergebnis entspricht genau dem, was wir uns vorgestellt haben.',
          rating: 5,
        },
      ],
    },
    contact: {
      title: 'Lassen Sie uns zusammenarbeiten',
      subtitle: 'Bereit, Ihre digitale Präsenz zu transformieren?',
      form: {
        name: 'Ihr Name',
        email: 'Ihre E-Mail',
        message: 'Ihre Nachricht',
        submit: 'Nachricht senden',
        success: 'Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen.',
        error: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
      },
      info: {
        email: 'hello@example.com',
        fiverr: 'Mein Fiverr-Profil ansehen',
        response: 'Ich antworte normalerweise innerhalb von 24 Stunden',
      },
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
    },
  },
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
};
