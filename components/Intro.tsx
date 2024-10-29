"use client";
import me from "@/public/me.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
const Intro = () => {
  return (
    <section className="flex items-center justify-center max-w-[50rem] mb-28 sm:mb-0  flex-wrap sm:flex-nowrap tracking-tighter">
      <div className="flex items-center justify-center w-4/5">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={me}
            alt="Portrait"
            height="192"
            width="192"
            quality="95"
            priority={true}
            className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          ></Image>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-xl font-medium leading-[1.5] sm:text-2xl text-justify"
      >
        <span className="font-bold">Hi, I&apos;m Edyta! </span>
        <br />
        <span>
          I&apos;m a <b>frontend developer</b> with two years of coding
          experience in JavaScript. I enjoy learning new technologies and
          enhancing my skills. My focus is <u>React and Next.js</u>.
        </span>
      </motion.p>
    </section>
  );
};

export default Intro;
