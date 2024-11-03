"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { PiEye, PiEyeClosed } from "react-icons/pi";

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
  const [isOver, setIsOver] = useState(false);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group flex flex-col"
    >
      <section className=" bg-gray-100 border flex flex-col sm:flex-row  border-black/5 overflow-hidden  items-center sm:pr-8 sm:relative sm:h-[18rem] max-w-[42rem]  hover:bg-gray-200 transition">
        <div className="pt-4  pb-7 px-5 rounded-lg sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem] ">
          {" "}
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <div className="flex gap-3 mt-2 flex-wrap">
            <a
              href={siteUrl}
              onMouseOver={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
              target="_blank"
              className="bg-gray-900  flex items-center text-white px-5 py-2 rounded-full gap-2 outline-none
                hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
            >
              View site! {isOver && <PiEye className="opacity-70" />}{" "}
              {!isOver && <PiEyeClosed className="opacity-70" />}
            </a>
            <a
              href={repoUrl}
              target="_blank"
              className="bg-gray-900 flex items-center text-white px-5 py-2 rounded-full gap-2 outline-none
                hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all cursor-pointer"
            >
              Go to repo <FaGithub className="opacity-70" />
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={`Project ${title}`}
          quality={95}
          className="sm:absolute top-12 

        -right-40 w-[28.25rem] 
        shadow-2xl rounded-lg
        group-even:right-[initial]
         group-even:-left-40 
         
         sm:group-hover:-translate-y-11 
   
         sm:transition
         sm:group-hover:scale-[1.04]
         sm:group-hover:rounded-none
  
         "
        ></Image>
      </section>
    </motion.div>
  );
};
export default Project;
