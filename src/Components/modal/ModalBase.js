import React from "react";
import Portal from "../portal/Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassname="flex items-center justify-center"
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
