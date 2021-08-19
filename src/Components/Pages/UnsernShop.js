import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  vorname: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  nachname: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  message: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
export const UnsernShop = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
      vorname: "enter vorname",
      nachname: "enter nachname",
      message: "enter your message",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="vorname"
          name="vorname"
          label="vorname"
          type="vorname"
          value={formik.values.vorname}
          onChange={formik.handleChange}
          error={formik.touched.vorname && Boolean(formik.errors.vorname)}
          helperText={formik.touched.vorname && formik.errors.vorname}
        />
        <TextField
          fullWidth
          id="nachname"
          name="nachname"
          label="nachname"
          type="nachname"
          value={formik.values.nachname}
          onChange={formik.handleChange}
          error={formik.touched.nachname && Boolean(formik.errors.nachname)}
          helperText={formik.touched.nachname && formik.errors.nachname}
        />
        <TextField
          fullWidth
          id="message"
          name="password"
          label="message"
          type="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.password && formik.errors.message}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default UnsernShop;
