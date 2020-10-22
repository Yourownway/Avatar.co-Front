import { useState } from "react";

export default function useAuthPage() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };
  return { display, handleClick };
}
