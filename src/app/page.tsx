import Link from 'next/link';
import useExperience from './hooks/useExperience';
import { Experience } from './models/experience';

export default function Home() {
  const icons = ['logo-github', 'logo-linkedin', 'logo-instagram'];

  const experience: Experience[] = useExperience();

  return (
    <>
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200">
          <Link href={'/'}>Tom Harris</Link>
        </h1>
        <h2 className="text-slate-200 mt-3 tracking-tight font-medium text-lg">
          Software Developer
        </h2>
        <p className="mt-4 max-w-sm">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
        <ul className="flex flex-row gap-3 mt-8">
          {icons.map((icon) => (
            <li key={icon}>
              <ion-icon style={{ fontSize: '24px' }} name={icon} />
            </li>
          ))}
        </ul>
      </header>
      <main className="pt-24">
        <section id="about">
          <h3 className=" text-sm tracking-widest uppercase font-bold text-slate-200">
            About
          </h3>
          <p className="mt-3">
            Experienced software developer with a background in both back-end
            and front-end development, including React and .NET technologies. I
            enjoy the creativity and stimulation of coding, and thrive on the
            collaborative benefits of working in an agile environment. Seeking a
            new position to continue learning and development.
          </p>
        </section>
        <section id="experience">
          <h3 className="mt-16 text-sm tracking-widest uppercase font-bold text-slate-200">
            Experience
          </h3>
          {experience.map((experience) => {
            return (
              <div key={experience.id} className="mt-6">
                <a href={experience.url} target="_blank" rel="noreferrer">
                  <p className="mt-1 mb-2 uppercase text-sm font-bold tracking-wide">
                    {experience.from.toLocaleDateString('en-GB', {
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    -{' '}
                    {experience.current
                      ? 'Present'
                      : experience.to.toLocaleDateString('en-GB', {
                          month: 'short',
                          year: 'numeric',
                        })}
                  </p>
                  <h4 className="text-slate-200 font-medium tracking-tight text-xl">
                    {experience.title} {'•'} {experience.company}
                  </h4>

                  <p className="mt-2">{experience.description}</p>
                  <ul>
                    {experience.tools &&
                      experience.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                  </ul>
                </a>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
