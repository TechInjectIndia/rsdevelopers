'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.div>
  );
}

type SiteButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'red' | 'white' | 'outline';
  className?: string;
  external?: boolean;
};

export function SiteButton({ href, children, variant = 'red', className, external }: SiteButtonProps) {
  const classes = cn(
    'inline-flex w-fit min-h-[52px] items-center justify-center gap-3 border px-5 py-3 font-heading text-[14px] font-semibold tracking-[0.16em] uppercase transition-all [word-spacing:0.28em] hover:-translate-y-0.5',
    variant === 'red' && 'border-brand-red bg-brand-red text-brand-white',
    variant === 'white' && 'border-brand-white bg-brand-white text-brand-black hover:bg-transparent hover:text-brand-white',
    variant === 'outline' && 'border-brand-black/20 bg-transparent text-brand-black hover:border-brand-red hover:text-brand-red',
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

type IntroProps = {
  as?: 'h1' | 'h2';
  title: ReactNode;
  copy: ReactNode;
  action?: ReactNode;
  align?: 'left' | 'center' | 'split';
  className?: string;
};

export function SectionIntro({ as: Tag = 'h2', title, copy, action, align = 'left', className }: IntroProps) {
  const isCenter = align === 'center';
  const isSplit = align === 'split';

  return (
    <div
      className={cn(
        isSplit && 'flex flex-col gap-5 md:flex-row md:items-end md:justify-between',
        isCenter && 'mx-auto max-w-[820px] text-center',
        className,
      )}
    >
      <div className={cn('min-w-0', isCenter && 'flex flex-col items-center')}>
        <Tag className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight text-brand-black">{title}</Tag>
        <p className={cn('mt-3 font-body text-base leading-relaxed text-brand-black/80', isCenter ? 'max-w-[640px]' : 'max-w-[440px]')}>
          {copy}
        </p>
      </div>
      {action ? <div className={cn('shrink-0', isCenter && 'mt-8')}>{action}</div> : null}
    </div>
  );
}

export function PageIntro({ title, copy, action, className }: Omit<IntroProps, 'as' | 'align'>) {
  return (
    <section className={cn('px-(--spacing-gutter) pt-16 pb-12 md:pt-24 md:pb-16', className)}>
      <h1 className="max-w-[16ch] font-heading text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.08] text-brand-black">
        {title}
      </h1>
      <p className="mt-5 max-w-[560px] font-body text-base leading-relaxed text-brand-black/80">{copy}</p>
      {action ? <div className="mt-8">{action}</div> : null}
    </section>
  );
}

type NumberedItem = {
  title: string;
  lead: string;
};

export function NumberedList({ items, compact = false }: { items: readonly NumberedItem[]; compact?: boolean }) {
  return (
    <ul className="m-0 flex list-none flex-col divide-y divide-brand-black/10 p-0">
      {items.map((item, index) => (
        <li key={item.title} className={cn('grid grid-cols-[2rem_1fr] gap-4 first:pt-0 last:pb-0', compact ? 'py-3' : 'py-5')}>
          <span className="pt-1 font-heading text-[12px] font-semibold tracking-[0.14em] text-brand-red uppercase" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-[1.25rem] leading-snug text-brand-black">{item.title}</h3>
            <p className="mt-1.5 m-0 max-w-[38ch] font-body text-[14px] leading-relaxed text-brand-black/60">{item.lead}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
