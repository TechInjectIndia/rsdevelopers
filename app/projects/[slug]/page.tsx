import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-chrome';
import { caseStudies } from '@/lib/site-data';

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | RS Developers`,
    description: project.lead,
    openGraph: {
      title: `${project.title} | RS Developers`,
      description: project.lead,
      images: [{ url: project.images[0] }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = caseStudies.findIndex((item) => item.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const facts = [
    { label: 'Location', value: project.location },
    { label: 'Scale', value: project.size },
    { label: 'Scope', value: project.service },
  ];

  return (
    <SiteShell>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <Image src={project.images[0]} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
        <div className="relative z-[1] w-full px-(--spacing-gutter) pt-32 pb-12 text-brand-white">
          <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-[14px] font-semibold uppercase">
            <ArrowLeft className="size-4" /> All Projects
          </Link>
          <span className="block text-[14px] tracking-[0.12em] uppercase">
            {project.number} · {project.type} · {project.status}
          </span>
          <h1 className="mt-3 font-heading text-[clamp(2.25rem,5vw,3.5rem)]">{project.title}</h1>
          <p className="mt-4 max-w-[560px] text-base text-white/90">{project.lead}</p>
        </div>
      </section>

      <section className="grid gap-8 px-(--spacing-gutter) py-12 md:grid-cols-[repeat(3,minmax(0,1fr))_1.5fr] md:py-16">
        {facts.map((fact) => (
          <div key={fact.label}>
            <span className="text-[13px] tracking-[0.12em] text-brand-red uppercase">{fact.label}</span>
            <strong className="mt-2 block font-heading text-xl">{fact.value}</strong>
          </div>
        ))}
        <p className="text-base leading-relaxed text-brand-black/75 md:pl-6">{project.copy}</p>
      </section>

      {project.images.length > 1 && (
        <section className="grid gap-4 px-(--spacing-gutter) pb-12 md:grid-cols-2">
          {project.images.slice(1).map((image, imageIndex) => (
            <figure key={image} className="relative m-0 h-[min(48vw,420px)] overflow-hidden">
              <Image
                src={image}
                alt={`${project.title} view ${imageIndex + 2}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
          ))}
        </section>
      )}

      <section className="px-(--spacing-gutter) py-16">
        <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight">
          Planning To Handover Under One Roof.
        </h2>
        <p className="mt-3 max-w-[440px] font-body text-base text-brand-black/80">
          Clear decisions, coordinated delivery and a finish standard that lasts.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {['Clear decisions', 'Coordinated delivery', 'Quality finishing', 'Accountable handover'].map((item) => (
            <span key={item} className="border border-brand-black/10 px-4 py-2 text-[13px] tracking-[0.08em] uppercase">
              {item}
            </span>
          ))}
        </div>
        {project.brandUrl && (
          <a
            href={project.brandUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-heading text-[14px] font-semibold uppercase"
          >
            Visit Project Brand <ArrowRight className="size-4 text-brand-red" />
          </a>
        )}
      </section>

      <Link className="flex items-center justify-between gap-4 px-(--spacing-gutter) py-10" href={`/projects/${next.slug}`}>
        <span>
          <span className="block text-[13px] tracking-[0.12em] text-brand-red uppercase">Next Project</span>
          <strong className="mt-2 block font-heading text-[clamp(1.5rem,3vw,2.25rem)]">{next.title}</strong>
        </span>
        <ArrowRight className="size-8 text-brand-red" />
      </Link>
    </SiteShell>
  );
}
