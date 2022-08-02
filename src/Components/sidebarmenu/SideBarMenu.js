import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { forwardRef, useState } from "react";

const SideBarMenu = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: "300px",
        backgroundColor: "gray",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        bottom: "0",
        top: "0",
        left: "0",
        zIndex: "10",
        transform: props.show || "translateX(-100%)",
      }}
    ></div>
  );
});

export default SideBarMenu;
