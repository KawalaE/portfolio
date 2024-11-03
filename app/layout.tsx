import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
