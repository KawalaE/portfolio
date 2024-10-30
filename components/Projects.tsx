import { projectsData } from "@/lib/data";
import Image from "next/image";
import Heading from "./Heading";
const Projects = () => {
  return (
    <section>
      <Heading>Recent Projects</Heading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <section className="bg-gray-100 border-black/5 overflow-hidden sm:pr-8 relative">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] text-white uppercase tracking-wider rounded-full"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Image
        src={imageUrl}
        alt={`Project ${title}`}
        quality={95}
        className="absolute top-8 -right-40"
      ></Image>
    </section>
  );
};
