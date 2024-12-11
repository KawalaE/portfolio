import animeRadar from "@/public/anime-radar.png";
import battleship from "@/public/battleship.png";
import chakraUI from "@/public/chakraui.png";
import cssIcon from "@/public/css-3.png";
import eslintIcon from "@/public/eslint.svg";

import gitIcon from "@/public/git.png";
import htmlIcon from "@/public/html-5.png";
import jestIcon from "@/public/jest.png";
import jsIcon from "@/public/js.png";
import mswIcon from "@/public/msw-logo.svg";
import nextIcon from "@/public/nextjs-icon.png";
import npmIcon from "@/public/npm.png";
import prettierIcon from "@/public/prettier.svg";
import prismaIcon from "@/public/prisma.png";
import radixIcon from "@/public/radix.png";
import reactHookForm from "@/public/react-hook-form.png";
import reactQueryIcon from "@/public/react-query.png";
import reactIcon from "@/public/react.png";
import resolute from "@/public/resolute.png";
import tailwindIcon from "@/public/tailwind.png";
import tsIcon from "@/public/ts.png";
import vercelIcon from "@/public/vercel.png";
import vitestIcon from "@/public/vitest.png";
import webpackIcon from "@/public/webpack-icon.png";
import zodIcon from "@/public/zod.png";
import zustandIcon from "@/public/zustand.png";

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
    title: "Staff of FutureConf",
    location: "Kraków",
    company: "Future Conf",
    description: `I created promotional content, including ads, memes, social media posts, and short films, to boost event visibility. As a frontend developer, I built a web application used in an advertising video. I collaborated closely with the design team, using Canva for creative projects, and produced engaging promotional materials, gaining experience in digital marketing, event promotion, and technical topics.`,
    icon: "/future.png",
    date: "2024",
  },
  {
    title: "E-commerce and Development Strategy Specialist / Co-founder",
    location: "Kraków",
    company: "Dotigo",
    description: `As a co-founder in a startup environment, I am responsible for integrating our inventory system (BaseLinker) with platforms like Allegro, Shopee, and Erli. My role includes creating detailed product listings from technical documentation, providing technical support for customers, developing our shop website using PrestaShop, and automating key tasks with Python scripts to streamline operations and minimize manual work.`,
    icon: "/dotigo.webp",
    date: "2022 - now",
  },
  {
    title: "Senior Information Technology Analyst",
    location: "Kraków",
    company: "HCL Tech",
    description:
      "At HCL, I worked as a Senior IT Analyst, providing helpdesk support for employees at a leading sports equipment retailer. My responsibilities included configuring equipment, managing software installations, reinstallations, and updates, with a focus on POS devices in retail stores. This role allowed me to develop strong troubleshooting skills and deliver effective technical support in a dynamic corporate and retail environment.",
    icon: "/hcl.png",
    date: "2021-2022",
  },
  {
    title: "Bachelor of Engineering in Automatic Control and Robotics",
    location: "",
    company: "Poznan University of Technology",
    description:
      "My studies covered key courses such as electronics, programming in C and C++, and MATLAB, which built a solid foundation in automation, control systems, and robotics. Through this program, I gained hands-on experience in programming, circuit design, and system modeling, equipping me with both technical and analytical skills essential for engineering complex automated systems.",
    icon: "/pp.png",
    date: "2017-2021",
  },
  {
    title: "Student Internship - Calibration",
    location: "Poznań",
    company: "Airoptic Sp. z o.o.",
    description:
      "Selected as one of the top students for a competitive internship, I contributed to the calibration of high-performance tunable diode laser gas analyzers. My work involved precise adjustments and testing, as well as producing comprehensive technical documentation in English to support ongoing quality and performance standards. This experience allowed me to develop specialized skills in calibration and technical reporting for advanced instrumentation.",
    icon: "/airoptic.png",
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
    siteUrl: "https://resolute-topaz.vercel.app/",
    repoUrl: "https://github.com/KawalaE/Resolute",
    imageUrl: resolute,
  },
  {
    title: "Anime Radar",
    description:
      "Anime Radar allows anime enthusiasts to explore and discover animes.",
    siteUrl: "https://anime-radar.vercel.app/",
    repoUrl: "https://github.com/KawalaE/anime-radar",
    imageUrl: animeRadar,
  },
  {
    title: "Battleship",
    description:
      "My rendition of a classic Battleship game built with vanilla JavaScript, HTML and CSS.",
    siteUrl: "https://kawalae.github.io/Battleship/",
    repoUrl: "https://github.com/KawalaE/Battleship",
    imageUrl: battleship,
  },
] as const;

export const skillsData = [
  { name: "React", img: reactIcon },
  { name: "Next.js", img: nextIcon },
  { name: "HTML", img: htmlIcon },
  { name: "CSS", img: cssIcon },
  { name: "JavaScript", img: jsIcon },
  { name: "TypeScript", img: tsIcon },
  { name: "Git", img: gitIcon },
  { name: "Npm", img: npmIcon },
  { name: "Vercel", img: vercelIcon },
  { name: "Tailwind", img: tailwindIcon },
  { name: "Prisma", img: prismaIcon },
  { name: "Jest", img: jestIcon },
  { name: "Webpack", img: webpackIcon },
  { name: "Vitest", img: vitestIcon },
  { name: "Chakra UI", img: chakraUI },
  { name: "Radix UI", img: radixIcon },
  { name: "Zod", img: zodIcon },
  { name: "React Query", img: reactQueryIcon },
  { name: "React Router", img: null },
  { name: "Zustand", img: zustandIcon },
  { name: "React Hook Form", img: reactHookForm },
  { name: "Mock Service Worker", img: mswIcon },
  { name: "Prettier", img: prettierIcon },
  { name: "ESLint", img: eslintIcon },
] as const;
