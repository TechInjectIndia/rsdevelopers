import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function InnerHeader() {
  return <header className="inner-header"><Link className="inner-brand" href="/"><Image src="/brand/rs-developers-logo-v2.png" alt="RS Developers" width={1774} height={887} priority /></Link><nav aria-label="Primary navigation"><Link href="/about">Studio</Link><Link href="/services">Capabilities</Link><Link href="/projects">Projects</Link><Link href="/#process">Process</Link></nav><Link className="inner-header-cta" href="/contact">Start a project <ArrowRight /></Link><details className="inner-mobile-nav"><summary>Menu</summary><div><Link href="/about">Studio</Link><Link href="/services">Capabilities</Link><Link href="/projects">Projects</Link><Link href="/#process">Process</Link><Link href="/contact">Start a project</Link></div></details></header>;
}

export function InnerFooter() {
  return <><footer className="inner-footer"><div><p>Your next landmark</p><h2>Bring us the vision.<br /><em>We’ll build the way forward.</em></h2><Link href="/contact">Start a project <ArrowRight /></Link></div><div className="inner-footer-directory"><span>RS Developers</span><p>Construction · Interiors · Turnkey<br />Punjab &amp; Himachal Pradesh</p><a href="tel:+919803247476">+91 98032 47476</a><a href="mailto:rsdrsdevelopers@gmail.com">rsdrsdevelopers@gmail.com</a></div></footer><div className="inner-footer-bottom"><span>© 2026 RS Developers</span><Link href="/">Return home</Link></div><a className="whatsapp-float" href="https://wa.me/919803247476?text=Hello%20RS%20Developers%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with RS Developers on WhatsApp"><MessageCircle /><span>WhatsApp</span></a></>;
}

export function InnerShell({ children }: { children: React.ReactNode }) {
  return <main className="inner-site"><InnerHeader />{children}<InnerFooter /></main>;
}
