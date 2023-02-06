import React from "react";
import { useDropDown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = useDropDown();
  return (
    <div
      className="option-item p-3 cursor-pointer flex justify-between"
      onClick={() => onClick(props.val)}
    >
      {props.children}
    </div>
  );
};

export default Option;
