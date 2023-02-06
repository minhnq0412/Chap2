import { createContext, useContext, useState } from "react";
import useToggle from "./useToggle";

const AccordionContext = createContext();
const AccordionProvider = (props) => {
  const { value, handleToggleValue } = useToggle();
  const values = { value, handleToggleValue };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
};

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (typeof context === "undefined")
    throw new Error("useAccordion must be used within AccordionProvider");
  return context;
};

export { useAccordion, AccordionProvider };