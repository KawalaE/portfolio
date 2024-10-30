import { projectsData } from "@/lib/data";
import React from "react";
import Heading from "./Heading";
import Project from "./Project";

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
