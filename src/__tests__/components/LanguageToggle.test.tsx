import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageToggle from '@/components/LanguageToggle';
import { LanguageProvider } from '@/contexts/LanguageContext';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  );
};

describe('LanguageToggle', () => {
  it('renders language toggle button', () => {
    renderWithProvider(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button', { name: /switch to german/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('shows current language', () => {
    renderWithProvider(<LanguageToggle />);
    
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('toggles language on click', () => {
    renderWithProvider(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(screen.getByText('DE')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithProvider(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveAttribute('aria-label');
  });
});
