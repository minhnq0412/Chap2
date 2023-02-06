import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CountContext = createContext(undefined);

const CountProvider = ({ value, ...props }) => {
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);
  if (typeof context === "undefined") throw new Error("____");
  return context;
};

export { CountProvider, useCount };
