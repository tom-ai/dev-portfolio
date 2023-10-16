import { Project } from '../models/project';

export default function (): Project[] {
  const linkShortener: Project = {
    id: 1,
    title: 'Link Shortener',
    description: 'A simple link generator built with React and TypeScript.',
    tools: ['React', 'TypeScript', 'Jest', 'React Testing Library'],
    url: 'https://github.com/tom-ai/link-shortener',
    imageUrl: 'https://source.unsplash.com/photos/95YRwf6CNw8',
  };

  const ncNews: Project = {
    id: 2,
    title: 'NC News',
    description: 'A Reddit-style news aggregator .',
    tools: ['Express', 'React', 'Express', 'Jest'],
    url: 'https://github.com/tom-ai/th-news',
    imageUrl:
      'https://github.com/tom-ai/th-news/blob/main/src/assets/th-news-1.png?raw=true',
  };

  const projects: Project[] = [linkShortener, ncNews];

  return projects;
}
