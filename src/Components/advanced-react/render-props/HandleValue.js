import React from "react";
import { useState } from "react";

const HandleValue = () => {
  return (
    <Input
      render={(value) => <DisplayValue value={value}></DisplayValue>}
    ></Input>
  );
};

const Input = (props) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        className="p-3"
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      ></input>
      {props.render(value)}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;
