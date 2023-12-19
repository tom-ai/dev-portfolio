import { Karla } from "next/font/google";
import Header from "./components/header/Header";
import ExperienceList from "./components/ExperienceList";
import ProjectsList from "./components/ProjectsList";
import useAppData from "./hooks/useAppData";
import useProjects from "./hooks/useProjects";
import useExperience from "./hooks/useExperience";
import SectionHeading from "./components/SectionHeading";

const karla = Karla({ subsets: ["latin"] });

export default async function Home() {
  const { about } = useAppData();

  const experiences = await useExperience();
  const projects = await useProjects();

  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 lg:px-12">
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Header />
          <main className="lg:w-2/3 lg:py-24">
            <section id="about" className="py-12 lg:pt-0 ">
              <SectionHeading text="About" hiddenOnLg />
              <p>{about}</p>
            </section>
            <section id="experience" className="py-12">
              <SectionHeading text="Experience" />
              {experiences && <ExperienceList experiences={experiences} />}
            </section>
            <section id="projects" className="py-12">
              <SectionHeading text="Projects" />
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
