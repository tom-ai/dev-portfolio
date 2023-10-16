import { Project } from '../models/project';

export default function (): Project[] {
  const linkShortener: Project = {
    id: 1,
    title: 'Link Shortener',
    description: 'A simple link generator built with React and TypeScript.',
    tools: ['React', 'TypeScript', 'Jest', 'React Testing Library'],
    url: 'https://github.com/tom-ai/link-shortener',
  };

  const ncNews: Project = {
    id: 2,
    title: 'NC News',
    description: 'A Reddit-style news aggregator .',
    tools: ['Express', 'React', 'Express', 'Jest'],
    url: 'https://github.com/tom-ai/th-news',
  };

  const projects: Project[] = [linkShortener, ncNews];

  return projects;
}
