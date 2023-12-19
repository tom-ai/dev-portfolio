import { Project } from '../models/project';
import { Karla } from 'next/font/google';
import Pill from './Pill';
import Image from 'next/image';
import fallback from '../../../public/images/fallback.png';

const karla = Karla({ subsets: ['latin'] });

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul>
      {projects.map((project, i) => {
        return (
          <li key={`project${i.toString()}`}>
            <a
              className="group block mb-18 last:mb-0 md:grid md:grid-cols-8 md:gap-4"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative w-full h-48 md:col-span-2 md:h-full md:mt-1">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={fallback}
                    alt="fallback image"
                    fill
                    className="object-cover opacity-50"
                  />
                )}
              </div>
              <div className="md:col-span-6">
                <h4
                  className={`${karla.className} font-medium tracking-tight text-xl mt-4 md:mt-0`}
                >
                  <p>{project.title} </p>
                </h4>
                <p className="mt-2">{project.description}</p>
                <ul className="flex flex-wrap mt-2">
                  {project.tools &&
                    project.tools
                      .sort((a, b) => a.localeCompare(b))
                      .map((tool, j) => (
                        <li key={`tool${j}`}>
                          <Pill text={tool} />
                        </li>
                      ))}
                </ul>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
