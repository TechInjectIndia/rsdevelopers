import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { InnerShell } from '@/components/inner-shell';

export const metadata: Metadata = { title: 'Start a Project | RS Developers', description: 'Discuss your construction, interior or turnkey project with RS Developers in Ludhiana.' };

export default function ContactPage() {
  const message = encodeURIComponent('Hello RS Developers, I would like to discuss a project.');
  return <InnerShell>
    <section className="contact-page-hero"><p>Start a project</p><h1>Your next landmark starts with <em>a clear conversation.</em></h1><span>Tell us what you want to create, where you are building and what matters most. We’ll help define the smartest path forward.</span></section>
    <section className="contact-page-grid"><div className="contact-primary"><p>Speak directly with our team</p><a className="contact-whatsapp" href={`https://wa.me/919803247476?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle /> Continue on WhatsApp <strong><MessageCircle /></strong></a><span>Share your project type, location, approximate scale and preferred timeline for a more useful first conversation.</span></div><div className="contact-directory"><a href="tel:+919803247476"><Phone /><span>Call</span><strong>+91 98032 47476</strong></a><a href="tel:+917986984675"><Phone /><span>Alternate</span><strong>+91 79869 84675</strong></a><a href="mailto:rsdrsdevelopers@gmail.com"><Mail /><span>Email</span><strong>rsdrsdevelopers@gmail.com</strong></a><a href="https://maps.google.com/?q=303+Second+Floor+Sethi+Complex+Bharat+Nagar+Chowk+Ludhiana" target="_blank" rel="noreferrer"><MapPin /><span>Studio</span><strong>303, Second Floor, Sethi Complex<br />Bharat Nagar Chowk, Ludhiana</strong></a></div></section>
    <section className="contact-expect"><p>What happens next</p><ol><li><span>01</span><strong>We understand the brief</strong><p>A focused first conversation about scope, location, priorities and timing.</p></li><li><span>02</span><strong>We visit the site</strong><p>Our team studies the opportunity and advises on the practical way forward.</p></li><li><span>03</span><strong>We define the plan</strong><p>A clear scope and estimate create confidence before execution begins.</p></li></ol></section>
  </InnerShell>;
}
