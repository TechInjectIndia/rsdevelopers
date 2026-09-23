import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, Clock3, Eye, House } from 'lucide-react';
import { SiteShell } from '@/components/site-chrome';
import { SiteButton } from '@/components/site-ui';
import { SplitMedia } from '@/components/split-media';
import { contactDetails, processSteps, valueItems } from '@/lib/site-data';

const valueIcons = {
  Transparency: Eye,
  Quality: BadgeCheck,
  'On-time delivery': Clock3,
  'Everything under one roof': House,
} as const;

export const metadata: Metadata = {
  title: 'About RS Developers | Er. Rahul Bhardwaj',
  description: 'RS Developers — 4+ years, 30+ projects across Punjab and Himachal Pradesh. Founded by Er. Rahul Bhardwaj.',
};

export default function AboutPage() {
  return (
    <SiteShell headerVariant="overlay">
      <section className="relative flex h-[80vh] flex-col justify-end overflow-hidden bg-brand-black text-brand-white">
        <Image
          src="/media/coyaba-facade.webp"
          alt="RS Developers project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-wash" aria-hidden="true" />
        <div className="relative z-[5] max-w-[720px] px-(--spacing-gutter) pt-[clamp(7.5rem,16vh,10rem)] pb-[clamp(3rem,6vh,4.5rem)]">
          <h1 className="max-w-[900px] font-heading text-[clamp(3rem,7.5vw,3.5rem)] leading-[1.02] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            {contactDetails.taglineLine1}
            <br />
            <span className="text-brand-red">{contactDetails.taglineLine2}</span>
          </h1>
          <p className="mt-6 max-w-[540px] font-body text-base text-white/90 [text-shadow:0_1px_16px_rgba(0,0,0,0.4)]">
            RS Developers has been in business for {contactDetails.yearsInBusiness} years with {contactDetails.projectsCompleted} projects completed. We serve clients all over Punjab and Himachal Pradesh with commercial, residential, industrial and turnkey projects.
          </p>
          <SiteButton href="/contact" variant="red" className="mt-9">
            Start A Conversation <ArrowRight className="size-4" />
          </SiteButton>
        </div>
      </section>

      <SplitMedia
        src="/media/rahul-bhardwaj-founder.jpg"
        alt="Er. Rahul Bhardwaj, founder of RS Developers"
        fitViewport
        inset
        imageClassName="object-[center_18%]"
      >
        <p className="font-body text-[13px] font-semibold tracking-[0.16em] text-brand-red uppercase">
          {contactDetails.founder.designation}
        </p>
        <h2 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.08]">
          Er. Rahul <span className="text-brand-red">Bhardwaj</span>
        </h2>
        <p className="mt-5 max-w-[42ch] font-body text-base leading-relaxed text-brand-black/70">
          Founder of RS Developers, with {contactDetails.founder.experience} of professional experience. He leads planning, construction and turnkey delivery with an engineering-first approach—focused on transparency, quality and on-time handover.
        </p>
        <div className="mt-7 flex max-w-sm flex-wrap gap-1.5">
          {contactDetails.founder.memberships.map((item) => (
            <span key={item} className="border border-brand-black/10 bg-brand-white px-2 py-1 text-[12px] tracking-[0.08em] text-brand-black/70 uppercase">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <SiteButton href="/contact" variant="red">
            Start A Conversation <ArrowRight className="size-4" />
          </SiteButton>
        </div>
      </SplitMedia>

      <section className="bg-brand-red px-(--spacing-gutter) py-16 text-brand-white md:py-20">
        <div className="mx-auto mb-12 max-w-[820px] text-center md:mb-16">
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-white">
            All Things Under One Roof.
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] font-body text-base leading-relaxed text-white/85">
            What clients come to us for—clear communication, finish quality and a team that stays accountable through handover.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 lg:gap-10">
          {valueItems.map((item) => {
            const Icon = valueIcons[item.title];
            return (
              <article key={item.title} className="flex flex-col items-center text-center">
                <span className="mb-4 grid size-12 place-items-center rounded-full bg-white/15 text-white">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-heading text-[1.15rem] leading-snug text-white lg:text-[1.25rem]">{item.title}</h3>
                <p className="mt-2 m-0 max-w-[28ch] font-body text-[14px] leading-relaxed text-white/80">{item.lead}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-(--spacing-gutter) py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-14">
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-brand-black">
            How A Project Moves Forward.
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-body text-base leading-relaxed text-brand-black/70">
            A clear path from first conversation to final keys—so every stage stays visible, accountable and on schedule.
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
