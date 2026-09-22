import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { InnerShell } from '@/components/inner-shell';
import { capabilities, processSteps } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Construction & Interior Services | RS Developers',
  description: 'Residential, commercial, industrial, interior works and turnkey projects across Punjab and Himachal Pradesh.',
};

export default function ServicesPage() {
  return (
    <InnerShell>
      <section className="px-(--spacing-gutter) pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">Services · From Planning To Handover</p>
        <h1 className="max-w-[16ch] font-heading text-[clamp(2.5rem,6vw,4rem)]">
          Five Services.
          <br />
          <em className="not-italic text-brand-red">One Accountable Team.</em>
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed">
          RS Developers offers residential construction, commercial construction, industrial construction, interior works and complete turnkey projects—so clients work with one responsible delivery partner.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-brand-red px-5 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] text-brand-white uppercase"
        >
          Discuss Your Project <ArrowRight className="size-4" />
        </Link>
      </section>

      <section className="border-t border-brand-black">
        {capabilities.map((service, index) => (
          <article
            id={service.slug}
            key={service.slug}
            className="grid gap-8 border-b border-brand-black px-(--spacing-gutter) py-12 md:grid-cols-2 md:py-16"
          >
            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.title} by RS Developers`}
                fill
                sizes="(max-width: 760px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[14px] font-semibold tracking-[0.12em] text-brand-red uppercase">
                {service.number} · {service.scope}
              </span>
              <h2 className="mt-3 font-heading text-4xl">{service.title}</h2>
              <h3 className="mt-4 text-xl font-semibold">{service.lead}</h3>
              <p className="mt-4 text-base leading-relaxed">{service.copy}</p>
              <ul className="mt-6 space-y-2">
                {['Planning and consultation', 'Transparent BOQ and costing', 'Coordinated site execution', 'Snagging and handover'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-base">
                    <Check className="size-4 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-heading text-[14px] font-semibold uppercase">
                Plan Your {service.title} Project <ArrowRight className="size-4 text-brand-red" />
              </Link>
              <b className="mt-6 block font-heading text-6xl text-brand-black/10" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </b>
            </div>
          </article>
        ))}
      </section>

      <section className="px-(--spacing-gutter) py-(--spacing-section)">
        <p className="mb-3 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">How We Work</p>
        <h2 className="mb-8 font-heading text-4xl">Clarity At Every Stage.</h2>
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
