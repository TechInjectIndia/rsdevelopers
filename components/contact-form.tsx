'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { getWhatsappHref } from '@/lib/site-data';

const fieldClass =
  'w-full border-0 border-b border-brand-black/20 bg-transparent py-3 font-body text-[15px] text-brand-black outline-none transition-colors placeholder:text-brand-black/35 focus:border-brand-red';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get('firstName') ?? '').trim();
    const lastName = String(data.get('lastName') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const enquiry = [
      'Hello RS Developers, I would like to discuss a project.',
      '',
      `Name: ${firstName} ${lastName}`.trim(),
      `Phone: ${phone}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    window.open(getWhatsappHref(enquiry), '_blank', 'noopener,noreferrer');
    setStatus('sent');
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-body text-[13px] text-brand-black/70">First name*</span>
          <input className={fieldClass} name="firstName" type="text" required autoComplete="given-name" placeholder="Enter your first name" />
        </label>
        <label className="block">
          <span className="font-body text-[13px] text-brand-black/70">Last name*</span>
          <input className={fieldClass} name="lastName" type="text" required autoComplete="family-name" placeholder="Enter your last name" />
        </label>
        <label className="block">
          <span className="font-body text-[13px] text-brand-black/70">Email address*</span>
          <input className={fieldClass} name="email" type="email" required autoComplete="email" placeholder="Enter your email address" />
        </label>
        <label className="block">
          <span className="font-body text-[13px] text-brand-black/70">Phone number*</span>
          <input className={fieldClass} name="phone" type="tel" required autoComplete="tel" placeholder="Enter your phone number" />
        </label>
        <label className="block sm:col-span-2">
          <span className="font-body text-[13px] text-brand-black/70">Message*</span>
          <textarea className={`${fieldClass} min-h-[88px] resize-none`} name="message" required rows={3} placeholder="Type message..." />
        </label>
      </div>

      <button
        type="submit"
        className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-3 border border-brand-red bg-brand-red px-6 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] text-brand-white uppercase transition-all [word-spacing:0.28em] hover:-translate-y-0.5"
      >
        Submit Now <ArrowRight className="size-4" />
      </button>
      {status === 'sent' && (
        <p className="mt-4 font-body text-[14px] text-brand-black/65">Opening WhatsApp with your enquiry.</p>
      )}
    </form>
  );
}
