import { Experience } from "../models/experience";
import { Karla } from "next/font/google";
import Pill from "./Pill";
import TextLink from "./TextLink";

const karla = Karla({ subsets: ["latin"] });

export default async function ExperienceList({
  experiences,
}: {
  experiences: Experience[];
}) {
  return experiences.map((experience) => {
    return (
      <div
        key={experience.id}
        className="mb-12 last:mb-0 md:grid md:grid-cols-8 md:gap-4"
      >
        <p
          className={
            "mb-2 mt-1 cursor-default text-sm font-bold uppercase text-stone-500 md:col-span-2"
          }
        >
          {new Date(experience.from).toLocaleDateString("en-GB", {
            month: "short",
            year: "numeric",
          })}{" "}
          -{" "}
          {experience.current
            ? "Present"
            : new Date(experience.to).toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })}
        </p>
        <div className="md:col-span-6">
          <h4
            className={`${karla.className} text-xl font-medium tracking-tight`}
          >
            {experience.title} {"•"} {experience.company}
          </h4>
          <p className="mt-2">{experience.description}</p>
          <br />

          <TextLink url={experience.url} />

          <ul className="mt-2 flex flex-wrap">
            {experience.tools &&
              experience.tools
                .sort((a, b) => a.localeCompare(b))
                .map((tool, id) => (
                  <li key={`tool${id.toString()}`}>
                    <Pill text={tool} />
                  </li>
                ))}
          </ul>
        </div>
      </div>
    );
  });
}
