import { Karla, JetBrains_Mono } from "next/font/google";
import Header from "./components/header/Header";
import ExperienceList from "./components/ExperienceList";
import ProjectsList from "./components/ProjectsList";
import useAppData from "./hooks/useAppData";
import useProjects from "./hooks/useProjects";
import useExperience from "./hooks/useExperience";

const karla = Karla({ subsets: ["latin"] });
const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export default async function Home() {
  const { about } = useAppData();

  const experiences = await useExperience();
  const projects = await useProjects();

  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6">
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Header />
          <main className="lg:w-2/3 lg:py-24 ">
            <section id="about" className="py-12 lg:pt-0 ">
              <h3
                className={`${jetBrains.className} text-md  mb-6 font-bold uppercase tracking-widest lg:hidden `}
              >
                About
              </h3>
              <p>{about}</p>
            </section>
            <section id="experience" className="py-12">
              <h3
                className={`${karla.className} text-md mb-6 font-bold uppercase tracking-widest `}
              >
                Experience
              </h3>
              {experiences && <ExperienceList experiences={experiences} />}
            </section>
            <section id="projects" className="py-12">
              <h3
                className={`${karla.className} text-md mb-6 font-bold uppercase tracking-widest`}
              >
                Projects
              </h3>
              {projects && <ProjectsList projects={projects} />}
            </section>
            <footer className="py-12 lg:pb-0">
              <small>
                I hope you've enjoyed my website! Built with{" "}
                <strong>Next.js</strong> and <strong>Tailwind CSS</strong>,
                deployed on <strong>Vercel</strong>.
              </small>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
