import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textAreaRef = useRef();
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    setTextAreaHeight("auto");
    // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div style={{ padding: "20px", minHeight: parentHeight }}>
      <textarea
        ref={textAreaRef}
        value={text}
        placeholder="Please enter your content"
        style={{
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",
          overflow: "hidden",
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          borderRadius: "0.5rem",
          resize: "none",
          height: textAreaHeight,
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextAreaAutoResize;
