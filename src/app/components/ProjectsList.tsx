import { Project } from "../models/project";
import { Karla } from "next/font/google";
import Pill from "./Pill";
import Image from "next/image";
import fallback from "../../../public/images/fallback.png";

const karla = Karla({ subsets: ["latin"] });

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul>
      {projects.map((project, i) => {
        return (
          <li
            key={`project${i.toString()}`}
            className="mb-12 rounded-lg hover:bg-stone-800/10"
          >
            <a
              className="mb-18 group block p-6 last:mb-0 md:grid md:grid-cols-8 md:gap-4 md:p-4"
              href={project.url}
              rel="noreferrer"
            >
              <div className="relative h-48 w-full rounded-md md:col-span-2 md:h-full">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  />
                ) : (
                  <Image
                    src={fallback}
                    alt="fallback image"
                    fill
                    className="object-cover opacity-50"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  />
                )}
              </div>
              <div className="md:col-span-6">
                <h4
                  className={`${karla.className} mt-4 text-xl font-medium tracking-tight md:mt-0`}
                >
                  <p>{project.title} </p>
                </h4>
                <p className="mt-2">{project.description}</p>
                <ul className="mt-2 flex flex-wrap">
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
