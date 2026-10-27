import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../components/forms/ContactForm';

describe('ContactForm Component', () => {
  it('renders all form input fields and submit button', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/your full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/inquiry type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('displays validation errors when submitting empty form', async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/subject must be at least 3 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/please provide more details/i)).toBeInTheDocument();
    });
  });

  it('submits successfully when fields contain valid inputs', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/your full name/i), {
      target: { value: 'Sarah Connor' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'sarah@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: 'Design System Inquiry' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'We are seeking an experienced designer to build an accessible component system.' },
    });

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(
      () => {
        expect(screen.getByText(/thank you, Sarah Connor!/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
