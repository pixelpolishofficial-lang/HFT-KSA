import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import Analytics from '@/components/Analytics';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Web Design & Development | Portfolio',
  description: 'Transform your vision into digital reality with professional web design and development services. Modern, responsive websites that convert visitors into customers.',
  keywords: 'web design, web development, responsive design, UI/UX, portfolio, freelancer',
  authors: [{ name: 'Portfolio' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Professional Web Design & Development | Portfolio',
    description: 'Transform your vision into digital reality with professional web design and development services.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design & Development | Portfolio',
    description: 'Transform your vision into digital reality with professional web design and development services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <LanguageProvider>
          <SkipLink />
          <PerformanceOptimizer />
          <Analytics />
          <Header />
          <main id="main-content" className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
