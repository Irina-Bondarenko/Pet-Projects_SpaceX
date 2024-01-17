import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollToSection = () => {
  const scrollToSectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (scrollToSectionRef.current instanceof HTMLDivElement) {
      setOffset(10);
    }
  }, []);

  const scrollToSection = useCallback(() => {
    if (scrollToSectionRef.current) {
      const topPosition =
        scrollToSectionRef.current.getBoundingClientRect().top -
        offset +
        window.scrollY;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  }, [offset]);

  return {
    scrollToSectionRef,
    scrollToSection,
  };
};
