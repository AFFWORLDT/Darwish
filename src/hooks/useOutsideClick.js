import { useEffect, useRef } from "react";

function useOutsideClick(action) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) action();
    }

    window.addEventListener("click", handleClick, true);

    return () => window.removeEventListener("click", handleClick, true);
  }, [action]);

  return ref;
}

export default useOutsideClick;
