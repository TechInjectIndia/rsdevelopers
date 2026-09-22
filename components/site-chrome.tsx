'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react';
import { contactDetails, navItems } from '@/lib/site-data';
import { cn } from '@/lib/utils';

function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Image
      src="/brand/rs-developers-logo-v2.png"
      alt="RS Developers"
      width={1774}
      height={887}
      priority
      className={cn('block h-auto w-full', invert && 'brightness-0 invert', className)}
    />
  );
}

export function SiteHeader({ variant = 'solid' }: { variant?: 'solid' | 'overlay' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isOverlay = variant === 'overlay';

  useEffect(() => {
    if (!isOverlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOverlay]);

  return (
    <>
      <header
        className={cn(
          'z-20 flex min-h-[88px] items-center justify-between gap-6 px-(--spacing-gutter) font-heading transition-all duration-300',
          isOverlay ? 'fixed inset-x-0 top-0' : 'sticky top-0 border-b border-brand-black/10 bg-brand-white text-brand-black',
          isOverlay && (scrolled ? 'site-nav-scrolled min-h-[78px] bg-brand-red text-brand-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]' : 'text-brand-white'),
        )}
      >
        <Link className="w-[140px] max-md:w-[120px]" href="/" aria-label="RS Developers home">
          <Logo invert={isOverlay} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'nav-link-underline text-[14px] font-semibold tracking-[0.08em] uppercase',
                isOverlay && !scrolled && '[text-shadow:0_1px_12px_rgba(0,0,0,0.35)]',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className={cn(
            'hidden items-center gap-2 px-4 py-3 text-[14px] font-semibold tracking-[0.08em] uppercase md:inline-flex',
            isOverlay
              ? scrolled
                ? 'bg-brand-white text-brand-red'
                : 'bg-brand-red text-brand-white'
              : 'bg-brand-red text-brand-white',
          )}
          href="/contact"
        >
          Start A Project <ArrowRight className="size-4" />
        </Link>
        <button
          type="button"
          className={cn(
            'grid size-10 place-items-center border-0 md:hidden',
            isOverlay && scrolled ? 'bg-brand-white text-brand-red' : 'bg-brand-black text-brand-white',
          )}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[100] bg-brand-red p-6 text-brand-white transition-opacity duration-300 md:hidden',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="ml-auto grid size-11 place-items-center border border-brand-white bg-transparent text-brand-white"
        >
          <X />
        </button>
        <nav className="mt-16 grid">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-brand-white py-5 font-heading text-4xl"
            >
              {item.label}
              <ArrowRight />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export function SiteFooter({ withCta = true }: { withCta?: boolean }) {
  const whatsappHref = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent('Hello RS Developers, I would like to discuss a project.')}`;

  return (
    <>
      <section className="bg-brand-red px-(--spacing-gutter) pt-12 pb-6 text-brand-white md:pt-14 md:pb-8">
        {withCta && (
          <div className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
              Ready To Discuss Your Project?
            </h2>
            <p className="mt-3 max-w-[480px] font-body text-base text-white/90">
              Share your project type, location and timeline—we’ll help define the clearest path from enquiry to handover.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-[48px] items-center gap-3 border border-brand-white bg-brand-white px-5 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] text-brand-black uppercase transition-colors hover:bg-transparent hover:text-brand-white"
            >
              Enquire On WhatsApp <ArrowRight className="size-4" />
            </a>
          </div>
        )}

        <footer className={cn('bg-brand-white px-6 py-7 text-brand-black md:px-10 md:py-8', withCta ? 'mt-8 md:mt-10' : 'mt-0')}>
          <div className="flex flex-col gap-6 border-b border-brand-black/15 pb-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex w-full shrink-0 flex-col items-start gap-3 lg:w-[180px] xl:w-[200px]">
              <Link className="w-[150px]" href="/">
                <Logo />
              </Link>
              <p className="ml-5 font-heading text-[1.9rem] leading-[1.1]">
                {contactDetails.taglineLine1}
                <br />
                <span className="text-brand-red">{contactDetails.taglineLine2}</span>
              </p>
            </div>

            <div className="grid w-full flex-1 grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 lg:gap-6 [&>div]:text-[14px] [&>div]:leading-7">
              <div className="flex flex-col items-start">
                <span className="mb-2 font-heading text-[14px] font-semibold leading-7 tracking-[0.12em] text-brand-red uppercase">Visit</span>
                <address className="m-0 font-body text-[14px] not-italic leading-7 text-brand-black/85">
                  {contactDetails.addressLine1}
                  <br />
                  {contactDetails.addressLine2}
                </address>
              </div>
              <div className="flex flex-col items-start">
                <span className="mb-2 font-heading text-[14px] font-semibold leading-7 tracking-[0.12em] text-brand-red uppercase">Contact</span>
                <div className="flex flex-col gap-1 font-body text-[14px] leading-7">
                  <a className="text-brand-black/85 hover:text-brand-red" href={contactDetails.phoneHref}>{contactDetails.phone}</a>
                  <a className="text-brand-black/85 hover:text-brand-red" href={contactDetails.alternatePhoneHref}>{contactDetails.alternatePhone}</a>
                  <a className="text-brand-black/85 hover:text-brand-red" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="mb-2 font-heading text-[14px] font-semibold leading-7 tracking-[0.12em] text-brand-red uppercase">Social</span>
                <a
                  href={contactDetails.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-[14px] leading-7 text-brand-black/85 hover:text-brand-red"
                >
                  Instagram
                </a>
              </div>
              <div className="flex flex-col items-start">
                <span className="mb-2 font-heading text-[14px] font-semibold leading-7 tracking-[0.12em] text-brand-red uppercase">Pages</span>
                <div className="flex flex-col gap-1 font-body text-[14px] leading-7">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-brand-black/85 hover:text-brand-red">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center text-[12px] text-brand-black/70">
            © 2026 Powered By{' '}
            <a
              href="https://techinject.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-brand-red"
            >
              Tech Inject.
            </a>
          </div>
        </footer>
      </section>

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

export function SiteShell({
  children,
  headerVariant = 'solid',
  withCta = true,
}: {
  children: ReactNode;
  headerVariant?: 'solid' | 'overlay';
  withCta?: boolean;
}) {
  return (
    <main className="min-h-svh bg-brand-white font-body text-brand-black">
      <SiteHeader variant={headerVariant} />
      {children}
      <SiteFooter withCta={withCta} />
    </main>
  );
}
