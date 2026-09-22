import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'RS Developers | Your Vision. Our Construction.',
  description: 'RS Developers — residential, commercial, industrial, interior and turnkey construction across Punjab and Himachal Pradesh.',
  openGraph: {
    title: 'RS Developers | Your Vision. Our Construction.',
    description: 'A clean, professional construction website focused on services, projects, credibility and contact.',
    type: 'website',
    images: [{ url: '/media/coyaba-facade.webp', width: 1600, height: 900, alt: 'The Coyaba, Ludhiana' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-svh bg-brand-white font-body text-brand-black antialiased">{children}</body>
    </html>
  );
}
