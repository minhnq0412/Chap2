import React from "react";
import { useCount } from "./count-context";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <button
      onClick={handleIncrement}
      className="Increment p-3 flex items-center justify-center"
    >
      +
    </button>
  );
};

export default Increment;
