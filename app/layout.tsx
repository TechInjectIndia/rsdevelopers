import type { Metadata } from 'next';
import { Bodoni_Moda, Manrope } from 'next/font/google';
import './globals.css';

const display = Bodoni_Moda({ variable: '--font-display', subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'RS Developers | You Dream It. We Build It.',
  description: 'Engineering-led construction, interiors and turnkey execution across Punjab and Himachal Pradesh—from first brief to final handover.',
  openGraph: {
    title: 'RS Developers | You Dream It. We Build It.',
    description: 'Ambitious residential, commercial, industrial and hospitality spaces delivered by one accountable team.',
    type: 'website',
    images: [{ url: '/media/coyaba-facade.webp', width: 1600, height: 900, alt: 'The Coyaba, Ludhiana' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
