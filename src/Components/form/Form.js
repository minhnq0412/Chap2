import React, { useState } from "react";
import useHandleChange from "../../hook/useHandleChange";

const Form = () => {
  const initialValue = {
    fullname: "",
    email: "",
    hobby: false,
  };

  const { values, handleChange } = useHandleChange(initialValue);
  const [nameError, setNameError] = useState();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    values.fullname === "" && setNameError("Your name is empty");
  };
  console.log(nameError);

  return (
    <div style={{ padding: "20px" }}>
      <form
        style={{ display: "flex", columnGap: "12px" }}
        onSubmit={handleSubmitForm}
      >
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
        {/* <input type="checkbox" name="hobby" onChange={handleChange}></input> */}
        {/* <select name="country" onChange={handleSelectChange}>
        <option value="VN">Việt Nam</option>
        <option value="USA">Mỹ</option>
        <option value="JP">Nhật Bản</option>
      </select> */}
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "0.5rem",
            color: "white",
            border: "none",
            backgroundColor: "#B1E1FF",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
