import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteShell } from '@/components/site-chrome';
import { caseStudies, ongoingProjects } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Projects | RS Developers',
  description: 'Selected residential, commercial, hospitality and recreation projects by RS Developers in Ludhiana.',
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="px-(--spacing-gutter) pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">Projects</p>
        <h1 className="max-w-[14ch] font-heading text-[clamp(2.5rem,6vw,4rem)]">
          Featured Work
          <br />
          <em className="not-italic text-brand-red">Across Ludhiana.</em>
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed">
          From The Coyaba resort to hotels, residences, commercial complexes and recreation—each project shows how RS Developers plans, builds and finishes.
        </p>
      </section>

      <section className="grid gap-6 px-(--spacing-gutter) pb-16 md:grid-cols-2">
        {caseStudies.map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className={cn('group block', index === 0 && 'md:col-span-2')}
          >
            <figure className={cn('relative m-0 overflow-hidden', index === 0 ? 'h-[min(58vw,560px)]' : 'h-[min(42vw,380px)]')}>
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes={index === 0 ? '100vw' : '(max-width: 760px) 100vw, 50vw'}
                className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-brand-white md:p-8">
                <span className="text-[14px] tracking-[0.12em] uppercase">
                  {project.number} · {project.type} · {project.status}
                </span>
                <h2 className="mt-2 font-heading text-4xl">{project.title}</h2>
                <p className="mt-2 max-w-[520px] text-base text-white/85">{project.lead}</p>
                <b className="mt-4 inline-flex items-center gap-2 font-heading text-[14px] font-semibold uppercase">
                  View Details <ArrowRight className="size-4" />
                </b>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>

      <section className="border-t border-brand-black px-(--spacing-gutter) py-16">
        <p className="mb-3 text-[14px] font-semibold tracking-[0.16em] text-brand-red uppercase">Ongoing Projects</p>
        <h2 className="mb-8 font-heading text-4xl">Currently On Site.</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ongoingProjects.map((item) => (
            <div key={item} className="border-t border-brand-black pt-4 text-base">
              {item}
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
