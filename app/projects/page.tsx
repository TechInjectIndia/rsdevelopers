import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { InnerShell } from '@/components/inner-shell';
import { caseStudies } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Projects | RS Developers',
  description: 'Selected residential, commercial, hospitality and interior projects by RS Developers in Ludhiana.',
};

export default function ProjectsPage() {
  return (
    <InnerShell>
      <section className="px-(--spacing-gutter) pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">Project Portfolio · Ludhiana</p>
        <h1 className="max-w-[14ch] font-heading text-[clamp(2.5rem,6vw,4rem)]">
          Featured Projects
          <br />
          <em className="not-italic text-brand-red">Worth Seeing First.</em>
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed">
          Real project photography and delivery stories across residential, commercial, hospitality and interior work—each with clear scope, location and what RS Developers handled.
        </p>
      </section>

      <section className="grid gap-6 px-(--spacing-gutter) pb-(--spacing-section) md:grid-cols-2">
        {caseStudies.map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className={cn('group block', index === 0 && 'md:col-span-2')}
          >
            <figure className={cn('relative m-0 overflow-hidden', index === 0 ? 'h-[min(58vw,620px)]' : 'h-[min(42vw,420px)]')}>
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes={index === 0 ? '100vw' : '(max-width: 760px) 100vw, 50vw'}
                className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-brand-white md:p-8">
                <span className="text-[14px] tracking-[0.12em] uppercase">
                  {project.number} · {project.type}
                </span>
                <h2 className="mt-2 font-heading text-4xl">{project.title}</h2>
                <p className="mt-2 max-w-[520px] text-base text-white/85">{project.lead}</p>
                <b className="mt-4 inline-flex items-center gap-2 font-heading text-[14px] font-semibold uppercase">
                  View Case Study <ArrowRight className="size-4" />
                </b>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>

      <section className="grid gap-4 border-t border-brand-black px-(--spacing-gutter) py-(--spacing-section) sm:grid-cols-2 lg:grid-cols-4">
        <p className="mb-2 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase sm:col-span-2 lg:col-span-4">Current Commissions</p>
        {[
          ['Residential', '500-Square-Yard Residence'],
          ['Commercial', '200- And 225-Square-Yard Developments'],
          ['Healthcare', '300- And 350-Square-Yard Facilities'],
          ['Hospitality', 'Guest-Room And Banquet Renewal'],
        ].map(([label, value]) => (
          <div key={label} className="border-t border-brand-black pt-4">
            <span className="text-[13px] tracking-[0.12em] text-brand-red uppercase">{label}</span>
            <strong className="mt-2 block font-heading text-xl">{value}</strong>
          </div>
        ))}
      </section>
    </InnerShell>
  );
}
