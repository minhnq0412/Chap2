import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hook/useClickOutSide";

const DropDown = () => {
  const { nodeRef, show, setShow } = useClickOutSide();
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
        onClick={() => setShow(!show)}
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
      {show && (
        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: "100%",
            left: "0px",
            width: "100%",
            padding: "20px",
            border: "solid 0.5px",
            borderColor: "rgb(229 231 235)",
            borderRadius: "0.25rem",
          }}
        >
          <div style={{ padding: "20px", cursor: "pointer" }}>Javascript</div>
          <div style={{ padding: "20px", cursor: "pointer" }}>React JS</div>
          <div style={{ padding: "20px", cursor: "pointer" }}>Vue JS</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
