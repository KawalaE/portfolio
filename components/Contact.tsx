"use client";
import useSectionInView from "@/lib/hook";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import Heading from "./Heading";

const Contact = () => {
  const { ref } = useSectionInView(0.5, "Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
    >
      <Heading>Contact me</Heading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:edyta.wer.kawala@gmail.com">
          edyta.wer.kawala@gmail.com
        </a>{" "}
        or trough this form.
      </p>
      <form className="mt-10 flex flex-col ">
        <input
          className="h-14 rounded-lg borderBlack px-4"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack px-4 py-4 "
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="flex items-center group justify-center gap-2 h-[2.5rem] w-[6.5rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-[1.15] active:scale-[1.15]  cursor-pointer borderBlack"
        >
          Send{" "}
          <FiSend className="opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
