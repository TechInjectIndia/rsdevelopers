import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { InnerShell } from '@/components/inner-shell';
import { caseStudies } from '@/lib/site-data';

export const metadata: Metadata = { title: 'Projects | RS Developers', description: 'Explore selected hospitality, residential and commercial work by RS Developers in Ludhiana.' };

export default function ProjectsPage() {
  return <InnerShell>
    <section className="inner-hero inner-hero-projects"><p>Selected work · Ludhiana</p><h1>The work<br /><em>is our word.</em></h1><div><span>Landmark hospitality, considered homes and commercial spaces—each planned with clarity, built with control and finished with care.</span></div></section>
    <section className="portfolio-grid">{caseStudies.map((project, index) => <Link href={`/projects/${project.slug}`} key={project.slug} className={index === 0 ? 'is-featured' : ''}><figure><Image src={project.images[0]} alt={project.title} fill sizes={index === 0 ? '100vw' : '(max-width: 760px) 100vw, 50vw'} /><figcaption><span>{project.number} · {project.type}</span><h2>{project.title}</h2><p>{project.lead}</p><b>View case study <ArrowRight /></b></figcaption></figure></Link>)}</section>
    <section className="portfolio-register"><p>Current commissions</p><div><span>Residential</span><strong>500-square-yard residence</strong></div><div><span>Commercial</span><strong>200- and 225-square-yard developments</strong></div><div><span>Healthcare</span><strong>300- and 350-square-yard facilities</strong></div><div><span>Hospitality</span><strong>Guest-room and banquet renewal</strong></div></section>
  </InnerShell>;
}
