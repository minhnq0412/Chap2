import React, { Fragment } from "react";
import { useAccordion } from "./accordionContext";

const AccordionContent = ({ children }) => {
  const { value } = useAccordion();

  return (
    <Fragment>
      {value && (
        <div className="content p-4 border border-gray-300 rounded-lg mt-2">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default AccordionContent;
