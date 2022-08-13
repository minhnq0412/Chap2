import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schemaValidation = Yup.object({
  firstName: Yup.string().required().max(10),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    setFocus,
    setValue,
    control,
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    console.log(values);
    if (isValid) {
      reset({ firstName: "", lastName: "", email: "" });
    }
  };
  const handleDemoData = () => {
    setValue("firstName", "Minh");
    setValue("lastName", "Nguyen");
    setValue("email", "minhnq@gmail.com");
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {...register("firstName")}
        />
        {errors?.firstName?.type === "required" && (
          <div>{errors?.firstName?.message}</div>
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
          {...register("lastName")}
        />
        {errors?.lastName?.type === "required" && (
          <div>{errors?.lastName?.message}</div>
        )}
        <label htmlFor="email" style={{ fontWeight: "bold" }}>
          Email
        </label>
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          style={{
            padding: "15px",
            borderRadius: "0.375rem",
            border: "1px solid rgb(243 244 246)",
          }}
          type="email"
          id="email"
          placeholder="Enter your email address"
          {...register("email")}
        /> */}
        {errors?.email?.type === "required" && (
          <div>{errors?.email?.message}</div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <input type="checkbox" {...register("showAge")} />
          {watchShowAge && (
            <input
              style={{
                padding: "15px",
                borderRadius: "0.375rem",
                border: "1px solid rgb(243 244 246)",
              }}
              type="number"
              id="age"
              placeholder="Enter your age"
            />
          )}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
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
          <button
            style={{
              padding: "16px",
              width: "100%",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "rgb(96 165 250)",
            }}
            onClick={handleDemoData}
          >
            Demo Data
          </button>
        </div>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           style={{
//             padding: "15px",
//             borderRadius: "0.375rem",
//             border: "1px solid rgb(243 244 246)",
//           }}
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      style={{
        padding: "15px",
        borderRadius: "0.375rem",
        border: "1px solid rgb(243 244 246)",
      }}
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
