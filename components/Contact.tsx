"use client";
import { sendEmail } from "@/actions/sendEmail";
import useSectionInView from "@/lib/hook";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "./Heading";
import SubmitBtn from "./SubmitBtn";

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
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (data?.data !== null) {
            toast.success("Email was sent!");
          } else if (data.error || error) toast.error("Something went wrong");
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4"
          type="email"
          name="senderEmail"
          maxLength={500}
          required
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack px-4 py-4 "
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        ></textarea>

        <SubmitBtn />
      </form>
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
