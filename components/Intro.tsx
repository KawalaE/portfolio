"use client";
import { useActiveSectionContext } from "@/context/active-section";
import useSectionInView from "@/lib/hook";
import me from "@/public/me.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const { ref } = useSectionInView(0.75, "Home");
  const { setActiveHeader, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="flex  items-center flex-col justify-center max-w-[50rem] mb-28 sm:mb-0  flex-wrap sm:flex-nowrap tracking-tighter scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center flex-wrap sm:flex-nowrap ">
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
              className="rounded-full object-cover border-[0.35rem] border-white   shadow-xl"
            ></Image>
          </motion.div>
        </div>
        <div className="flex flex-col items-center mb-10 gap-5">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 px-4 text-xl font-medium leading-[1.5] sm:text-2xl "
          >
            <span className="font-bold">Hi, I&apos;m Edyta! </span>
            <br />
            <span>
              I&apos;m a <b>frontend developer</b>. I enjoy learning new
              technologies and enhancing my skills. <br />I have experience with{" "}
              <u>React</u> and <u>Next.js</u>, along with professional
              experience working with <u>Angular</u>.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
            }}
            className="flex gap-5 sm:flex-nowrap flex-wrap items-center"
          >
            <div className="flex sm:flex-row flex-col gap-5">
              <Link
                className="bg-gray-900 group text-white px-5 py-2 rounded-full flex justify-center items-center gap-2 outline-none
                hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
                href="#contact"
                onClick={() => {
                  setActiveHeader("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here{" "}
                <FaArrowRightLong
                  className="opacity-70 group-hover:translate-x-1 transition"
                  size={15}
                />
              </Link>
              <a
                href="/Edyta Kawala CV.pdf"
                download
                className="bg-white dark:bg-white/10 px-5 py-2 group flex items-center sm:w-auto gap-2 rounded-full outline-none
                hover:scale-[1.15] active:scale-[1.15] transition-all cursor-pointer borderBlack"
              >
                Download CV{" "}
                <HiDownload
                  className="opacity-60 group-hover:translate-y-0.5 transition "
                  size={17}
                />
              </a>
            </div>
            <div className="flex sm:flex-row flex-col gap-5 ">
              <a
                href="https://www.linkedin.com/in/edyta-kawala/"
                target="_blank"
                className="bg-white  dark:bg-white/10  px-3 py-3 flex items-center gap-2 rounded-full hover:scale-[1.15]  active:scale-105 transition-all cursor-pointer borderBlack"
              >
                <FaLinkedin className="opacity-70" size={20} />
              </a>
              <a
                href="https://github.com/KawalaE"
                target="_blank"
                className="bg-white  dark:bg-white/10 px-3 py-3 flex items-center gap-2 rounded-full hover:scale-[1.15] active:scale-105 transition-all cursor-pointer borderBlack"
              >
                <FaGithub className="opacity-70 " size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
