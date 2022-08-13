import React, { useState } from "react";
import useHover from "../../hook/useHover";
import ReactDOM from "react-dom";
const ToolTip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState();
  const handleOver = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  console.log(hovered);
  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleOver}>
        {text}
      </span>
    </div>
  );
};

const TooltipContent = ({ children, coords }) => {
  return ReactDOM.createPortal(
    <p
      className="p-3 bg-black text-white rounded-lg inline-block absolute -translate-y-full max-w-[200px]"
      style={{ top: coords.top - coords.height / 2, left: coords.left }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
};

export default ToolTip;
