import React from "react";
import { useState } from "react";

const DropdownV1 = ({ options }) => {
  const [show, setShow] = useState(false);
  const onChange = () => {};
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        onClick={() => setShow((p) => !p)}
        className="placeholder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer"
      >
        Select
      </div>

      {show && (
        <div className="p-1">
          <input
            className="p-2 outline-none w-full rounded border border-gray-200"
            type="text"
            placeholder="Search"
            onChange={onChange}
          ></input>
          <div className="options border border-gray-300 rounded">
            {options &&
              options?.length > 0 &&
              options.map((o, i) => (
                <div
                  className="option-item p-3 cursor-pointer flex justify-between"
                  key={i}
                  onClick={o.onClick}
                >
                  <span>{o?.title}</span>
                  {
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  }
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownV1;
