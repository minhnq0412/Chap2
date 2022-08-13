import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hook/useClickOutSide";
import ReactDOM from "react-dom";

const DropDownPortal = () => {
  const { nodeRef, show, setShow } = useClickOutSide();
  const [coords, setCoords] = useState();
  const handleClick = (e) => {
    setShow(!show);
    setCoords(nodeRef.current.getBoundingClientRect());
  };
  return (
    <div
      ref={nodeRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <div
        onClick={handleClick}
        style={{
          backgroundColor: "white",
          padding: "20px",
          border: "solid 0.5px",
          borderColor: "rgb(229 231 235)",
          borderRadius: "0.25rem",
          width: "100%",
          cursor: "pointer",
        }}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};
const DropdownList = ({ coords }) => {
  if (typeof document === "undefined") return null;
    return ReactDOM.createPortal(
      <div
        className="absolute left-0 w-full bg-white border border-r-gray-200 rounded-lg 
      top-full"
        style={{ left: coords.left, top: coords.top + coords.height  + coords.scrollY, width: coords.width }}
      >
        <div style={{ padding: "20px", cursor: "pointer" }}>Javascript</div>
        <div style={{ padding: "20px", cursor: "pointer" }}>React JS</div>
        <div style={{ padding: "20px", cursor: "pointer" }}>Vue JS</div>
      </div>,
      document.querySelector("body")
    );
};

export default DropDownPortal;
