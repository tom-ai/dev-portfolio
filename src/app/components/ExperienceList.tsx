import { WorkExperience } from '../models/strapi/models';
import { Karla } from 'next/font/google';
import Pill from './Pill';

const karla = Karla({ subsets: ['latin'] });

export default async function ExperienceList({
  experiences,
}: {
  experiences: WorkExperience[];
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
          {new Date(experience.attributes.from).toLocaleDateString('en-GB', {
            month: 'short',
            year: 'numeric',
          })}{' '}
          -{' '}
          {experience.attributes.current
            ? 'Present'
            : new Date(experience.attributes.to).toLocaleDateString('en-GB', {
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
              href={experience.attributes.url}
              target="_blank"
              rel="noreferrer"
            >
              {experience.attributes.title} {'•'}{' '}
              {experience.attributes.company}
            </a>
          </h4>
          <p className="mt-2">{experience.attributes.description}</p>
          <ul className="flex flex-wrap mt-2">
            {experience.attributes.tools &&
              experience.attributes.tools.data
                .sort((a, b) =>
                  a.attributes.name.localeCompare(b.attributes.name)
                )
                .map((tool) => (
                  <li key={tool.id}>
                    <Pill text={tool.attributes.name} />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    );
  });
}
