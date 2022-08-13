import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${
        !open && "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="modal-content bg-white relative z-10 p-10 rounded-lg w-full max-w-[482px]">
        <span
          className="absolute top-0 right-0 cursor-pointer"
          onClick={handleClose}
        >
          Close
        </span>
        <h2 className="text-4xl text-center text-black font-semibold mb-5">
          Welcome Back!
        </h2>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm">
            Email address
          </label>
          <input
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-3 mb-5"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-3 mb-5"
            placeholder="Enter your password"
          ></input>
        </div>
        <button className="w-full p-4 font-semibold bg-blue-600 rounded-lg text-white">
          Sign in
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
