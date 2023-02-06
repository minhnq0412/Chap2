import React from "react";
import { useAccordion } from "./accordionContext";

const AccordionHeader = ({ children }) => {
  const { value, handleToggleValue } = useAccordion();
  return (
    <div
      className="header cursor-pointer select-none p-4 border border-gray-300 rounded-lg flex items-center justify-between"
      onClick={handleToggleValue}
    >
      <span>{children}</span>
      <span>{value ? "-" : "+"}</span>
    </div>
  );
};

export default AccordionHeader;
