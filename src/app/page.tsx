import useProjects from './hooks/useProjects';
import Pill from './components/Pill';
import Image from 'next/image';
import { Karla } from 'next/font/google';
import Header from './components/header/Header';
import useAppData from './hooks/useAppData';
import ExperienceList from './components/ExperienceList';
import { WorkExperience, Project } from './models/strapi/models';
import ProjectsList from './components/ProjectsList';

const karla = Karla({ subsets: ['latin'] });

async function getExperiences(): Promise<{ data: WorkExperience[] }> {
  // udpate to revalidate every 1 hour
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/work-experiences?populate=*`,
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }
  return res.json();
}

async function getProjects(): Promise<{ data: Project[] }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}

export default async function Home() {
  const { about } = useAppData();

  const experiences = await getExperiences();
  const projects = await getProjects();

  return (
    <>
      <div className="min-h-screen max-w-screen-xl mx-auto px-6">
        <div className="lg:flex lg:gap-8 lg:justify-between">
          <Header />
          <main className="lg:w-1/2 lg:py-24 ">
            <section id="about" className="py-12 lg:pt-0 ">
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
              {projects && <ProjectsList projects={projects.data} />}
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
