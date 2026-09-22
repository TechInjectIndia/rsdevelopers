import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { InnerShell } from '@/components/inner-shell';
import { contactDetails, processSteps } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About RS Developers | Rahul Bhardwaj',
  description: 'Learn about RS Developers, founder Rahul Bhardwaj, and how we deliver construction and turnkey projects across Punjab and Himachal Pradesh.',
};

export default function AboutPage() {
  return (
    <InnerShell>
      <section className="px-(--spacing-gutter) pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">RS Developers · Ludhiana</p>
        <h1 className="max-w-[18ch] font-heading text-[clamp(2.5rem,6vw,4rem)]">
          Your Vision.
          <br />
          <em className="not-italic text-brand-red">Our Construction.</em>
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed">
          We are a construction and interiors practice focused on residential, commercial, industrial, interior and turnkey projects—with one team accountable from first enquiry to handover.
        </p>
      </section>

      <section className="grid gap-10 border-t border-brand-black px-(--spacing-gutter) py-(--spacing-section) md:grid-cols-2">
        <div>
          <p className="mb-3 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">Who We Are</p>
          <h2 className="font-heading text-4xl">Clarity Before Work Begins. Quality Through Every Stage.</h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            RS Developers brings planning, construction, interiors and turnkey delivery under one roof. We serve clients across Punjab and Himachal Pradesh on residential, commercial, industrial and hospitality projects.
          </p>
          <p>
            Customers associate us with transparent communication, disciplined site execution, complete accountability and finished spaces that hold up long after handover.
          </p>
        </div>
      </section>

      <section className="grid gap-10 border-t border-brand-black px-(--spacing-gutter) py-(--spacing-section) md:grid-cols-2">
        <figure className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/media/rahul-bhardwaj-founder.jpg"
            alt="Rahul Bhardwaj, owner and founder of RS Developers"
            fill
            sizes="(max-width: 760px) 100vw, 46vw"
            className="object-cover"
          />
        </figure>
        <div>
          <span className="text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">{contactDetails.founder.designation}</span>
          <h2 className="mt-3 font-heading text-4xl">{contactDetails.founder.name}</h2>
          <h3 className="mt-4 text-xl font-semibold">{contactDetails.founder.experience} of professional experience behind every decision.</h3>
          <p className="mt-4 text-base leading-relaxed">
            Rahul leads from the site, combining engineering discipline with a practical understanding of people, materials and execution. Transparency and direct accountability define how RS Developers works.
          </p>
          <blockquote className="mt-6 border-l-2 border-brand-red pl-4 text-lg italic">
            “A client should always know what is happening, why it matters and who is responsible.”
          </blockquote>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-heading text-[14px] font-semibold tracking-[0.08em] uppercase">
            Start A Conversation <ArrowRight className="size-4 text-brand-red" />
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-black px-(--spacing-gutter) py-(--spacing-section)">
        <p className="mb-3 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">What Clients Can Expect</p>
        <h2 className="mb-8 font-heading text-4xl">The RS Developers Standard.</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Clear scopes before work begins',
            'Quality without convenient compromises',
            'Timelines that stay visible',
            'One accountable team from brief to handover',
            'Support through snagging and final handover',
          ].map((item) => (
            <span key={item} className="flex items-start gap-3 border border-brand-black/15 p-4 text-base">
              <Check className="mt-0.5 size-5 shrink-0 text-brand-red" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-black px-(--spacing-gutter) py-(--spacing-section)">
        <p className="mb-3 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">From Enquiry To Handover</p>
        <h2 className="mb-8 font-heading text-4xl">How A Project Moves Forward.</h2>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step} className="flex gap-4 border-t border-brand-black pt-4 text-base">
              <span className="font-heading text-brand-red">{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </InnerShell>
  );
}
