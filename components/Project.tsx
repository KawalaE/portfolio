"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section className="bg-gray-100 border  border-black/5 overflow-hidden sm:pr-8 relative sm:h-[18rem] max-w-[42rem]  hover:bg-gray-200 transition">
        <div className="pt-4  pb-7 px-5 rounded-lg sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem] ">
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
    </motion.div>
  );
};
export default Project;
