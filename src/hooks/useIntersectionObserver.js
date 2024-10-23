import { useCallback, useRef } from "react";

function useIntersectionObserver(action, threshold) {
  const observer = useRef(null);

  const intersectionRef = useCallback(
    (node) => {
      if (!node) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          action(!entries[0].isIntersecting);
        },
        {
          threshold,
        }
      );

      observer.current.observe(node);
    },
    [action, threshold]
  );

  return intersectionRef;
}

export default useIntersectionObserver;
