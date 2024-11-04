import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Switch from "@/components/Switch";
import ActiveSectionContextProvider from "@/context/active-section";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edyta | Frontend Developer",
  description:
    "I am a fronted developer with experience in React, Next.js and JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/e_fav.png" type="image/png" />
      </head>
      <body
        className={`${inter.className} dark:bg-slate-900 bg-gray-50 dark:text-gray-200 text-gray-950 pt-28 sm:pt-36`}
      >
        <div className="bg-[#bcfdfd] dark:bg-[#276d6d] fixed top-[-6rem] left-[50%] h-[31.25rem] w-[45rem] rounded-full -z-10 blur-[12rem] -translate-x-[30rem]" />
        <div className="bg-[#f3d0fc] dark:bg-[#552d5f] fixed top-[-6rem] left-[50%] h-[31.25rem] w-[45rem] rounded-full -z-10 blur-[12rem]  -translate-x-[10rem]" />

        <ActiveSectionContextProvider>
          <Switch />
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
