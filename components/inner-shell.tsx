import type { ReactNode } from 'react';
import { SiteShell } from '@/components/site-chrome';

/** @deprecated Prefer SiteShell from site-chrome. Kept for compatibility. */
export function InnerShell({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}

export { SiteHeader as InnerHeader, SiteFooter as InnerFooter, SiteShell } from '@/components/site-chrome';
