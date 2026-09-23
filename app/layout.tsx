import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'RS Developers | You Dream It. We Build It.',
  description: 'RS Developers — residential, commercial, industrial and interior turnkey projects across Punjab and Himachal Pradesh.',
  openGraph: {
    title: 'RS Developers | You Dream It. We Build It.',
    description: 'Construction and interiors from planning to handover. Based in Ludhiana.',
    type: 'website',
    images: [{ url: '/media/coyaba-facade.webp', width: 1600, height: 900, alt: 'The Coyaba, Ludhiana' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
