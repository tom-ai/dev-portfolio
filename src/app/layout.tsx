import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tom Harris",
  description: "Developer portfolio for Tom Harris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} bg-stone-100 text-black antialiased selection:bg-stone-800 selection:text-stone-100 dark:bg-stone-800 dark:text-white dark:selection:bg-stone-300 dark:selection:text-stone-800`}
      >
        {children}
      </body>
    </html>
  );
}
