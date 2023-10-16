import { Experience } from '../models/experience';

export default function useExperience(): Experience[] {
  const openMoney: Experience = {
    id: 1,
    title: 'Software Developer',
    company: 'OpenMoney',
    from: new Date(2022, 11),
    to: new Date(2023, 6),
    current: false,
    description:
      'At OpenMoney, I improved the web app, managing codebases, implementing testing and modular patterns. Agile collaboration across teams for smooth deployment and proactively addressed issues, ensuring a seamless user experience.',
    url: 'https://www.open-money.co.uk',
    tools: ['C#/.NET', 'TypeScript', 'React', 'Git'],
  };

  const noiiz: Experience = {
    id: 2,
    title: 'Frontend Developer',
    company: 'Carbon Managers',
    from: new Date(2022, 7),
    to: new Date(2022, 10),
    current: false,
    description:
      'Freelancing with Carbon Managers, I enhanced a Next.js, TypeScript, and React website. Managed front-end tasks, styling with Tailwind CSS, and facilitated migration to AWS Amplify for seamless deployment and hosting.',
    url: 'https://www.noiiz.com',
    tools: ['AWS', 'Tailwind CSS', 'TypeScript', 'React', 'Git'],
  };

  const carbonManagers: Experience = {
    id: 3,
    title: 'Technical Support',
    company: 'Noiiz',
    from: new Date(2017, 6),
    to: new Date(2019, 5),
    current: false,
    description:
      'Managed customer success and technical support at samplephonics.com. Resolved 750+ technical support tickets, employed Python scripts for Amazon S3 content uploads, documented feature requests, and escalated issues on GitHub for product enhancement. Enhanced customer experience by contributing to FAQ articles.',
    url: 'https://carbonmanagers.com',
    tools: ['AWS', 'Python', 'Trello', 'GitHub'],
  };

  const experience: Experience[] = [openMoney, noiiz, carbonManagers];

  return experience;
}
