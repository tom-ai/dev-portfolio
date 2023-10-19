import Link from 'next/link';
import useExperience from './hooks/useExperience';
import Pill from './components/Pill';
import useProjects from './hooks/useProjects';
import Image from 'next/image';
import { Karla } from 'next/font/google';
import Header from './components/header/Header';

const karla = Karla({ subsets: ['latin'] });

export default function Home() {
  const experience = useExperience();
  const projects = useProjects();

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-6">
      <div className="lg:flex lg:gap-8 lg:justify-between">
        <Header />
        <main className="lg:w-1/2 lg:py-24">
          <section id="about" className="py-12 lg:pt-0">
            <h3
              className={`${karla.className} lg:hidden  mb-6 text-md tracking-widest uppercase font-bold `}
            >
              About
            </h3>
            <p>
              Experienced software developer with a background in both back-end
              and front-end development, including React and .NET technologies.
              I enjoy the creativity and stimulation of coding, and thrive on
              the collaborative benefits of working in an agile environment.
              Seeking a new position to continue learning and development.
            </p>
          </section>
          <section id="experience" className="py-12">
            <h3
              className={`${karla.className} mb-6 text-md tracking-widest uppercase font-bold `}
            >
              Experience
            </h3>
            {experience.map((experience, i) => {
              return (
                <div
                  key={`experience${i.toString()}`}
                  className="mb-12 last:mb-0 md:grid md:grid-cols-8 md:gap-4"
                >
                  <p
                    className={
                      'md:col-span-2 mt-1 mb-2 uppercase text-sm font-bold text-enchantedMeadow-800'
                    }
                  >
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
                  <div className="md:col-span-6">
                    <h4
                      className={`${karla.className} hover:underline font-medium tracking-tight text-xl`}
                    >
                      <a href={experience.url} target="_blank" rel="noreferrer">
                        {experience.title} {'•'} {experience.company}
                      </a>
                    </h4>
                    <p className="mt-2">{experience.description}</p>
                    <ul className="flex flex-wrap mt-2">
                      {experience.tools &&
                        experience.tools.map((tool, i) => (
                          <li key={`tool${i.toString()}`}>
                            <Pill text={tool} />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </section>
          <section id="projects" className="py-12">
            <h3
              className={`${karla.className} mb-6 text-md tracking-widest uppercase font-bold`}
            >
              Projects
            </h3>
            {projects.map((project, i) => {
              return (
                <div
                  key={`project${i.toString()}`}
                  className="mb-12 last:mb-0 md:grid md:grid-cols-8 md:gap-4"
                >
                  <div className="md:col-span-6">
                    <h4
                      className={`${karla.className} hover:underline font-medium tracking-tight text-xl`}
                    >
                      <a href={project.url} target="_blank" rel="noreferrer">
                        {project.title}{' '}
                      </a>
                    </h4>
                    <p className="mt-2">{project.description}</p>
                    <ul className="flex flex-wrap mt-2">
                      {project.tools &&
                        project.tools.map((tool, j) => (
                          <li key={`tool${j}`}>
                            <Pill text={tool} />
                          </li>
                        ))}
                    </ul>
                  </div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={150}
                    height={100}
                    className="md:col-span-2 md:order-first mt-4 rounded-md border-enchantedMeadow-700 border-2"
                  />
                </div>
              );
            })}
          </section>
          <footer className="py-12 lg:pb-0">
            <small>
              I hope you've enjoyed my website! Built with{' '}
              <strong>Next.js</strong> and <strong>Tailwind CSS</strong>,
              deployed on <strong>Vercel</strong>.
            </small>
          </footer>
        </main>
      </div>
    </div>
  );
}
