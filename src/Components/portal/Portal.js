import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const createPortalWrapper = () => {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
};

const portalWrapperElm = createPortalWrapper();

const Portal = ({
  containerClassname = "",
  bodyClassname = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  overlay = true,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);

  const renderContent = (
    <div className={containerClassname} style={containerStyle}>
      {overlay && (
        <div
          className="overlay absolute inset-0 bg-black bg-opacity-20"
          onClick={onClose}
        ></div>
      )}

      <div className={bodyClassname} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

Portal.propTypes = {
  containerClassname: PropTypes.string,
  bodyClassname: PropTypes.string,
  contaierStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};

export default Portal;
