"use client";
import { useActiveSectionContext } from "@/context/active-section";
import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
import Project from "./Project";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.55,
  });
  const { setActiveHeader } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveHeader("Projects");
    }
  }, [inView, setActiveHeader]);

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
