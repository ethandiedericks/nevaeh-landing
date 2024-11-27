
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormError {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormError>({});

  const validateForm = (): boolean => {
    const newErrors: FormError = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success('Message sent successfully!');

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-[85rem]">
        <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Let&apos;s{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Talk
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xl text-gray-400">
          Get in touch with us for your next project
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-xl bg-gradient-to-br from-violet-600/10 to-purple-900/10 px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7f56da] ${
                errors.name ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-xl bg-gradient-to-br from-violet-600/10 to-purple-900/10 px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7f56da] ${
                errors.email ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder="example@domain.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`mt-2 block w-full rounded-xl bg-gradient-to-br from-violet-600/10 to-purple-900/10 px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7f56da] ${
                errors.message ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder="How can we help you?"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-violet-600 hover:bg-violet-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};