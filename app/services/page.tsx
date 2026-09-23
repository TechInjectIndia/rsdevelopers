import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, ClipboardList, FileSpreadsheet, HardHat, KeyRound } from 'lucide-react';
import { SiteShell } from '@/components/site-chrome';
import { SiteButton } from '@/components/site-ui';
import { capabilities, processSteps, serviceDeliverables } from '@/lib/site-data';

const includeIcons = [ClipboardList, FileSpreadsheet, HardHat, KeyRound] as const;

export const metadata: Metadata = {
  title: 'Services | RS Developers',
  description: 'Residential, commercial, industrial and interior turnkey projects—from planning to handover.',
};

export default function ServicesPage() {
  return (
    <SiteShell headerVariant="overlay">
      <section className="relative flex h-[80vh] flex-col justify-end overflow-hidden bg-brand-black text-brand-white">
        <Image
          src="/media/soir7-interior-1.jpg"
          alt="RS Developers interior turnkey work"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-wash" aria-hidden="true" />
        <div className="relative z-[5] max-w-[720px] px-(--spacing-gutter) pt-[clamp(7.5rem,16vh,10rem)] pb-[clamp(3rem,6vh,4.5rem)]">
          <h1 className="max-w-[900px] font-heading text-[clamp(3rem,7.5vw,3.5rem)] leading-[1.02] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            Concept To
            <br />
            <span className="text-brand-red">Completion.</span>
          </h1>
          <p className="mt-6 max-w-[540px] font-body text-base text-white/90 [text-shadow:0_1px_16px_rgba(0,0,0,0.4)]">
            Residential, commercial, industrial and interior turnkey—planning to handover through one accountable team.
          </p>
          <SiteButton href="/contact" variant="red" className="mt-9">
            Discuss Your Project <ArrowRight className="size-4" />
          </SiteButton>
        </div>
      </section>

      <section className="px-(--spacing-gutter) py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-14">
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-brand-black">
            Services We Deliver.
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-body text-base leading-relaxed text-brand-black/70">
            Residential, commercial, industrial and interior turnkey—planning to handover, concept to completion.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {capabilities.map((service) => (
            <article id={service.slug} key={service.slug} className="flex flex-col">
              <figure className="relative mb-5 h-[280px] overflow-hidden md:h-[340px]">
                <Image
                  src={service.image}
                  alt={`${service.title} by RS Developers`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </figure>
              <h3 className="font-heading text-[1.4rem] leading-snug text-brand-black">{service.title}</h3>
              <p className="mt-2 m-0 font-body text-[14px] leading-relaxed text-brand-black/65">{service.lead}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-red px-(--spacing-gutter) py-16 text-brand-white md:py-20">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-14">
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-white">
            What Every Service Includes.
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-body text-base leading-relaxed text-white/85">
            The same accountable path on every project—so planning, cost, site work and handover stay in one set of hands.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 lg:gap-10">
          {serviceDeliverables.map((item, index) => {
            const Icon = includeIcons[index];
            return (
              <article key={item} className="flex flex-col items-center text-center">
                <span className="mb-4 grid size-12 place-items-center rounded-full bg-white/15 text-white">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-heading text-[1.15rem] leading-snug text-white lg:text-[1.25rem]">{item}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-(--spacing-gutter) py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-14">
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-brand-black">
            Planning To Handover.
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-body text-base leading-relaxed text-brand-black/70">
            Every service follows the same path—so the work stays visible from first conversation to final keys.
          </p>
        </div>
        <ol className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {processSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col">
              <span className="mb-4 grid size-11 place-items-center rounded-full bg-brand-red font-heading text-[13px] font-semibold tracking-[0.06em] text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-[1.2rem] leading-snug text-brand-black">{step.title}</h3>
              <p className="mt-2 m-0 max-w-[36ch] font-body text-[14px] leading-relaxed text-brand-black/60">
                {step.lead}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
