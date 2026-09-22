import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SiteShell } from '@/components/site-chrome';
import { contactDetails } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact | RS Developers',
  description: 'Contact RS Developers in Ludhiana by WhatsApp, phone or email for construction and turnkey projects.',
};

export default function ContactPage() {
  const message = encodeURIComponent('Hello RS Developers, I would like to discuss a project.');
  const whatsappHref = `https://wa.me/${contactDetails.whatsapp}?text=${message}`;

  return (
    <SiteShell withCta={false}>
      <section className="px-(--spacing-gutter) pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">Contact</p>
        <h1 className="max-w-[16ch] font-heading text-[clamp(2.5rem,6vw,4rem)]">
          Preferred Way To Enquire:
          <br />
          <em className="not-italic text-brand-red">WhatsApp.</em>
        </h1>
        <p className="mt-6 max-w-[560px] text-base leading-relaxed">
          Share your project type, location, approximate scale and preferred timeline. We’ll help define the clearest path from enquiry to handover.
        </p>
      </section>

      <section className="grid gap-10 border-t border-brand-black px-(--spacing-gutter) py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">Speak With Our Team</p>
          <a
            className="flex items-center justify-between gap-4 bg-brand-red px-5 py-5 font-heading text-[14px] font-semibold tracking-[0.12em] text-brand-white uppercase"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="size-5" /> Continue On WhatsApp
            </span>
            <MessageCircle className="size-5" />
          </a>
          <p className="mt-4 text-base text-brand-black/70">
            WhatsApp is the preferred first step. Calls and email are also available.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            { href: contactDetails.phoneHref, icon: Phone, label: 'Call', value: contactDetails.phone },
            { href: contactDetails.alternatePhoneHref, icon: Phone, label: 'Alternate', value: contactDetails.alternatePhone },
            { href: `mailto:${contactDetails.email}`, icon: Mail, label: 'Email', value: contactDetails.email },
          ].map((item) => (
            <a key={item.label} href={item.href} className="flex items-start gap-4 border border-brand-black/15 p-4">
              <item.icon className="mt-1 size-5 text-brand-red" />
              <span>
                <span className="block text-[13px] tracking-[0.12em] text-brand-red uppercase">{item.label}</span>
                <strong className="mt-1 block font-semibold">{item.value}</strong>
              </span>
            </a>
          ))}
          <a href={contactDetails.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-4 border border-brand-black/15 p-4">
            <MapPin className="mt-1 size-5 text-brand-red" />
            <span>
              <span className="block text-[13px] tracking-[0.12em] text-brand-red uppercase">Office</span>
              <strong className="mt-1 block font-semibold">
                {contactDetails.addressLine1}
                <br />
                {contactDetails.addressLine2}
              </strong>
            </span>
          </a>
          <a href={contactDetails.instagramUrl} target="_blank" rel="noreferrer" className="flex items-start gap-4 border border-brand-black/15 p-4">
            <span className="mt-1 grid size-5 place-items-center text-[13px] font-bold text-brand-red">IG</span>
            <span>
              <span className="block text-[13px] tracking-[0.12em] text-brand-red uppercase">Instagram</span>
              <strong className="mt-1 block font-semibold">@rs_construction_interiors</strong>
            </span>
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
