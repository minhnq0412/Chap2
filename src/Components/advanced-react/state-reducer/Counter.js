import React from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({ count = 0, handleIncrement, handleDecrement }) => {
  return (
    <div className="w-full flex max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
      <CountProvider value={{ count }}>
        <Decrement onClick={handleDecrement}></Decrement>
        <Count></Count>
        <Increment onClick={handleIncrement}></Increment>
      </CountProvider>
    </div>
  );
};

export default Counter;
