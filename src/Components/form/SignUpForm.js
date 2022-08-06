import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.firstName) errors.firstName = "require";
  //   else if (values.firstName.length > 20)
  //     errors.firstName = "Must be 20 characters or less";
  //   if (!values.lastName) errors.lastName = "require";
  //   else if (values.lastName.length > 20)
  //     errors.lastName = "Must be 20 characters or less";
  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {},
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
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
        <input
          style={{
            padding: "15px",
            borderRadius: "0.375rem",
            border: "1px solid rgb(243 244 246)",
          }}
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}
        <label htmlFor="lastName" style={{ fontWeight: "bold" }}>
          Last Name
        </label>
        <input
          style={{
            padding: "15px",
            borderRadius: "0.375rem",
            border: "1px solid rgb(243 244 246)",
          }}
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}
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
    </form>
  );
};

export default SignUpForm;
