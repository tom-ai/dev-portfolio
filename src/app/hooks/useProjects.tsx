import { Project } from "../models/project";

export default function (): Project[] {
  const developerPortfolio: Project = {
    id: 0,
    title: "Developer Portfolio",
    description: "A Next.js developer portfolio.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://github.com/tom-ai/dev-portfolio",
  };

  const linkShortener: Project = {
    id: 1,
    title: "Link Shortener",
    description: "A simple link generator built with React and TypeScript.",
    tools: ["React", "TypeScript", "Jest", "React Testing Library"],
    url: "https://github.com/tom-ai/link-shortener",
  };

  const ncNews: Project = {
    id: 2,
    title: "NC News",
    description: "A Reddit-style news aggregator .",
    tools: ["Express", "React", "Express", "Jest"],
    url: "https://github.com/tom-ai/th-news",
    imageUrl:
      "https://github.com/tom-ai/th-news/blob/main/src/assets/th-news-1.png?raw=true",
  };

  const sophiaDignam: Project = {
    id: 3,
    title: "Sophia Dignam",
    description:
      "Portfolio website for viola and violin session musician, Sophia Dignam.",
    tools: ["GraphQL", "TypeScript", "Tailwind CSS", "React"],
    url: "http://session-musician-sd.vercel.app",
    imageUrl:
      "https://sophia-aws-s3-images-bucket.s3.eu-west-2.amazonaws.com/IMG_2765_9a5db51c06.JPG",
  };

  const projects: Project[] = [
    sophiaDignam,
    developerPortfolio,
    linkShortener,
    ncNews,
  ];

  return projects;
}
