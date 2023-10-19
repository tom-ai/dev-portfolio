import Image from 'next/image';
import { socialMediaLink } from '../../models/links';

export default function SocialMedia({ links }: { links: socialMediaLink[] }) {
  return (
    <ul className="flex flex-row gap-3 mt-8">
      {links.map((link, i) => (
        <li key={`link${i}`}>
          <a rel="noreferrer" target="_blank" href={link.url}>
            <Image
              priority
              src={link.icon}
              alt={link.alt}
              width={24}
              height={24}
              className="transition ease-in-out delay-100 hover:opacity-70 hover:scale-110 hover:-translate-y-1 duration-200"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
