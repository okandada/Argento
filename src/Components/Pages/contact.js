import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./home.css";
import "./contact.css";
import BgImageComponent2 from "../BackgroundimageComponent/backgroundImage_2";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as yup from "yup";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import clsx from "clsx";

const useStyles = makeStyles({
  //   icon: {
  //     borderRadius: 0,
  //     width: 30,
  //     height: 30,
  //     border: "2px solid white",
  //   },
  //   textColor: {
  //     borderRadius: 0,
  //     width: 30,
  //     height: 30,
  //     border: "2px solid red",
  //   },
  //   defaultColor: {
  //     color: "#a4a4a4",
  //     marginTop: "7px",
  //   },
  //   checkedIcon: {
  //     backgroundColor: "#000",
  //     borderRadius: 0,

  //     "&:before": {
  //       display: "block",
  //       width: 28,
  //       height: 28,
  //       backgroundImage:
  //         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
  //         " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
  //         "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
  //       content: '""',
  //     },
  //   },
  // });

  icon: {
    borderRadius: 0,
    width: 30,
    height: 30,
    border: "2.5px solid white",

    // "input:disabled ~ &": {},
  },
  textColor: {
    borderRadius: 0,
    width: 30,
    height: 30,
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
  firstName: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  lastName: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  checkedB: yup
    .boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

const CssTextField = withStyles({
  root: {
    // "& label.Mui-focused": {
    //   color: "white",
    // },
    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "green",
    // },
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

export const ContactUs = (props) => {
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
      firstName: "",
      lastName: "",
      message: "",
      checkedB: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      // formik.resetForm
    },
    ///
  });

  ////
  useEffect(() => {
    props.setBackGroundCss("ContactbackgroundGradiant");
  });

  return (
    <div style={{ marginBottom: "140px" }}>
      <BgImageComponent2
        DashSize={"35%"}
        HeadingSize={"h5"}
        Heading="Kontakt"
        imageHeight={"220px"}
      />
      <div className="KontactHeading">Kontaktformular</div>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="field3">
            <CssTextField
              autoComplete="off"
              label="E-Mail-Adresse"
              variant="outlined"
              className="newsletter-textfield"
              id="custom-css-outlined-input validation-outlined-input1 email"
              InputLabelProps={{
                style: { color: "#ecbd46" },
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
            <div className=" desktop IpadQuer IpadPro">
              <span className="checkboxDiv ">
                <Checkbox
                  id="checkboxB"
                  variant="outlined"
                  className={classes.root}
                  disableRipple
                  color="default"
                  checkedIcon={
                    <span className={clsx(classes.icon, classes.checkedIcon)} />
                  }
                  // icon={<span className={classes.icon} />}
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
                {/* <Checkbox
                  id="checkboxB"
                  variant="outlined"
                  className={classes.root}
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
                /> */}
                <p className={classes.defaultColor}>
                  Ich bin mit den allgemeinen Datenschutzbestimmungen und den
                  Teilnahmebedingungen einverstanden
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="contactField">
          <div className="field1">
            <CssTextField
              autoComplete="off"
              className="newsletter-textfield"
              InputLabelProps={{
                style: { color: "#ecbd46" },
              }}
              label="*Vorname "
              variant="outlined"
              id="validation-outlined-input2"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName === undefined
                  ? false
                  : true && Boolean(formik.errors.firstName)
              }
            />
          </div>
          <div className="field2">
            <CssTextField
              autoComplete="off"
              className="newsletter-textfield"
              InputLabelProps={{
                style: { color: "#ecbd46" },
              }}
              label="*Nachname "
              variant="outlined"
              // error
              id="validation-outlined-input3 lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={
                formik.touched.lastName === undefined
                  ? false
                  : true && Boolean(formik.errors.lastName)
              }
            />
          </div>
        </div>
        <div className="mutliLine-msg">
          <CssTextField
            className="multiline-textfield"
            size="medium"
            multiline
            InputLabelProps={{
              style: { color: "#ecbd46" },
            }}
            rows={8}
            name="message"
            variant="outlined"
            label="**Nachricht "
            id="validation-outlined-input4"
          />
          // mobile view
          <div className="mobile ">
            <span className="checkboxDiv ">
              <Checkbox
                id="checkboxB"
                variant="outlined"
                className={classes.root}
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
              />
              <p className={classes.defaultColor}>
                Ich bin mit den allgemeinen Datenschutzbestimmungen und den
                Teilnahmebedingungen einverstanden
              </p>
            </span>
          </div>
          <Button
            className="buttonstyle"
            type="submit"
            // href="https://abcstorexzy.myshopify.com/products/gold1"
          >
            <Typography variant="button"> Kontaktieren</Typography>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ContactUs;
