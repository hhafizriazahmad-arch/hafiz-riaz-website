import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/ui/Button';
import { MemoryRouter } from 'react-router-dom';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events when enabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Submit</Button>);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled or loading prop is set', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole('button', { name: /disabled button/i })).toBeDisabled();
  });

  it('renders as a link when href is provided', () => {
    render(
      <MemoryRouter>
        <Button href="/portfolio">Portfolio</Button>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /portfolio/i });
    expect(link).toHaveAttribute('href', '/portfolio');
  });
});
