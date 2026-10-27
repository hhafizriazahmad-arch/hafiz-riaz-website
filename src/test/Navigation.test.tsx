import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { Navbar } from '../components/layout/Navbar';
import { ThemeProvider } from '../context/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar Component', () => {
  it('renders brand name and primary navigation links', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>
    );

    // Official brand name
    expect(screen.getByText('Hafiz Riaz')).toBeInTheDocument();

    const nav = screen.getByRole('navigation', { name: /primary navigation/i });

    // Primary nav items within the navigation landmark
    expect(within(nav).getByRole('link', { name: /^home$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('link', { name: /^about$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('link', { name: /^portfolio$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('link', { name: /^services$/i })).toBeInTheDocument();
    expect(within(nav).getByRole('link', { name: /^contact$/i })).toBeInTheDocument();
  });

  it('renders theme toggle with accessible label', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const themeToggle = screen.getByRole('button', { name: /switch to/i });
    expect(themeToggle).toBeInTheDocument();
  });
});
