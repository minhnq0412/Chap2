import React, { useState } from "react";

const Counter = () => {
  // stale State
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(pre => pre + 1);
    setCount(pre => pre + 1);
  };
  return <div onClick={handleIncrement}>Increment {count}</div>;
};

export default Counter;
