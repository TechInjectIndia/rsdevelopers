import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { SiteShell } from '@/components/site-chrome';
import { contactDetails } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact | RS Developers',
  description: 'Contact RS Developers in Ludhiana by WhatsApp, phone or email for construction and turnkey projects.',
};

const details = [
  { href: contactDetails.phoneHref, icon: Phone, label: 'Phone', value: contactDetails.phone },
  { href: `mailto:${contactDetails.email}`, icon: Mail, label: 'Email', value: contactDetails.email },
  {
    href: contactDetails.mapsUrl,
    icon: MapPin,
    label: 'Address',
    value: `${contactDetails.addressLine1}, ${contactDetails.addressLine2}`,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <SiteShell withCta={false}>
      <section className="px-(--spacing-gutter) pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex min-h-0 flex-col gap-3">
            <figure className="relative m-0 h-[240px] overflow-hidden sm:h-[280px]">
              <Image
                src="/media/soir7-interior-1.jpg"
                alt="An RS Developers finished interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
            <div className="relative min-h-[240px] flex-1 overflow-hidden bg-[#f3f1ee] sm:min-h-[280px]">
              <iframe
                title="RS Developers office on Google Maps"
                src={contactDetails.mapsEmbedUrl}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={contactDetails.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-1/2 z-[1] inline-flex -translate-x-1/2 items-center gap-2 bg-brand-red px-5 py-3 font-heading text-[13px] font-semibold tracking-[0.14em] text-brand-white uppercase"
              >
                Get Directions <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-[clamp(2rem,4vw,2.75rem)] leading-tight text-brand-black">Get In Touch</h1>
            <p className="mt-4 max-w-[36ch] font-body text-base leading-relaxed text-brand-black/70">
              We’re here to assist you with your project. Reach out and we’ll help define the clearest path from enquiry to handover.
            </p>
            <ul className="mt-8 m-0 flex list-none flex-col gap-6 p-0">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={'external' in item && item.external ? '_blank' : undefined}
                      rel={'external' in item && item.external ? 'noreferrer' : undefined}
                      className="flex items-start gap-4 transition-colors hover:text-brand-red"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eeeeee] text-brand-red">
                        <Icon className="size-[18px]" strokeWidth={1.4} />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block font-body text-[13px] text-brand-black/55">{item.label}</span>
                        <span className="mt-1 block font-body text-[15px] leading-snug text-brand-black">{item.value}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="#enquiry"
              className="mt-8 inline-flex w-fit min-h-[52px] items-center justify-center gap-3 border border-brand-red bg-brand-red px-6 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] text-brand-white uppercase transition-all hover:-translate-y-0.5"
            >
              Send Us A Message <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="enquiry" className="px-(--spacing-gutter) pt-6 pb-20 md:pt-8 md:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="max-w-[16ch] font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] text-brand-black">
              Have A Question About A Project, Need Help With Planning, Or Just Want To Talk Build?
            </h2>
            <p className="mt-8 font-body text-[13px] text-brand-black/50">Email Directory</p>
            <a className="mt-1 inline-block border-b border-brand-black/30 pb-0.5 font-body text-[15px] text-brand-black hover:border-brand-red hover:text-brand-red" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
