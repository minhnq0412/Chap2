import React from "react";
import { useState } from "react";
import useToggle from "./useToggle";

const Editable = () => {
  const { value, handleToggleValue } = useToggle();
  return (
    <div>
      {value && (
        <input className="p-3 rounded-lg border border-gray-700"></input>
      )}

      <button onClick={handleToggleValue}>Open edit</button>
    </div>
  );
};

export default Editable;
