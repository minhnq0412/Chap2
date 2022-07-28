import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        style={{
          display: "inline-block",
          padding: "20px",
          borderColor: "rgb(229 231 235)",
        }}
      ></input>
    </div>
  );
};

export default Input;
