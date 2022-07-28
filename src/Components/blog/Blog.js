import React, { useEffect, useRef } from "react";
import useHover from "../../hook/useHover";
import useLinkNewTab from "../../hook/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();

  const { hovered, nodeRef } = useHover();
  console.log(hovered)
  return (
    <div ref={contentRef}>
      <p style={{ marginBottom: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti
        nemo at aliquam facilis qui, architecto delectus mollitia dolorum dolor
        doloribus saepe, animi, repellendus temporibus non numquam est
        laudantium sit?
        <a
          href="https://google.com"
          ref={nodeRef}
          className={`underline ${hovered ? "text-green-400" : ""}`}
        >
          google.com
        </a>
      </p>
      <p style={{ marginBottom: "20px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
        assumenda excepturi ab facere consectetur architecto rem eos natus autem
        praesentium esse unde culpa fugiat blanditiis perferendis, provident
        possimus impedit iste.
        <a href="https://google.com">google.com</a>
      </p>
      <p style={{ marginBottom: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolores vero
        quae cupiditate in, pariatur debitis perspiciatis dolore eos minima non,
        possimus expedita id nemo qui! Ut aperiam ipsa officia!
        <a href="https://google.com">google.com</a>
      </p>
    </div>
  );
};

export default Blog;
