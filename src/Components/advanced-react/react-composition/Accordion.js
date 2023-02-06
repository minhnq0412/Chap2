import React from "react";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./accordionContext";
import AccordionHeader from "./AccordionHeader";
import useToggle from "./useToggle";

const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
