import React, { createContext, useContext, useState } from "react";
import { CountProvider, useCount } from "./countContext";



const Context = () => {
  return (
    <div className="flex gap-5 justify-center items-center mt-10">
      <CountProvider>
        <CounterIncrement></CounterIncrement>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
};
const Counter = () => {
  const [count] = useCount();
  console.log(count);
  return <div>{count}</div>;
};
const CounterIncrement = () => {
  const [, setCount] = useCount();
  const handleIncrement = () => setCount((c) => c + 1);
  return (
    <button onClick={handleIncrement} className="p-3 bg-slate-400 rounded-lg">
      Increment Count
    </button>
  );
};

export default Context;
