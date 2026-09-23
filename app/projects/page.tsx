import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BedDouble, Building2, Hospital, House, Utensils } from 'lucide-react';
import { SiteShell } from '@/components/site-chrome';
import { SiteButton } from '@/components/site-ui';
import { caseStudies, ongoingProjects } from '@/lib/site-data';

const ongoingIcons = [House, Building2, Building2, Hospital, Hospital, BedDouble, Utensils] as const;

export const metadata: Metadata = {
  title: 'Projects | RS Developers',
  description: 'Selected residential, commercial, hospitality and recreation projects by RS Developers in Ludhiana.',
};

export default function ProjectsPage() {
  return (
    <SiteShell headerVariant="overlay">
      <section className="relative flex h-[80vh] flex-col justify-end overflow-hidden bg-brand-black text-brand-white">
        <Image
          src="/media/coyaba-facade.webp"
          alt="The Coyaba by RS Developers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-wash" aria-hidden="true" />
        <div className="relative z-[5] max-w-[720px] px-(--spacing-gutter) pt-[clamp(7.5rem,16vh,10rem)] pb-[clamp(3rem,6vh,4.5rem)]">
          <h1 className="max-w-[900px] font-heading text-[clamp(3rem,7.5vw,3.5rem)] leading-[1.02] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            Featured Work
            <br />
            <span className="text-brand-red">Across Ludhiana.</span>
          </h1>
          <p className="mt-6 max-w-[540px] font-body text-base text-white/90 [text-shadow:0_1px_16px_rgba(0,0,0,0.4)]">
            From The Coyaba resort to hotels, residences, commercial complexes and recreation—each project shows how RS Developers plans, builds and finishes.
          </p>
          <SiteButton href="#work" variant="red" className="mt-9">
            View Projects <ArrowRight className="size-4" />
          </SiteButton>
        </div>
      </section>

      <section id="work" className="px-(--spacing-gutter) py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-14">
          <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-brand-black">
            Selected Projects.
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-body text-base leading-relaxed text-brand-black/70">
            Hospitality, residential, commercial and recreation—delivered with one accountable team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {caseStudies.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="group flex flex-col">
              <figure className="relative mb-5 h-[320px] overflow-hidden md:h-[400px]">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </figure>
              <h3 className="font-heading text-[1.5rem] leading-snug text-brand-black">{project.title}</h3>
              <p className="mt-2 m-0 font-body text-[14px] leading-relaxed text-brand-black/65">{project.lead}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-heading text-[13px] font-semibold tracking-[0.08em] uppercase">
                View Details <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="m-4 grid items-stretch gap-10 md:m-5 md:h-[calc(100svh-78px-2.5rem)] md:grid-cols-2 md:gap-16 lg:gap-20">
          <figure className="relative min-h-[240px] overflow-hidden md:h-full md:min-h-0">
            <Image
              src="/media/nirvana-facade.jpg"
              alt="Live RS Developers site"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </figure>
          <div className="flex min-h-0 flex-col justify-start">
            <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-brand-black">
              Currently On Site.
            </h2>
            <p className="mt-2 max-w-[440px] font-body text-[15px] leading-relaxed text-brand-black/70">
              Live work across residential, commercial, hospitality and healthcare—each with the same accountable delivery path.
            </p>
            <ul className="mt-6 mb-0 ml-0 flex flex-1 list-none flex-col justify-start gap-5 p-0 md:gap-6">
              {ongoingProjects.map((item, index) => {
                const Icon = ongoingIcons[index];
                return (
                  <li key={item} className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-heading text-[1.15rem] leading-snug text-brand-black md:text-[1.3rem]">{item}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
      </section>
    </SiteShell>
  );
}
