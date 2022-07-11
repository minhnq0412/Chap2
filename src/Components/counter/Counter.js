import React, { useState } from "react";

const Counter = () => {
    // stale State
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  return <div onClick={handleIncrement}>Increment {count}</div>;
};

export default Counter;
