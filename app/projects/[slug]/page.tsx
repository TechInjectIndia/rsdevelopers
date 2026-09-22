import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { InnerShell } from '@/components/inner-shell';
import { caseStudies } from '@/lib/site-data';

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: `${project.title} | RS Developers`, description: project.lead, openGraph: { title: `${project.title} | RS Developers`, description: project.lead, images: [{ url: project.images[0] }] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = caseStudies.findIndex((item) => item.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  return <InnerShell>
    <section className="case-hero"><Image src={project.images[0]} alt={project.title} fill priority sizes="100vw" /><div className="case-hero-shade" /><div className="case-hero-copy"><Link href="/projects"><ArrowLeft /> All projects</Link><span>{project.number} · {project.type}</span><h1>{project.title}</h1><p>{project.lead}</p></div></section>
    <section className="case-intro"><div><span>Location</span><strong>{project.location}</strong></div><div><span>Scale</span><strong>{project.size}</strong></div><div><span>Scope</span><strong>{project.service}</strong></div><p>{project.copy}</p></section>
    {project.images.length > 1 && <section className="case-gallery">{project.images.slice(1).map((image, imageIndex) => <figure key={image}><Image src={image} alt={`${project.title} view ${imageIndex + 2}`} fill sizes="(max-width: 760px) 100vw, 50vw" /></figure>)}</section>}
    <section className="case-outcome"><p>Our approach</p><h2>One team held the line from intent to execution.</h2><div><span>Clear decisions</span><span>Coordinated delivery</span><span>Quality-led finishing</span><span>Accountable handover</span></div>{project.brandUrl && <a href={project.brandUrl} target="_blank" rel="noreferrer">Visit project brand <ArrowRight /></a>}</section>
    <Link className="next-project" href={`/projects/${next.slug}`}><span>Next case study</span><strong>{next.title}</strong><ArrowRight /></Link>
  </InnerShell>;
}
