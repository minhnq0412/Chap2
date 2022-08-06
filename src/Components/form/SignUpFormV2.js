import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form
        style={{
          padding: "40px",
          width: "100%",
          maxWidth: "500px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="firstName" style={{ fontWeight: "bold" }}>
            First Name
          </label>
          <Field
            type="text"
            name="firstName"
            style={{
              padding: "15px",
              borderRadius: "0.375rem",
              border: "1px solid rgb(243 244 246)",
            }}
            placeholder="Enter your first name"
          ></Field>
          <ErrorMessage name="firstName"></ErrorMessage>
          <label htmlFor="lastName" style={{ fontWeight: "bold" }}>
            Last Name
          </label>
          <Field
            type="text"
            name="lastName"
            style={{
              padding: "15px",
              borderRadius: "0.375rem",
              border: "1px solid rgb(243 244 246)",
            }}
            placeholder="Enter your last name"
          ></Field>
          <ErrorMessage name="lastName"></ErrorMessage>

          <button
            style={{
              width: "100%",
              padding: "16px",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "0.5rem",
              backgroundColor: "rgb(96 165 250)",
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
