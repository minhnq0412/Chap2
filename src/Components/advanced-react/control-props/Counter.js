import React from "react";
import { useState } from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value !== null && !!onChange;
  const GetCount = () => (isControlled ? value : count);
  const handleCountChange = (newValue) =>
    isControlled ? onChange(newValue) : setCount(newValue);
  const handleIncrement = () => handleCountChange(GetCount() + 1);
  const handleDecrement = () => handleCountChange(GetCount() - 1);

  return (
    <div className="w-full flex max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
      <CountProvider
        value={{ count: GetCount(), handleIncrement, handleDecrement }}
      >
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </CountProvider>
    </div>
  );
};

export default Counter;
