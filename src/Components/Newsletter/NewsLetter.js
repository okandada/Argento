import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./NewsLetter.css";
import * as yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";

const useStyles = makeStyles({
  icon: {
    borderRadius: 0,
    width: 20,
    height: 20,
    border: "2.5px solid white",

    // "input:disabled ~ &": {},
  },
  textColor: {
    borderRadius: 0,
    width: 20,
    height: 20,
    border: "2px solid red",
  },
  defaultColor: {
    color: "#a4a4a4",
    marginTop: "7px",
  },

  checkedIcon: {
    backgroundColor: "#000",
    borderRadius: 0,

    "&:before": {
      display: "block",
      width: 17,
      height: 17,
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
  checkedB: yup
    .boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        border: "2px solid white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

export default function NewsLetter(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    state.checkedB = event.target.checked;
    formik.values.checkedB = event.target.checked;
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      checkedB: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="text-items">
      <Typography variant="h4">
        <span className="NLtitle ">{props.firstTitle}</span>
      </Typography>
      <Typography variant="subtitle1">{props.subTitle}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="field3">
            <CssTextField
              autoComplete="off"
              label="E-Mail-Adresse"
              variant="outlined"
              className="nltextfield"
              id="custom-css-outlined-input validation-outlined-input1 email"
              InputLabelProps={{
                style: { color: "#ecbd46", height: "50px" },
              }}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={
                formik.touched.email === undefined
                  ? false
                  : true && Boolean(formik.errors.email)
              }
            />
            <div style={{ display: "flex" }}>
              <Checkbox
                id="checkboxB"
                variant="outlined"
                className={classes.root}
                disableRipple
                style={{ marginLeft: "-9px" }}
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={
                  <span
                    className={
                      formik.errors.checkedB && formik.touched.checkedB
                        ? classes.textColor
                        : classes.icon
                    }
                  />
                }
                checked={state.checkedB}
                name="checkedB"
                onChange={handleChange}
                value={formik.values.checkedB}
                error={
                  formik.touched.checkedB === undefined
                    ? false
                    : true && Boolean(formik.errors.checkedB)
                }
                inputProps={{ "aria-label": "decorative checkbox" }}
                {...props}
              />

              <Typography variant="subtitle1" style={{ marginTop: "6px" }}>
                Ich bin mit den allgemeinen Datenschutzbestimmungen und den
                Teilnahmebedingungen einverstanden
              </Typography>
            </div>
            <div className="newsletter_button">
              <Button
                className="nlButton"
                type="submit"
                // href="https://abcstorexzy.myshopify.com/products/gold1"

                fullWidth={true}
              >
                <Typography variant="button"> NewsLetter Anmeldung</Typography>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
