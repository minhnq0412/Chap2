import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef();
  useEffect(() => {
    if (contentRef.current) {
      const link = contentRef.current.querySelectorAll("a");
      link.length > 0 &&
        link.forEach((e) => {
          e.setAttribute("target", "_blank");
        });
    }
  },[]);
  return {
    contentRef
  }
}