import Link from 'next/link';
import useExperience from './hooks/useExperience';
import Pill from './components/Pill';
import useProjects from './hooks/useProjects';
import Image from 'next/image';

export default function Home() {
  const icons = ['logo-github', 'logo-linkedin', 'logo-instagram'];

  const experience = useExperience();
  const projects = useProjects();

  return (
    <>
      <header>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-200">
          <Link href={'/'}>Tom Harris</Link>
        </h1>
        <h2 className="text-slate-200 mt-3 tracking-tight font-medium text-lg md:text-xl">
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
              <div key={experience.id} className="mt-6 md:grid md: grid-cols-8">
                <p className="md:col-span-2 mt-1 mb-2 uppercase text-xs font-bold tracking-wide text-slate-500">
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
                <div className="col-span-6">
                  <h4 className="hover:underline text-slate-200 font-medium tracking-tight text-lg">
                    <a href={experience.url} target="_blank" rel="noreferrer">
                      {experience.title} {'•'} {experience.company}
                    </a>
                  </h4>
                  <p className="mt-2 text-sm">{experience.description}</p>
                  <ul className="flex flex-wrap mt-2">
                    {experience.tools &&
                      experience.tools.map((tool) => (
                        <li key={tool}>
                          <Pill text={tool} />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </section>
        <section id="projects">
          <h3 className="mt-16 text-sm tracking-widest uppercase font-bold text-slate-200">
            Projects
          </h3>
          {projects.map((project) => {
            return (
              <div key={project.id} className="mt-6">
                <h4 className="hover:underline text-slate-200 font-medium tracking-tight text-lg">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.title}{' '}
                  </a>
                </h4>
                <p className="mt-2 text-sm">{project.description}</p>
                <ul className="flex flex-wrap mt-2">
                  {project.tools &&
                    project.tools.map((tool) => (
                      <li key={tool}>
                        <Pill text={tool} />
                      </li>
                    ))}
                </ul>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={150}
                  height={100}
                  className="mt-4 rounded-md border-slate-600 border-2"
                />
              </div>
            );
          })}
        </section>
      </main>
      <footer className="mt-16 text-sm">
        <p>
          I hope you've enjoyed my webite! Built with Next.js and Tailwind CSS,
          depoloyed on Vercel.
        </p>
      </footer>
    </>
  );
}
