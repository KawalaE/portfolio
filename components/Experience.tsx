"use client";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/lib/hook";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Heading from "./Heading";

const Experience = () => {
  const { ref } = useSectionInView(0.2, "Experience");
  return (
    <section ref={ref} id="experience" className="scroll-mt-28">
      <Heading>My Experience</Heading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0, 0, 0.1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <div className="flex gap-2 items-center">
                <p className="font-normal mt-0">{item.location}</p>
                <p className="font-normal mt-0">{item.company}</p>
              </div>

              <p className="!font-normal !mt-1 text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
