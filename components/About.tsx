"use client";
import { motion } from "framer-motion";
import Heading from "./Heading";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
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
        . During this time, I rediscovered my passion for coding specifically on
        the frontend side, which was a completely different experience from the
        technologies I was introduced to at university. I&apos;ve been honing my
        skills through online courses and tutorials on platforms like{" "}
        <span className="font-medium">Udemy</span> and YouTube channels such as{" "}
        <span className="font-medium">Traversy Media</span>,{" "}
        <span className="font-medium">FireShip</span> and{" "}
        <span className="font-medium">ColorCode</span>.
      </p>
      <p>
        I also draw a lot of inspiration from the people I meet at events like
        <span className="font-medium"> meetJS</span> and through my recent
        <span className="font-medium">
          {" "}
          volunteering for{" "}
          <a
            href="https://www.futureconf.tech/"
            target="_blank"
            className="underline"
          >
            FutureConf
          </a>
        </span>
        . These experiences motivate me to keep improving, learning new skills
        like video editing and offer valuable opportunities to collaborate with
        individuals at different levels of experience.
      </p>
    </motion.section>
  );
};

export default About;
