"use client";
import useSectionInView from "@/lib/hook";
import { motion } from "framer-motion";
import Heading from "./Heading";

const About = () => {
  const { ref } = useSectionInView(0.85, "About");
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      id="about"
    >
      <Heading>About me</Heading>
      <p className="mb-3">
        {" "}
        I am a self taught Frontend Developer with a background in{" "}
        <span className="font-medium">Automatic Control and Robotics</span>,
        where I was first introduced to coding. While I enjoyed many aspects of
        my studies, I found myself most captivated by subjects that involved
        programming. After earning my BEng,{" "}
        <span className="font-medium">
          I co-founded an e-commerce company - Dotigo
        </span>
        . During this time I have rediscovered my passion for coding
        specifically on the frontend side. I&apos;ve been honing my skills
        through online courses and tutorials on platforms like{" "}
        <span className="font-medium">Udemy</span> and YouTube channels such as{" "}
        <span className="font-medium">Traversy Media</span>,{" "}
        <span className="font-medium">FireShip</span> and{" "}
        <span className="font-medium">ColorCode</span>.
      </p>
      <p>
        Currently,{" "}
        <span className="font-medium">I work as a Frontend Developer</span>{" "}
        specializing in <span className="font-medium">Angular</span>, where I
        contribute to the development and maintenance of a commercial med-tech
        healthcare services applications for healthcare professionals.
      </p>
      <p>
        I also draw a lot of inspiration from the people I meet at events like
        <span className="font-medium"> meetJS</span>,{" "}
        <span className="font-medium">HackYeah</span> and proud staff member of
        recent
        <span className="font-medium">
          {" "}
          <a
            href="https://www.futureconf.tech/"
            target="_blank"
            className="underline"
          >
            FutureConf
          </a>
        </span>
        . I thrive when there is a challenge — whether it's deepening my
        frontend skills, figuring out a new bassline, or keeping my ever-growing
        plant collection alive.
      </p>
    </motion.section>
  );
};

export default About;
