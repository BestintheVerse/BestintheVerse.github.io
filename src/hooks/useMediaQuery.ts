import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(false);

  const handler = (e: MediaQueryListEvent) => {
    const { matches } = e;
    setMatch(matches);
  };

  useEffect(() => {
    const matchQuery = window.matchMedia(query);
    setMatch(matchQuery.matches);
    matchQuery.addEventListener("change", handler);
    return () => {
      matchQuery.removeEventListener("change", handler);
    };
  }, [query]);

  return match;
};

export default useMediaQuery;
