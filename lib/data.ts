import animeRadar from "@/public/anime-radar.png";
import battleship from "@/public/battleship.png";
import resolute from "@/public/resolute.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "E-commerce and Development Strategy Specialist / Co-founder",
    location: "Kraków",
    company: "Dotigo",
    description: `I worked on integrating an inventory system (BaseLinker) with online platforms such as Allegro, Shopee, and Erli in a startup environment. My responsibilities included creating detailed product listings based on technical documentation, providing technical support for customers, and developing a shop website using PrestaShop.`,
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },

  {
    title: "E-commerce and Development Strategy Specialist / Co-founder",
    location: "Kraków",
    company: "Dotigo",
    description: `I worked on integrating an inventory system (BaseLinker) with online platforms such as Allegro, Shopee, and Erli in a startup environment. My responsibilities included creating detailed product listings based on technical documentation, providing technical support for customers, and developing a shop website using PrestaShop.`,
    icon: React.createElement(LuGraduationCap),
    date: "2022 - now",
  },
  {
    title: "Senior Information Technology Analyst",
    location: "Krakow",
    company: "HCL Tech",
    description:
      "I provided support on helpdesk queries for employees at a leading sports equipment company, undertaking tasks such as configuring equipment and managing software installation, reinstallation, or updates.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Student Internship - Calibration",
    location: "Poznań",
    company: "Airoptic Sp. z o.o.",
    description:
      "I contributed to the calibration of high-performance tunable diode laser gas analyzers and produced comprehensive technical documentation in English.",
    icon: React.createElement(FaReact),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "Resolute",
    description:
      "The Fullstack Issue Tracker App that allows users to efficiently manage issues.",
    tags: [
      "React",
      "Next.js",
      "MySQL",
      "Tailwind",
      "Prisma",
      "Prisma",
      "Vitest",
    ],
    imageUrl: resolute,
  },
  {
    title: "Anime Radar",
    description:
      "Anime Radar allows anime enthusiasts to explore and discover animes.",
    tags: [
      "React",
      "TypeScript",
      "Chakra UI",
      "Zustand",
      "React Router",
      "React Query",
    ],
    imageUrl: animeRadar,
  },
  {
    title: "Battleship",
    description:
      "My rendition of a classic Battleship game built with vanilla JavaScript, HTML and CSS.",
    tags: ["JavaScript", "HTML", "CSS", "Jest", "Webpack", "ESLint"],
    imageUrl: battleship,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Chakra UI",
  "Radix UI",
  "Zod",
  "Zustand",
  "Vitest",
  "Jest",
  "React Hook Form",
  "React Router",
  "React Query",
  "English",
] as const;
