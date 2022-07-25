import React, { useEffect, useState } from "react";

const Counter = () => {
  // stale State
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
  });

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  useEffect(() => {
    console.log(info);
  }, [info.lastName]);
  return (
    <div style={{ padding: "5px", display: "flex", columnGap: "4px" }}>
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      ></input>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          display: "inline-block",
          padding: "3px",
          background: "green",
          color: "white",
        }}
      >
        Increment
      </button>
      <span
        style={{ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: "bold" }}
      >
        {count}
      </span>
    </div>
  );
};

export default Counter;
