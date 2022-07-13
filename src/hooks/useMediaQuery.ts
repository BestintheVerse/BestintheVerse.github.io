import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(false);

  const handler = (e: MediaQueryListEvent) => {
    const { matches } = e;
    setMatch(matches);
  };

  useEffect(() => {
    window.matchMedia(query).addEventListener("change", handler);
    return () => {
      window.matchMedia(query).removeEventListener("change", handler);
    };
  }, [query]);

  return match;
};

export default useMediaQuery;
