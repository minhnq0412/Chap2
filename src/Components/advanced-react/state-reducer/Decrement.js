import React from "react";

const Decrement = ({ onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="Decrement p-3 flex items-center justify-center"
    >
      -
    </button>
  );
};

export default Decrement;
