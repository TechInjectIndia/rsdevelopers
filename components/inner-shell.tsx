import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Menu, MessageCircle } from 'lucide-react';
import { contactDetails } from '@/lib/site-data';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

export function InnerHeader() {
  return (
    <header className="sticky top-0 z-20 flex min-h-[88px] items-center justify-between gap-6 border-b border-brand-black/10 bg-brand-white px-(--spacing-gutter) font-heading">
      <Link className="w-[140px]" href="/">
        <Image
          src="/brand/rs-developers-logo-v2.png"
          alt="RS Developers"
          width={1774}
          height={887}
          priority
          className="block h-auto w-full"
        />
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-[14px] font-semibold tracking-[0.08em] uppercase">
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        className="hidden items-center gap-2 bg-brand-red px-4 py-3 text-[14px] font-semibold tracking-[0.08em] text-brand-white uppercase md:inline-flex"
        href="/contact"
      >
        Start A Project <ArrowRight className="size-4" />
      </Link>
      <details className="relative md:hidden">
        <summary className="grid size-10 list-none place-items-center bg-brand-black text-brand-white [&::-webkit-details-marker]:hidden" aria-label="Open navigation">
          <Menu />
        </summary>
        <div className="absolute top-full right-0 mt-2 flex min-w-[220px] flex-col gap-1 border border-brand-black/10 bg-brand-white p-4 shadow-lg">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-[14px] font-semibold uppercase">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2 bg-brand-red px-3 py-2 text-center text-[14px] font-semibold text-brand-white uppercase">
            Start A Project
          </Link>
        </div>
      </details>
    </header>
  );
}

export function InnerFooter() {
  const whatsappHref = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent('Hello RS Developers, I would like to discuss a project.')}`;

  return (
    <>
      <footer className="grid gap-10 bg-brand-black px-(--spacing-gutter) py-16 text-brand-white md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-3 text-[14px] tracking-[0.16em] text-brand-red uppercase">RS Developers</p>
          <h2 className="font-heading text-4xl">
            Your Vision.
            <br />
            <em className="not-italic text-brand-red">Our Construction.</em>
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-brand-red px-5 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] text-brand-white uppercase"
          >
            Start A Project <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-heading text-[14px] font-semibold tracking-[0.12em] uppercase">RS Developers</span>
          <p className="m-0 text-base text-white/80">
            Residential · Commercial · Industrial
            <br />
            Interior Works · Turnkey
          </p>
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
      </footer>
      <div className="flex items-center justify-between bg-brand-black px-(--spacing-gutter) pb-8 text-sm tracking-[0.08em] text-brand-white uppercase">
        <span>© 2026 RS Developers</span>
        <Link href="/">Return Home</Link>
      </div>
      <a
        className="fixed right-5 bottom-5 z-30 inline-flex items-center gap-2 bg-brand-red px-4 py-3 font-heading text-[14px] font-semibold text-brand-white uppercase shadow-lg"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with RS Developers on WhatsApp"
      >
        <MessageCircle className="size-4" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export function InnerShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <main className={cn('min-h-svh bg-brand-white font-body text-brand-black', className)}>
      <InnerHeader />
      {children}
      <InnerFooter />
    </main>
  );
}
