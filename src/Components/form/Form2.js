import React, { useState } from "react";
import useHandleChange from "../../hook/useHandleChange";

const Form2 = () => {
  const {values, handleChange} = useHandleChange();
  
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", columnGap: "12px" }}></div>
      <input
        type="text"
        name="fullname"
        style={{
          width: "100%",
          maxWidth: "300px",
          padding: "12px",
          borderColor: "rgb(226 232 240)",
          borderRadius: "0.5rem",
        }}
        placeholder="Enter your name"
        onChange={handleChange}
      ></input>
      <input
        type="email"
        name="email"
        style={{
          width: "100%",
          maxWidth: "300px",
          padding: "12px",
          borderColor: "rgb(226 232 240)",
          borderRadius: "0.5rem",
        }}
        placeholder="Enter your email address"
        onChange={handleChange}
      ></input>
      <input type="checkbox" name="hobby" onChange={handleChange}></input>
      {/* <select name="country" onChange={handleSelectChange}>
        <option value="VN">Việt Nam</option>
        <option value="USA">Mỹ</option>
        <option value="JP">Nhật Bản</option>
      </select> */}
    </div>
  );
};

export default Form2;
