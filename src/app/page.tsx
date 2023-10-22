import useProjects from './hooks/useProjects';
import Pill from './components/Pill';
import Image from 'next/image';
import { Karla } from 'next/font/google';
import Header from './components/header/Header';
import useAppData from './hooks/useAppData';
import ExperienceList from './components/ExperienceList';
import { WorkExperience } from './models/strapi/models';

const karla = Karla({ subsets: ['latin'] });

async function getExperiences(): Promise<{ data: WorkExperience[] }> {
  // udpate to revalidate every 1 hour
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/work-experiences?populate=*`,
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }
  return res.json();
}

export default async function Home() {
  const { about } = useAppData();

  const experiences = await getExperiences();

  console.log(experiences.data);
  return (
    <>
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
              <p>{about}</p>
            </section>
            <section id="experience" className="py-12">
              <h3
                className={`${karla.className} mb-6 text-md tracking-widest uppercase font-bold `}
              >
                Experience
              </h3>
              {experiences && <ExperienceList experiences={experiences.data} />}
            </section>
            <section id="projects" className="py-12">
              <h3
                className={`${karla.className} mb-6 text-md tracking-widest uppercase font-bold`}
              >
                Projects
              </h3>
              {/* {projects.map((project, i) => {
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
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
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
              })} */}
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
      <div className="background-pattern"></div>
    </>
  );
}
