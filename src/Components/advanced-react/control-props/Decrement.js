import React from "react";
import { useCount } from "./count-context";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      onClick={handleDecrement}
      className="Decrement p-3 flex items-center justify-center"
    >
      -
    </button>
  );
};

export default Decrement;
