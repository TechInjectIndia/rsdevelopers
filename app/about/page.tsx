import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Calculator,
  Check,
  ClipboardList,
  FileCheck2,
  Hammer,
  KeyRound,
  ListChecks,
  MapPinned,
  MessagesSquare,
  Ruler,
} from 'lucide-react';
import { SiteShell } from '@/components/site-chrome';
import { contactDetails, processSteps } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About RS Developers | Er. Rahul Bhardwaj',
  description: 'RS Developers — 4+ years, 30+ projects across Punjab and Himachal Pradesh. Founded by Er. Rahul Bhardwaj.',
};

const processIcons: LucideIcon[] = [
  ClipboardList,
  MapPinned,
  Calculator,
  MessagesSquare,
  FileCheck2,
  Ruler,
  Hammer,
  ListChecks,
  KeyRound,
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="px-(--spacing-gutter) pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">About · RS Developers</p>
        <h1 className="max-w-[16ch] font-heading text-[clamp(2.5rem,6vw,4rem)]">
          {contactDetails.taglineLine1}
          <br />
          <em className="not-italic text-brand-red">{contactDetails.taglineLine2}</em>
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed">
          RS Developers has been in business for {contactDetails.yearsInBusiness} years with {contactDetails.projectsCompleted} projects completed. We serve clients all over Punjab and Himachal Pradesh with commercial, residential, industrial and turnkey projects.
        </p>
      </section>

      <section className="grid gap-10 border-t border-brand-black px-(--spacing-gutter) py-16 md:grid-cols-2">
        <div>
          <p className="mb-3 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">What Sets Us Apart</p>
          <h2 className="font-heading text-4xl">All Things Under One Roof.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactDetails.values.map((value) => (
            <span key={value} className="flex items-start gap-3 border border-brand-black/15 p-4 text-base">
              <Check className="mt-0.5 size-5 shrink-0 text-brand-red" />
              {value}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-brand-black px-(--spacing-gutter) py-16 md:grid-cols-2">
        <figure className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/media/rahul-bhardwaj-founder.jpg"
            alt="Er. Rahul Bhardwaj, founder of RS Developers"
            fill
            sizes="(max-width: 760px) 100vw, 46vw"
            className="object-cover"
          />
        </figure>
        <div>
          <span className="text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">{contactDetails.founder.designation}</span>
          <h2 className="mt-3 font-heading text-4xl">{contactDetails.founder.name}</h2>
          <h3 className="mt-4 text-xl font-semibold">{contactDetails.founder.experience} of professional experience.</h3>
          <p className="mt-4 text-base leading-relaxed">
            Er. Rahul Bhardwaj leads RS Developers with an engineering-first approach to planning, construction and turnkey delivery—focused on transparency, quality and on-time handover.
          </p>
          <div className="mt-6">
            <p className="mb-3 text-[13px] tracking-[0.12em] text-brand-red uppercase">Memberships</p>
            <ul className="flex flex-wrap gap-2">
              {contactDetails.founder.memberships.map((item) => (
                <li key={item} className="border border-brand-black px-3 py-2 text-[14px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-heading text-[14px] font-semibold tracking-[0.08em] uppercase">
            Start A Conversation <ArrowRight className="size-4 text-brand-red" />
          </Link>
        </div>
      </section>

      <section className="grid gap-10 border-t border-brand-black px-(--spacing-gutter) py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-14">
        <figure className="relative min-h-[360px] overflow-hidden md:min-h-[480px] lg:sticky lg:top-28 lg:min-h-[560px]">
          <Image
            src="/media/coyaba-detail-1.webp"
            alt="Crafted construction detail from an RS Developers project"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
        </figure>

        <div>
          <p className="mb-3 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">From Enquiry To Handover</p>
          <h2 className="font-heading text-4xl">How A Project Moves Forward.</h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-brand-black/75">
            A clear path from first conversation to final keys—so every stage stays visible, accountable and on schedule.
          </p>

          <ol className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = processIcons[index] ?? ClipboardList;
              return (
                <li key={step} className="flex flex-col gap-3">
                  <span className="grid size-11 place-items-center bg-brand-red text-brand-white" aria-hidden="true">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading text-[12px] font-semibold tracking-[0.14em] text-brand-red uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] leading-snug text-brand-black">{step}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
