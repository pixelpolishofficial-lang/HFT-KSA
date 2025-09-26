import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import { LanguageProvider } from '@/contexts/LanguageContext';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  );
};

describe('Header', () => {
  it('renders header with navigation', () => {
    renderWithProvider(<Header />);
    
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Workflow')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders language toggle', () => {
    renderWithProvider(<Header />);
    
    const languageToggle = screen.getByRole('button', { name: /switch to/i });
    expect(languageToggle).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    renderWithProvider(<Header />);
    
    const mobileMenuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it('has proper navigation structure', () => {
    renderWithProvider(<Header />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
