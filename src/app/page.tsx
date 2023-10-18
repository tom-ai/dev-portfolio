import Link from 'next/link';
import useExperience from './hooks/useExperience';
import Pill from './components/Pill';
import useProjects from './hooks/useProjects';
import Image from 'next/image';
import { Karla } from 'next/font/google';

const karla = Karla({ subsets: ['latin'] });

export default function Home() {
  const icons = ['logo-github', 'logo-linkedin', 'logo-instagram'];

  const experience = useExperience();
  const projects = useProjects();

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-6">
      <div className="lg:flex lg:gap-8 lg:justify-between">
        <header className="lg:sticky lg:py-24 py-12 md:py-12 lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between">
          <div>
            <h1
              className={`${karla.className} text-4xl md:text-5xl font-bold tracking-tighter`}
            >
              <Link href={'/'}>Tom Harris</Link>
            </h1>
            <h2
              className={`mt-3 tracking-tight font-medium text-lg md:text-xl`}
            >
              Software Developer
            </h2>
            <p className="mt-4 max-w-sm">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>
          <ul className="flex flex-row gap-3 mt-8">
            {icons.map((icon) => (
              <li key={icon}>
                <ion-icon style={{ fontSize: '24px' }} name={icon} />
              </li>
            ))}
          </ul>
        </header>
        <main className="lg:w-1/2 lg:py-24">
          <section id="about" className="py-12 lg:py-0">
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
            {experience.map((experience, index) => {
              return (
                <div
                  key={experience.id}
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
          <section id="projects" className="py-12">
            <h3
              className={`${karla.className} mb-6 text-md tracking-widest uppercase font-bold`}
            >
              Projects
            </h3>
            {projects.map((project) => {
              return (
                <div
                  key={project.id}
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
                        project.tools.map((tool) => (
                          <li key={tool}>
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
          <footer className="mt-16">
            <small>
              I hope you've enjoyed my webite! Built with Next.js and Tailwind
              CSS, depoloyed on Vercel.
            </small>
          </footer>
        </main>
      </div>
    </div>
  );
}
