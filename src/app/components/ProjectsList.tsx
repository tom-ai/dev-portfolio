import { Project } from '../models/strapi/models';
import { Karla } from 'next/font/google';
import Pill from './Pill';
import Image from 'next/image';

const karla = Karla({ subsets: ['latin'] });

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return projects.map((project, i) => {
    return (
      <div
        key={`project${i.toString()}`}
        className="mb-12 last:mb-0 md:grid md:grid-cols-8 md:gap-4"
      >
        <div className="md:col-span-6">
          <h4
            className={`${karla.className} font-medium tracking-tight text-xl`}
          >
            <a
              className="hover:underline"
              href={project.attributes.codeUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.attributes.title}{' '}
            </a>
          </h4>
          <p className="mt-2">{project.attributes.description}</p>
          <ul className="flex flex-wrap mt-2">
            {project.attributes.tools &&
              project.attributes.tools.data.map((tool, j) => (
                <li key={`tool${j}`}>
                  <Pill text={tool.attributes.name} />
                </li>
              ))}
          </ul>
        </div>
        {/* <Image
          src={project.attributes.imageUrl}
          alt={project.title}
          width={150}
          height={100}
          className="md:col-span-2 md:order-first mt-4 rounded-md border-enchantedMeadow-700 border-2"
        /> */}
      </div>
    );
  });
}
