import githubIcon from '../../../public/images/logo-github.svg';
import linkedinIcon from '../../../public/images/logo-linkedin.svg';
import instagramIcon from '../../../public/images/logo-instagram.svg';
import { socialMediaLink, navigationLink } from '../models/links';

export default function useAppData() {
  const socialMediaLinks: socialMediaLink[] = [
    {
      icon: githubIcon,
      url: 'https://github.com/tom-ai',
      alt: 'View my GitHub',
    },
    {
      icon: linkedinIcon,
      url: 'https://www.linkedin.com/in/tom-ai/',
      alt: 'View my LinkedIn',
    },
    {
      icon: instagramIcon,
      url: 'https://www.instagram.com/tommysax/',
      alt: 'Follow me on Instagram',
    },
  ];

  const navigationLinks: navigationLink[] = [
    {
      text: 'About',
      href: '/',
    },
    {
      text: 'Experience',
      href: '/#experience',
    },
    {
      text: 'Projects',
      href: '/#projects',
    },
  ];

  return { socialMediaLinks, navigationLinks };
}
