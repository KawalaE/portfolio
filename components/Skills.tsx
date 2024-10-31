"use client";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hook";
import { motion } from "framer-motion";
import Heading from "./Heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView(0.75, "Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <Heading>My Skills</Heading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-4 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {" "}
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
