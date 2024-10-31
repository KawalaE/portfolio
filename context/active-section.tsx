"use client";
import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeHeader: SectionName;
  setActiveHeader: React.Dispatch<React.SetStateAction<SectionName>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeHeader, setActiveHeader] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeHeader,
        setActiveHeader,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used withn an ActiveSectionProvider"
    );
  }
  return context;
}
