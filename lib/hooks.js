"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/section-context.jsx";

export function useActiveSection(section, threshold = 0.7) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1200) {
      setActiveSection(section);
    }
  }, [inView, timeOfLastClick]);

  return {
    ref,
  };
}
