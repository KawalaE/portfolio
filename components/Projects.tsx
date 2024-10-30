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
    <section className="bg-gray-100 border group border-black/5 overflow-hidden sm:pr-8 relative sm:h-[18rem] max-w-[42rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition">
      <div className="pt-4  pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
        {" "}
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] text-white uppercase tracking-wider rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={`Project ${title}`}
        quality={95}
        className="absolute top-12 
        -right-40 w-[28.25rem] 
        rounded-lg shadow-2xl 
        group-even:right-[initial]
         group-even:-left-40 
         group-hover:-translate-x-3 
         group-hover:-translate-y-3 
         group-hover:-rotate-2 
         transition
         group-hover: scale-[1.04]

         group-even:group-hover:translate-x-3 
         group-even:group-hover:rotate-2 
         "
      ></Image>
    </section>
  );
};
