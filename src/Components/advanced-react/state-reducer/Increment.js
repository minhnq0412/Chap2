import React from "react";
import useCounter from "./useCounter";

const Increment = ({ onClick = () => {} }) => {
  return (
    <button
      className="Increment p-3 flex items-center justify-center"
      onClick={onClick}
    >
      +
    </button>
  );
};

export default Increment;
