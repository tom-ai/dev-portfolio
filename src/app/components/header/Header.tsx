import { Karla } from 'next/font/google';
import Link from 'next/link';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import useAppData from '../../hooks/useAppData';

const karla = Karla({ subsets: ['latin'] });

export default function Header() {
  const { socialMediaLinks, navigationLinks, subtitle } = useAppData();

  return (
    <header className="lg:sticky lg:py-24 py-12 md:py-12 lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between">
      <div>
        <h1
          className={`${karla.className} text-4xl md:text-5xl font-bold tracking-tighter`}
        >
          <Link href={'/'}>Tom Harris</Link>
        </h1>
        <h2 className={`mt-3 tracking-tight font-medium text-lg md:text-xl`}>
          Software Developer
        </h2>
        <p className="mt-4 max-w-sm">{subtitle}</p>
        <Navigation navigationLinks={navigationLinks} />
      </div>
      <SocialMedia links={socialMediaLinks} />
    </header>
  );
}
