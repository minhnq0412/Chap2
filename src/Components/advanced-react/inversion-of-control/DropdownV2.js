import React from "react";
import { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const DropdownV2 = ({ placeholder, children, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full max-w-[300px]">
        <div
          onClick={() => setShow((p) => !p)}
          className="placeholder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer"
        >
          {placeholder}
        </div>
        {show && children}
      </div>
    </DropdownProvider>
  );
};

export default DropdownV2;
