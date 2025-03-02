import { useEffect, useState } from "react";

const useVisibility = <T extends HTMLElement>(
  targetRef: React.RefObject<T | null>
) => {
  const [isVisible, setIsVisible] = useState(true);

  const checkVisibility = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // сразу проверяем видимость

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return isVisible;
};

export default useVisibility;
