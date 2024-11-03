"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  siteUrl,
  repoUrl,
  imageUrl,
}: ProjectProps) => {
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
          <div className="flex  gap-3 mt-2 flex-wrap">
            <a
              href={siteUrl}
              target="_blank"
              className="bg-gray-500  text-white px-5 py-2 rounded-full gap-2 outline-none
                hover:scale-110 hover:bg-gray-700 active:scale-105 transition-all"
            >
              View site!
            </a>
            <a
              href={repoUrl}
              target="_blank"
              className="bg-gray-500 flex items-center text-white px-5 py-2 rounded-full gap-2 outline-none
                hover:scale-110 hover:bg-gray-700 active:scale-105 transition-all cursor-pointer"
            >
              Go to repo <FaGithub />
            </a>
          </div>
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
