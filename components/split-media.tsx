import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SplitMediaProps = {
  src: string;
  alt: string;
  children: ReactNode;
  curve?: boolean;
  reverse?: boolean;
  className?: string;
  imageClassName?: string;
  figureClassName?: string;
  fitViewport?: boolean;
  inset?: boolean;
};

export function SplitMedia({
  src,
  alt,
  children,
  curve = false,
  reverse = false,
  className,
  imageClassName,
  figureClassName,
  fitViewport = false,
  inset = false,
}: SplitMediaProps) {
  return (
    <section
      className={cn(
        'overflow-x-hidden md:grid md:grid-cols-2',
        fitViewport && !inset && 'md:h-[calc(100svh-78px)] md:items-stretch',
        fitViewport && inset && 'md:h-[calc(100svh-78px-(var(--spacing-inset)*2))] md:items-stretch',
        inset && 'm-(--spacing-inset)',
        !fitViewport && 'md:items-start',
        className,
      )}
    >
      <figure
        className={cn(
          'relative isolate overflow-hidden bg-[#d8d8d8]',
          fitViewport ? 'h-[280px] md:h-full' : 'h-[240px] sm:h-[300px] md:h-[420px]',
          curve && 'rounded-tr-[clamp(5rem,20vw,10rem)]',
          reverse && 'md:order-2',
          figureClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn('object-cover', imageClassName)}
        />
      </figure>
      <div
        className={cn(
          'flex h-full min-h-0 flex-col justify-center bg-brand-white px-(--spacing-gutter) md:pl-10 lg:pl-14 xl:pl-20',
          fitViewport ? 'py-6 md:py-5' : 'py-10 md:py-8',
          reverse && 'md:pl-(--spacing-gutter) md:pr-10 lg:pr-14 xl:pr-20',
        )}
      >
        {children}
      </div>
    </section>
  );
}
