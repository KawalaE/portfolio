"use client";
import { useThemeContext } from "@/context/theme-context";
import { BsSun } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";

const Switch = () => {
  const { theme, themeHandler } = useThemeContext();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white 
    rounded-full w-[3rem] h-[3rem] bg-opacity-80 
    backdrop-blur-[0.5rem] border border-white 
    border-opacity-40 shadow-2xl flex 
    items-center justify-center hover:scale-[1.15]
    active:scale-105 transition-all z-[999] dark:bg-gray-950"
      onClick={() => themeHandler()}
    >
      {theme === "light" ? <BsSun /> : <IoMoonOutline />}
    </button>
  );
};

export default Switch;
