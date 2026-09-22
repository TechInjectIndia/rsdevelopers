'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowLeft, ArrowRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { capabilities, caseStudies, contactDetails } from '@/lib/site-data';
import { cn } from '@/lib/utils';

type HeroImage = {
  src: string;
  alt: string;
  label: string;
};

const heroImages: HeroImage[] = [
  { src: '/media/coyaba-facade.webp', alt: 'The Coyaba resort facade', label: 'The Coyaba' },
  { src: '/media/soir7-interior-1.jpg', alt: 'Warm restaurant interior', label: 'The Soir 7' },
  { src: '/media/nirvana-pool.jpg', alt: 'Nirvana hotel pool', label: 'Nirvana Luxury Hotel' },
  { src: '/media/coyaba-detail-1.webp', alt: 'Architectural detail at The Coyaba', label: 'Crafted Detail' },
  { src: '/media/coyaba-garden.webp', alt: 'The Coyaba garden grounds', label: 'Landscape & Grounds' },
];

const projects = caseStudies.slice(0, 3).map((project) => ({
  title: project.title,
  type: `${project.type.split('·')[0].trim()} · ${project.location}`,
  image: project.images[0],
}));

const navItems = [
  { label: 'Who We Are', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const;

function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/rs-developers-logo-v2.png"
      alt="RS Developers"
      width={1774}
      height={887}
      priority
      className={cn('block h-auto w-full', className)}
    />
  );
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const total = heroImages.length;
  const goTo = (index: number) => setActive((index + total) % total);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % total), 4500);
    return () => window.clearInterval(timer);
  }, [reduceMotion, total]);

  return (
    <div className="absolute inset-0" aria-roledescription="carousel" aria-label="Featured RS Developers projects">
      <div className="absolute inset-0 overflow-hidden bg-[#1a1a1a]">
        {heroImages.map((image, index) => (
          <motion.figure
            className="absolute inset-0 m-0 will-change-[opacity,transform]"
            key={image.src}
            initial={false}
            animate={
              reduceMotion
                ? { opacity: index === active ? 1 : 0, scale: 1 }
                : { opacity: index === active ? 1 : 0, scale: index === active ? 1 : 1.04 }
            }
            transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: index === active ? 2 : 1 }}
            aria-hidden={index !== active}
          >
            <Image src={image.src} alt={image.alt} fill priority={index === 0} sizes="100vw" className="object-cover" />
          </motion.figure>
        ))}
        <div className="hero-wash" aria-hidden="true" />
      </div>

      <div className="absolute right-(--spacing-gutter) bottom-[clamp(1.5rem,4vh,2.8rem)] z-[4] flex items-center gap-5 max-md:inset-x-(--spacing-gutter) max-md:justify-between">
        <p className="m-0 flex items-center gap-3.5 font-heading text-[14px] font-semibold tracking-[0.16em] text-white/95 uppercase [word-spacing:0.28em] max-md:max-w-[55%]">
          <span className="text-brand-red">{String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
          {heroImages[active].label}
        </p>
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous image"
            className="grid size-11 place-items-center border border-white/55 bg-black/35 text-brand-white transition-colors hover:border-white hover:bg-brand-red"
          >
            <ArrowLeft className="size-[18px]" />
          </button>
          <div className="flex gap-1.5" role="tablist" aria-label="Slide selection">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={cn(
                  'h-0.5 border-0 p-0 transition-all',
                  index === active ? 'w-[46px] bg-brand-red' : 'w-7 bg-white/40',
                )}
                onClick={() => goTo(index)}
                aria-label={`Show ${image.label}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next image"
            className="grid size-11 place-items-center border border-white/55 bg-black/35 text-brand-white transition-colors hover:border-white hover:bg-brand-red"
          >
            <ArrowRight className="size-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SiteButton({
  href,
  children,
  variant = 'red',
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: 'red' | 'white' | 'outline';
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    'inline-flex w-fit min-h-[52px] items-center justify-center gap-3 border px-5 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] uppercase transition-all [word-spacing:0.28em] hover:-translate-y-0.5',
    variant === 'red' && 'border-brand-red bg-brand-red text-brand-white',
    variant === 'white' && 'border-brand-white bg-brand-white text-brand-black hover:bg-transparent hover:text-brand-white',
    variant === 'outline' && 'mt-12 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black',
    className,
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const whatsappHref = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent('Hello RS Developers, I would like to discuss a project.')}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="font-body">
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-20 grid min-h-[84px] grid-cols-[1fr_auto_1fr] items-center px-(--spacing-gutter) font-heading text-brand-white transition-all duration-300 max-md:min-h-20 max-md:grid-cols-[1fr_auto]',
          scrolled && 'site-nav-scrolled min-h-[78px] bg-brand-red shadow-[0_8px_28px_rgba(0,0,0,0.18)]',
        )}
      >
        <Link className="w-[150px] max-md:w-32" href="#home" aria-label="RS Developers home">
          <Logo className="brightness-0 invert" />
        </Link>
        <nav className="flex gap-[clamp(1.4rem,3vw,3rem)] max-md:hidden" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-underline text-[14px] font-semibold tracking-[0.08em] text-white uppercase [word-spacing:0.28em] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="hidden justify-self-end items-center gap-2.5 text-[14px] font-semibold tracking-[0.08em] text-white uppercase [word-spacing:0.28em] md:flex"
          href="#contact"
        >
          Start A Project <ArrowRight className={cn('size-4', scrolled ? 'text-brand-white' : 'text-brand-red')} />
        </a>
        <button
          className={cn(
            'hidden size-[42px] place-items-center border-0 max-md:grid',
            scrolled ? 'bg-brand-white text-brand-red' : 'bg-brand-black text-brand-white',
          )}
          type="button"
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
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-brand-white py-5 font-heading text-4xl"
            >
              {item.label}
              <ArrowRight />
            </a>
          ))}
        </nav>
      </div>

      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-brand-black text-brand-white" id="home">
        <HeroCarousel />
        <div className="relative z-[5] max-w-[720px] px-(--spacing-gutter) pt-[clamp(7.5rem,16vh,10rem)] pb-[clamp(6.5rem,12vh,8.5rem)] max-md:pt-[120px] max-md:pb-40">
          <motion.h1
            className="max-w-[900px] font-heading text-[clamp(3rem,7.5vw,3.5rem)] leading-[1.02] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Vision.
            <br />
            Our <span className="text-brand-red">Construction.</span>
          </motion.h1>
          <p className="mt-6 max-w-[540px] font-body text-base text-white/90 [text-shadow:0_1px_16px_rgba(0,0,0,0.4)]">
            RS Developers is a clean, professional construction practice focused on residential, commercial, industrial, interior and turnkey projects—with clear delivery from first enquiry to handover.
          </p>
          <div className="mt-9 flex items-center gap-6 max-md:flex-col max-md:items-start">
            <SiteButton href="#work" variant="red">
              Explore Our Work <ArrowDownRight className="size-4" />
            </SiteButton>
            <SiteButton href="#about" variant="white">
              About The Studio <ArrowRight className="size-4" />
            </SiteButton>
          </div>
        </div>
      </section>

      <section className=" bg-brand-white px-(--spacing-gutter) py-12 md:py-28 text-center text-brand-black" id="about">
        <Reveal className="mx-auto flex w-full max-w-[1100px] flex-col items-center">
         
          <h2 className="max-w-[28ch] font-heading text-4xl max-md:max-w-none">
            Built For Clarity, Quality And Complete Accountability.
          </h2>
          <p className="mt-6 max-w-[820px] font-body text-base leading-relaxed text-brand-black">
            Based in Ludhiana, RS Developers serves clients across Punjab and Himachal Pradesh with residential, commercial, industrial, interior and turnkey construction. What sets us apart is one accountable team from planning to handover—transparent communication, disciplined site execution and spaces finished to a standard that lasts.
          </p>
          <SiteButton href="/about" variant="red" className="mt-9">
            More About Us <ArrowRight className="size-4" />
          </SiteButton>
        </Reveal>
      </section>

      <section className="bg-brand-white px-(--spacing-gutter) py-12 text-brand-black md:py-16" id="work">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-4xl">
            Selected Projects.
            <br />
            Real Delivery.
          </h2>
          <p className="m-0 max-w-[390px] text-base md:text-right">
            Hospitality, residential and commercial work that shows how we plan, build and finish.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="flex h-full flex-col border border-brand-black/15 bg-brand-white">
                <figure className="relative m-0 h-[240px] overflow-hidden sm:h-[280px] lg:h-[320px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </figure>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-heading text-[1.75rem] leading-tight">{project.title}</h3>
                  <p className="m-0 text-[13px] tracking-[0.12em] uppercase">{project.type}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-white px-(--spacing-gutter) py-12 text-brand-black md:py-16" id="services">
        <div className="mx-auto mb-10 max-w-[820px] text-center md:mb-12">
          <h2 className="font-heading text-4xl">Services We Deliver.</h2>
          <p className="mt-4 text-base text-brand-black/80">
            Residential, commercial, industrial, interior and turnkey delivery—from first enquiry to handover.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilities.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col border border-brand-black/15 bg-brand-white p-5"
            >
              <h3 className="font-heading text-[1.35rem] leading-tight">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-black/75">{service.lead}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-red px-(--spacing-gutter) pt-20 pb-8 text-brand-white md:pt-8 md:pb-8" id="contact">
        <div className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
          <h2 className="font-heading text-[clamp(1.5rem,4vw,3.25rem)] leading-tight whitespace-nowrap">
            Ready To Discuss Your Project?
          </h2>
          <p className="mt-5 max-w-[480px] font-body text-base text-white/90">
            Share your project type, location and timeline—we’ll help define the clearest path from enquiry to handover.
          </p>
          <SiteButton href={whatsappHref} variant="white" external className="mt-8">
            Enquire On WhatsApp <ArrowRight className="size-4" />
          </SiteButton>
        </div>

        <footer className="mt-16 bg-brand-white px-6 py-10 text-brand-black md:mt-8 md:px-10 md:py-6">
          <div className="grid gap-10 border-b border-brand-black/15 pb-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-start gap-5 sm:col-span-2 lg:col-span-1">
              <Link className="w-[min(220px,70vw)]" href="#home">
                <Logo />
              </Link>
              <p className="ml-6 font-heading text-[clamp(1.5rem,2.5vw,1.85rem)] leading-[0.95]">
                Your Vision.
                <br />
                <span className="text-brand-red">Our Construction.</span>
              </p>
            </div>
            <div className="flex flex-col items-start">
              <span className="mb-4 font-heading text-[16px] tracking-[0.15em] text-brand-red uppercase">Visit</span>
              <address className="not-italic leading-8 text-brand-black/85">
                {contactDetails.addressLine1}
                <br />
                {contactDetails.addressLine2}
              </address>
            </div>
            <div className="flex flex-col items-start">
              <span className="mb-4 font-heading text-[16px] tracking-[0.15em] text-brand-red uppercase">Contact</span>
              <a className="mb-3 text-brand-black/85 hover:text-brand-red" href={contactDetails.phoneHref}>{contactDetails.phone}</a>
              <a className="mb-3 text-brand-black/85 hover:text-brand-red" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </div>
            <div className="flex flex-col items-start">
              <span className="mb-4 font-heading text-[16px] tracking-[0.15em] text-brand-red uppercase">Explore</span>
              <a className="mb-3 text-brand-black/85 hover:text-brand-red" href="#about">Who We Are</a>
              <a className="mb-3 text-brand-black/85 hover:text-brand-red" href="#work">Our Work</a>
              <a className="mb-3 text-brand-black/85 hover:text-brand-red" href="#services">Services</a>
            </div>
          </div>

          <div className="border-t border-brand-black/15 pt-6 text-center text-[13px] text-brand-black/70">
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
    </main>
  );
}
