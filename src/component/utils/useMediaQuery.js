import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState("");

  useEffect(() => {
    const media = window.matchMedia(query);
    console.log(media);
    if (media.matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}

export default useMediaQuery;