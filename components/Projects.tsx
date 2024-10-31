"use client";
import { projectsData } from "@/lib/data";
import useSectionInView from "@/lib/hook";
import React from "react";
import Heading from "./Heading";
import Project from "./Project";

const Projects = () => {
  const { ref } = useSectionInView(0.55, "Projects");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
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
