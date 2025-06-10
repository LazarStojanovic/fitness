import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToElement = useCallback(
    (elementId: string, offset: number = 80) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    []
  );

  return { scrollToElement };
};
