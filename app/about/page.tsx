import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { InnerShell } from '@/components/inner-shell';

export const metadata: Metadata = { title: 'About RS Developers | Rahul Bhardwaj', description: 'Meet engineer and founder Rahul Bhardwaj and discover the principles behind RS Developers.' };

export default function AboutPage() {
  return <InnerShell>
    <section className="inner-hero inner-hero-about"><p>RS Developers · Ludhiana</p><h1>Built on clarity.<br /><em>Led with conviction.</em></h1><div><span>We are an engineering-led construction and interiors practice built around one promise: take responsibility for the complete journey.</span></div></section>
    <section className="about-manifesto"><p>Who we are</p><h2>Complex projects become exceptional spaces when every decision has an owner.</h2><div><p>RS Developers brings planning, construction, interiors and turnkey delivery under one accountable roof. We work across Punjab and Himachal Pradesh on residential, commercial, industrial and hospitality projects.</p><p>Our role is larger than execution. We create clarity before work begins, coordinate what happens on site and remain answerable for the quality of the finished space.</p></div></section>
    <section className="about-leader"><figure><Image src="/media/rahul-bhardwaj-founder.jpg" alt="Rahul Bhardwaj, owner and founder of RS Developers" fill sizes="(max-width: 760px) 100vw, 46vw" /></figure><div><span>Founder · Engineer · Builder</span><h2>Rahul Bhardwaj</h2><h3>Thirteen years of judgment behind every decision.</h3><p>Rahul leads from the site, combining engineering discipline with a practical understanding of people, materials and execution. His belief in transparency and direct accountability defines how the company works.</p><blockquote>“A client should always know what is happening, why it matters and who is responsible.”</blockquote><Link href="/contact">Start a conversation <ArrowRight /></Link></div></section>
    <section className="about-principles"><p>The RS standard</p><h2>What never changes.</h2><div>{['Clear scopes before work begins', 'Quality without convenient compromises', 'Timelines that stay visible', 'One accountable team from brief to handover'].map((item) => <span key={item}><Check />{item}</span>)}</div></section>
  </InnerShell>;
}
