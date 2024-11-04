"use client";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";

type Theme = "light" | "dark";

const Switch = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    }
  }, []);
  return (
    <button
      className="fixed bottom-5 right-5 bg-white 
    rounded-full w-[3rem] h-[3rem] bg-opacity-80 
    backdrop:blur-[0.5rem] border-white 
    border-opacity-40 shadow-2xl flex 
    items-center justify-center hover:scale-[1.15]
    active:scale-105 transition-all z-[999] "
      onClick={() => themeHandler()}
    >
      {theme === "light" ? <BsSun /> : <IoMoonOutline />}
    </button>
  );
};

export default Switch;
