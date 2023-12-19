import useProjects from './hooks/useProjects';
import Pill from './components/Pill';
import Image from 'next/image';
import { Karla, JetBrains_Mono } from 'next/font/google';
import Header from './components/header/Header';
import useAppData from './hooks/useAppData';
import ExperienceList from './components/ExperienceList';
import { WorkExperience, Project } from './models/strapi/models';
import ProjectsList from './components/ProjectsList';
import { Experience } from './models/experience';
import useExperience from './hooks/useExperience';

const karla = Karla({ subsets: ['latin'] });
const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default async function Home() {
  const { about } = useAppData();

  const experiences = await useExperience();
  const projects = await useProjects();

  return (
    <>
      <div className="min-h-screen max-w-screen-xl mx-auto px-6">
        <div className="lg:flex lg:gap-8 lg:justify-between">
          <Header />
          <main className="lg:w-1/2 lg:py-24 snap-y snap-mandatory ">
            <section id="about" className="py-12 lg:pt-0 snap-start ">
              <h3
                className={`${jetBrains.className} lg:hidden  mb-6 text-md tracking-widest uppercase font-bold `}
              >
                About
              </h3>
              <p>{about}</p>
            </section>
            <section id="experience" className="py-12 snap-start">
              <h3
                className={`${karla.className} mb-6 text-md tracking-widest uppercase font-bold `}
              >
                Experience
              </h3>
              {experiences && <ExperienceList experiences={experiences} />}
            </section>
            <section id="projects" className="py-12 snap-start">
              <h3
                className={`${karla.className} mb-6 text-md tracking-widest uppercase font-bold`}
              >
                Projects
              </h3>
              {projects && <ProjectsList projects={projects} />}
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
