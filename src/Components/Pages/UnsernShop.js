import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import { Checkbox, CheckboxWithLabel, TextField } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
    borderRadius: 0,
    width: 30,
    height: 30,
    border: "1px solid white",

    "input:disabled ~ &": {},
  },
  checkboxError: {
    color: "red",
  },
  checkedIcon: {
    backgroundColor: "#fff",

    "&:before": {
      display: "block",
      width: 28,
      height: 28,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
});
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

  checkbox: yup.boolean().required().isTrue(),
});
export const UnsernShop = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
      vorname: "enter vorname",
      nachname: "enter nachname",
      message: "enter your message",
      checkbox: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("hello");
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

        <Checkbox
          id="checkbox"
          name="checkbox"
          variant="outlined"
          value={formik.values.checkbox}
          onChange={formik.handleChange}
          error={formik.touched.checkbox && Boolean(formik.errors.checkbox)}
          color="default"
          checkedIcon={
            <span className={clsx(useStyles.icon, useStyles.checkedIcon)} />
          }
          icon={<span className={useStyles.icon} />}
          inputProps={{ "aria-label": "decorative checkbox" }}
          {...props}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default UnsernShop;
