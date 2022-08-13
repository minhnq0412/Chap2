import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../portal/Portal";

const ToolTipAdvance = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState(false);
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = () => setVisible(true);
  return (
    <div className="relative inline-block">
      <CSSTransition
        in={visible}
        classNames="faded"
        unmountOnExit
        timeout={300}
      >
        {(status) => (
          <Portal visible={status !== "exited"} overlay={false}>
            <p
              className="p-3 bg-black text-white rounded-lg inline-block absolute -translate-y-full max-w-[200px]"
              style={{ top: coords.top - coords.height / 2, left: coords.left }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default ToolTipAdvance;
