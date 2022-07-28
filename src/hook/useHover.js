import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mourse over
  // mourse out
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef();
  useEffect(() => {
    const handleMourseOver = () => setHovered(true);
    const handleMourseOut = () => setHovered(false);
    const dom = nodeRef.current;
    if (nodeRef.current) {
      dom.addEventListener("mouseover", handleMourseOver);
      dom.addEventListener("mouseout", handleMourseOut);
    }

    return () => {
      dom.removeEventListener("mouseover", handleMourseOver);
      dom.removeEventListener("mouseout", handleMourseOut);
    };
  }, []);

  return {
    hovered,
    nodeRef,
  };
}
