import './globals.css';
import type { Metadata } from 'next';
import { Inter, Inconsolata } from 'next/font/google';
import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name: string;
          size?: string;
        },
        HTMLElement
      >;
    }
  }
}

const inter = Inter({ subsets: ['latin'] });
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
        className={`${inconsolata.className} selection:bg-enchantedMeadow-800 selection:text-enchantedMeadow-100 antialiased text-black container mx-auto bg-enchantedMeadow-300 py-12 md:py-20 px-6`}
      >
        {children}
      </body>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      />
    </html>
  );
}
