import { Project } from '../models/strapi/models';
import { Karla } from 'next/font/google';
import Pill from './Pill';
import Image from 'next/image';
import { makeImageURL } from '../utils/makeImageURL';
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
              href={project.attributes.codeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative w-full h-48 md:col-span-2 md:h-full md:mt-1">
                {project.attributes.image?.data ? (
                  <Image
                    src={makeImageURL(
                      project.attributes.image.data.attributes.url,
                      process.env.NEXT_PUBLIC_STRAPI_URL
                    )}
                    alt={
                      project.attributes.image?.data.attributes.alternativeText
                    }
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
                  <p>{project.attributes.title} </p>
                </h4>
                <p className="mt-2">{project.attributes.description}</p>
                <ul className="flex flex-wrap mt-2">
                  {project.attributes.tools &&
                    project.attributes.tools.data
                      .sort((a, b) =>
                        a.attributes.name.localeCompare(b.attributes.name)
                      )
                      .map((tool, j) => (
                        <li key={`tool${j}`}>
                          <Pill text={tool.attributes.name} />
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
