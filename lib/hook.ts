import { SectionName, useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function useSectionInView(threshold: number, section: SectionName) {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveHeader, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveHeader(section);
    }
  }, [inView, setActiveHeader, timeOfLastClick]);

  return { ref };
}
export default useSectionInView;
