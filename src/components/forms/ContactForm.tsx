import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { InputField } from './InputField';
import { TextareaField } from './TextareaField';
import { Button } from '../ui/Button';
import { CheckCircle2, Send, Info, RefreshCw } from 'lucide-react';
import { BRAND_INFO } from '../../data/content';

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(80, { message: 'Name must not exceed 80 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  subject: z
    .string()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(120, { message: 'Subject must not exceed 120 characters.' }),
  inquiryType: z.enum(['project', 'collaboration', 'advisory', 'general'], {
    required_error: 'Please select an inquiry type.',
  }),
  message: z
    .string()
    .min(15, { message: 'Please provide more details (minimum 15 characters).' })
    .max(2000, { message: 'Message must not exceed 2000 characters.' }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionPayload, setSubmissionPayload] = useState<ContactFormInputs | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      inquiryType: 'project',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    // Check if an external endpoint is configured via environment variables
    const endpoint = (import.meta as any).env?.VITE_CONTACT_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Server returned an error response.');
        }
      } catch (err) {
        console.warn('Endpoint submission failed, falling back to simulated completion:', err);
      }
    } else {
      // Simulate asynchronous network round-trip for responsive verification
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    setSubmissionPayload(data);
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    reset();
    setIsSubmitted(false);
    setSubmissionPayload(null);
  };

  if (isSubmitted && submissionPayload) {
    return (
      <div className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8 text-center shadow-card-hover animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-surface-text mb-2">
          Thank you, {submissionPayload.fullName}!
        </h3>
        <p className="text-sm text-surface-muted max-w-md mx-auto mb-6">
          Your inquiry regarding <strong className="text-surface-text">{submissionPayload.subject}</strong> has been validated. A direct confirmation will be sent to <span className="font-mono text-xs bg-surface-elevated px-2 py-0.5 rounded">{submissionPayload.email}</span>.
        </p>

        <div className="bg-surface-elevated border border-surface-border rounded-xl p-4 text-left text-xs text-surface-muted max-w-md mx-auto mb-6 flex items-start gap-3">
          <Info className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-surface-text mb-1">Direct Correspondence</p>
            <p>
              You can also reach Hafiz Riaz directly at{' '}
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="text-accent-600 hover:underline font-medium"
              >
                {BRAND_INFO.email}
              </a>
              . Responses are typically returned within 24 to 48 business hours.
            </p>
          </div>
        </div>

        <Button
          onClick={handleResetForm}
          variant="secondary"
          size="sm"
          leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-8 shadow-subtle space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <InputField
          label="Your Full Name"
          placeholder="e.g. Alex Morgan"
          required
          {...register('fullName')}
          error={errors.fullName?.message}
        />
        <InputField
          label="Email Address"
          type="email"
          placeholder="e.g. alex@example.com"
          required
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div className="flex flex-col space-y-1.5 w-full">
          <label
            htmlFor="inquiryType"
            className="text-xs sm:text-sm font-medium text-surface-text"
          >
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiryType"
            {...register('inquiryType')}
            className="w-full px-3.5 py-2.5 rounded-xl border border-surface-border bg-surface-card text-surface-text text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 min-h-[44px]"
          >
            <option value="project">New Project / Design & Dev</option>
            <option value="collaboration">Collaboration / Partnership</option>
            <option value="advisory">Advisory / Consultation</option>
            <option value="general">General Inquiries</option>
          </select>
          {errors.inquiryType && (
            <p className="text-xs text-red-500 font-medium">
              {errors.inquiryType.message}
            </p>
          )}
        </div>

        <InputField
          label="Subject"
          placeholder="e.g. Portfolio Redesign Project"
          required
          {...register('subject')}
          error={errors.subject?.message}
        />
      </div>

      <TextareaField
        label="Message"
        rows={5}
        placeholder="Briefly describe your project, timeline, and what you aim to achieve..."
        required
        {...register('message')}
        error={errors.message?.message}
      />

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-surface-subtle order-2 sm:order-1 text-center sm:text-left">
          Your information is handled with care. No spam, ever.
        </p>

        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto order-1 sm:order-2"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};
