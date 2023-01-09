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

export const registerValid = {
  initial: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    re_password: "",
    remember: true,
    // username: '0798662438',
    // password: '12345678',
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be between 8-50 characters').max(50, 'Password must be between 8-50 characters'),
    re_password: Yup.string().required('Password is required').oneOf([Yup.ref('password'), null], 'Password does not match'),
  }),
};
