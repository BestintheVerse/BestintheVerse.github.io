import { useEffect, useState } from "react";

const useScrollAt = (position: number): boolean => {
  const [isAtPosition, setIsAtPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (_e: Event) => {
      if (
        document.body.scrollTop > position ||
        document.documentElement.scrollTop > position
      ) {
        setIsAtPosition(true);
      } else {
        setIsAtPosition(false);
      }
    });
  });

  return isAtPosition;
};

export default useScrollAt;
