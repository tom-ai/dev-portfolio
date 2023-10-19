import Link from 'next/link';
import { navigationLink } from '../../models/links';

export default function Navigation({
  navigationLinks,
}: {
  navigationLinks: navigationLink[];
}) {
  return (
    <nav className="hidden lg:block lg:mt-12">
      <ul className="flex flex-col gap-2">
        {navigationLinks.map((link, i) => (
          <li key={`link${i}`}>
            <Link className="hover:font-bold" href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
