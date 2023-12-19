import { Experience } from '../models/experience';
import { Karla } from 'next/font/google';
import Pill from './Pill';

const karla = Karla({ subsets: ['latin'] });

export default async function ExperienceList({
  experiences,
}: {
  experiences: Experience[];
}) {
  return experiences.map((experience) => {
    return (
      <div
        key={experience.id}
        className="mb-12 last:mb-0 md:grid md:grid-cols-8 md:gap-4"
      >
        <p
          className={
            'md:col-span-2 mt-1 mb-2 uppercase text-sm font-bold text-enchantedMeadow-800 cursor-default'
          }
        >
          {new Date(experience.from).toLocaleDateString('en-GB', {
            month: 'short',
            year: 'numeric',
          })}{' '}
          -{' '}
          {experience.current
            ? 'Present'
            : new Date(experience.to).toLocaleDateString('en-GB', {
                month: 'short',
                year: 'numeric',
              })}
        </p>
        <div className="md:col-span-6">
          <h4
            className={`${karla.className} font-medium tracking-tight text-xl`}
          >
            <a
              className="hover:underline"
              href={experience.url}
              target="_blank"
              rel="noreferrer"
            >
              {experience.title} {'•'} {experience.company}
            </a>
          </h4>
          <p className="mt-2">{experience.description}</p>
          <ul className="flex flex-wrap mt-2">
            {experience.tools &&
              experience.tools
                .sort((a, b) => a.localeCompare(b))
                .map((tool, id) => (
                  <li key={`tool${id.toString()}`}>
                    <Pill text={tool} />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    );
  });
}
