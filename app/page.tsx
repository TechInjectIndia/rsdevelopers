'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
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
                className={cn('h-0.5 border-0 p-0 transition-all', index === active ? 'w-[46px] bg-brand-red' : 'w-7 bg-white/40')}
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
}: {
  href: string;
  children: ReactNode;
  variant?: 'red' | 'white';
  className?: string;
}) {
  const classes = cn(
    'inline-flex w-fit min-h-[52px] items-center justify-center gap-3 border px-5 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] uppercase transition-all [word-spacing:0.28em] hover:-translate-y-0.5',
    variant === 'red' && 'border-brand-red bg-brand-red text-brand-white',
    variant === 'white' && 'border-brand-white bg-brand-white text-brand-black hover:bg-transparent hover:text-brand-white',
    className,
  );

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
  const reduceMotion = useReducedMotion();

  return (
    <main className="font-body">
      <SiteHeader variant="overlay" />

      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-brand-black text-brand-white" id="home">
        <HeroCarousel />
        <div className="relative z-[5] max-w-[720px] px-(--spacing-gutter) pt-[clamp(7.5rem,16vh,10rem)] pb-[clamp(6.5rem,12vh,8.5rem)] max-md:pt-[120px] max-md:pb-40">
          <motion.h1
            className="max-w-[900px] font-heading text-[clamp(3rem,7.5vw,3.5rem)] leading-[1.02] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {contactDetails.taglineLine1}
            <br />
            <span className="text-brand-red">{contactDetails.taglineLine2}</span>
          </motion.h1>
          <p className="mt-6 max-w-[540px] font-body text-base text-white/90 [text-shadow:0_1px_16px_rgba(0,0,0,0.4)]">
            RS Developers delivers residential, commercial, industrial and interior turnkey projects across Punjab and Himachal Pradesh—from concept to completion.
          </p>
          <div className="mt-9 flex items-center gap-6 max-md:flex-col max-md:items-start">
            <SiteButton href="/projects" variant="red">
              Explore Our Work <ArrowDownRight className="size-4" />
            </SiteButton>
            <SiteButton href="/about" variant="white">
              About Us <ArrowRight className="size-4" />
            </SiteButton>
          </div>
        </div>
      </section>

      <section className="bg-brand-white px-(--spacing-gutter) py-12 text-center text-brand-black md:py-20" id="about">
        <Reveal className="mx-auto flex w-full max-w-[1100px] flex-col items-center">
          <h2 className="max-w-[28ch] font-heading text-4xl max-md:max-w-none">
            Transparency, Quality And On-Time Delivery.
          </h2>
          <p className="mt-6 max-w-[820px] font-body text-base leading-relaxed text-brand-black">
            Based in Ludhiana with {contactDetails.yearsInBusiness} years in business and {contactDetails.projectsCompleted} projects completed, RS Developers serves clients all over Punjab and Himachal Pradesh. We specialise in commercial, residential, industrial and turnkey work—with everything under one roof.
          </p>
          <SiteButton href="/about" variant="red" className="mt-9">
            More About Us <ArrowRight className="size-4" />
          </SiteButton>
        </Reveal>
      </section>

      <section className="bg-brand-white px-(--spacing-gutter) py-12 text-brand-black md:py-16" id="work">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight whitespace-nowrap">
              Selected Projects. Real Delivery.
            </h2>
            <p className="mt-3 max-w-[420px] font-body text-base text-brand-black/80">
              From The Coyaba resort to hospitality and residential turnkey work across Ludhiana.
            </p>
          </div>
          <SiteButton href="/projects" variant="red" className="shrink-0">
            View All Projects <ArrowRight className="size-4" />
          </SiteButton>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="flex h-full flex-col border border-brand-black/15 bg-brand-white">
                <figure className="relative m-0 h-[240px] overflow-hidden sm:h-[280px] lg:h-[320px]">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
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
            Residential, commercial, industrial and interior turnkey—planning to handover, concept to completion.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((service) => (
            <article key={service.slug} className="flex flex-col border border-brand-black/15 bg-brand-white p-5">
              <h3 className="font-heading text-[1.35rem] leading-tight">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-black/75">{service.lead}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <SiteButton href="/services" variant="red">
            View Services <ArrowRight className="size-4" />
          </SiteButton>
        </div>
      </section>

      <SiteFooter withCta />
    </main>
  );
}
