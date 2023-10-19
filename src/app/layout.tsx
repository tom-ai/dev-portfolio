import './globals.css';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tom Harris',
  description: 'Developer portfolio for Tom Harris',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} selection:bg-enchantedMeadow-800 selection:text-enchantedMeadow-100 antialiased text-black bg-enchantedMeadow-300 `}
      >
        {children}
      </body>
    </html>
  );
}
