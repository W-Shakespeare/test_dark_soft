import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement | null>, // Используем RefObject для div
  ignoreRef: RefObject<HTMLDivElement | null> | null = null, // Используем RefObject для div
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (
          ignoreRef?.current &&
          ignoreRef.current.contains(event.target as Node)
        ) {
          return;
        }
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, ignoreRef, onClickOutside]);
};
