import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { InnerShell } from '@/components/inner-shell';
import { capabilities, processSteps } from '@/lib/site-data';

export const metadata: Metadata = { title: 'Construction & Interior Services | RS Developers', description: 'Residential, commercial, industrial and turnkey interior services across Punjab and Himachal Pradesh.' };

export default function ServicesPage() {
  return <InnerShell>
    <section className="inner-hero inner-hero-services"><p>Capabilities · From concept to completion</p><h1>Four disciplines.<br /><em>One accountable team.</em></h1><div><span>We bring planning, construction, services and finishing into one clear delivery system—so ambitious projects move forward without fragmented responsibility.</span><Link href="/contact">Discuss your project <ArrowRight /></Link></div></section>
    <section className="capability-list">{capabilities.map((service, index) => <article id={service.slug} key={service.slug}><div className="capability-image"><Image src={service.image} alt={`${service.title} work by RS Developers`} fill sizes="(max-width: 760px) 100vw, 46vw" /></div><div className="capability-copy"><span>{service.number} · {service.scope}</span><h2>{service.title}</h2><h3>{service.lead}</h3><p>{service.copy}</p><ul><li><Check /> Planning and consultation</li><li><Check /> Transparent BOQ and costing</li><li><Check /> Coordinated site execution</li><li><Check /> Snagging and handover</li></ul><Link href="/contact">Plan your {service.title.toLowerCase()} project <ArrowRight /></Link></div><b aria-hidden="true">0{index + 1}</b></article>)}</section>
    <section className="inner-process"><p>How we work</p><h2>Clarity at every stage.</h2><ol>{processSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol></section>
  </InnerShell>;
}
