import * as Yup from "yup";

export const loginValid = {
  initial: {
    email: "",
    password: "",
    remember: true,
    // username: '0798662438',
    // password: '12345678',
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
};
