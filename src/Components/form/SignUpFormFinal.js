import React from "react";
import styled from "styled-components";
import { useFormik, Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const Valid = styled.div`
  color: #a52a2a;
  font-weight: 600;
`;

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        term: false,
      }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string().required("Required"),
      //   lastName: Yup.string().required("Required"),
      //   email: Yup.string().email().required("Required"),
      //   intro: Yup.string().required("Required"),
      //   job: Yup.string().required("Required"),
      //   term: Yup.boolean().oneOf([true], "Please check the term"),
      // })}
      onSubmit={(values, action) => {
        setTimeout(() => {
          action.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            term: false,
          });
          action.setSubmitting(false);
        }, 5000);
      }}
    >
      {({ isSubmitting }) => (
        <Form
          style={{
            padding: "40px",
            width: "100%",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <MyInput
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
          ></MyInput>
          <MyInput
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
          ></MyInput>
          <MyInput
            id="email"
            type="email"
            label="Email address"
            name="email"
            placeholder="Enter your email"
          ></MyInput>
          <MyTextarea
            label="Introduce"
            name="intro"
            id="intro"
            placeholder="Enter your intro"
          ></MyTextarea>
          <MySelect label="Job" name="job" id="job">
            <option value="FE">Fontend Developer</option>
            <option value="BE">Backend Developer</option>
            <option value="FS">Fullstack Developer</option>
          </MySelect>
          <MyCheckbox name="term">
            <p>I accept thes term and conditions</p>
          </MyCheckbox>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "0.5rem",
              backgroundColor: "rgb(96 165 250)",
            }}
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "20px",
      }}
    >
      <label style={{ fontWeight: "bold" }} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        type="text"
        style={{
          padding: "15px",
          borderRadius: "0.375rem",
          border: "1px solid rgb(243 244 246)",
        }}
      ></input>
      {meta.touched && meta.error && <Valid>{meta.error}</Valid>}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "20px",
      }}
    >
      <label style={{ fontWeight: "bold" }} htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        type="text"
        style={{
          height: "150px",
          resize: "none",
          padding: "15px",
          borderRadius: "0.375rem",
          border: "1px solid rgb(243 244 246)",
        }}
      ></textarea>
      {meta.touched && meta.error && <Valid>{meta.error}</Valid>}
    </div>
  );
};
const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "20px",
      }}
    >
      <label style={{ fontWeight: "bold" }} htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
        {...field}
        {...props}
        type="text"
        style={{
          padding: "15px",
          borderRadius: "0.375rem",
          border: "1px solid rgb(243 244 246)",
        }}
      ></select>
      {meta.touched && meta.error && <Valid>{meta.error}</Valid>}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginBottom: "20px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          {...field}
          {...props}
          type="checkbox"
          style={{
            padding: "15px",
            borderRadius: "0.375rem",
            border: "1px solid rgb(243 244 246)",
          }}
        />
        {children}
      </label>
      {meta.touched && meta.error && <Valid>{meta.error}</Valid>}
    </div>
  );
};
export default SignUpFormFinal;
