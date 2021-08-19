import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import "./home.css";
import "./contact.css";
import BgImageComponent2 from "../BackgroundimageComponent/backgroundImage_2";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import * as yup from "yup";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  icon: {
    borderRadius: 0,
    width: 30,
    height: 30,
    border: "1.7px solid white",

    "input:disabled ~ &": {},
  },
  checkboxError: {
    color: "red",
  },
  checkedIcon: {
    backgroundColor: "#000",

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

const ValidationTextField = withStyles({
  root: {
    "& input": {
      color: "#ecbd46",
    },
  },
})(TextField);

const validationSchema = yup.object({
  email: yup.string().email().required(),
  vorname: yup
    .string("Enter your vorname")
    // .min(8, "Password should be of minimum 8 characters length")
    .required("vorname is required"),
  nachname: yup
    .string("Enter your nachname")

    .required("nachname is required"),
  message: yup
    .string("Enter your message")

    .required("message is required"),
  checkbox: yup.boolean().required().isTrue(),
});

export const ContactUs = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      vorname: "",
      nachname: "",
      message: "",
      checkbox: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    props.setBackGroundCss("ContactbackgroundGradiant");
  });
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <div style={{ marginBottom: "140px" }}>
      <BgImageComponent2
        DashSize={"35%"}
        HeadingSize={"h5"}
        Heading="Kontakt"
        imageHeight={"220px"}
      />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="KontactHeading">Kontaktformular</div>
          <div className="field3">
            <CssTextField
              id="email"
              name="email"
              label="E-Mail-Adresse"
              variant="outlined"
              className="newsletter-textfield"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{
                style: { color: "#ecbd46" },
              }}
            />

            <div className=" desktop IpadQuer IpadPro">
              <span className="checkboxDiv ">
                <Checkbox
                  id="checkbox"
                  name="checkbox"
                  variant="outlined"
                  label={{
                    label:
                      "Ich bin mit den allgemeinen Datenschutzbestimmungen und den",
                    className: errors.checkbox
                      ? classes.checkboxError
                      : undefined,
                  }}
                  Teilnahmebedingungen
                  einverstanden
                  value={formik.values.checkbox}
                  onChange={formik.handleChange}
                  className={classes.root}
                  disableRipple
                  color="default"
                  checkedIcon={
                    <span className={clsx(classes.icon, classes.checkedIcon)} />
                  }
                  icon={<span className={classes.icon} />}
                  inputProps={{ "aria-label": "decorative checkbox" }}
                  {...props}
                />
                {/* <p style={{ color: "#a4a4a4", marginTop: "7px" }}>
                  Ich bin mit den allgemeinen Datenschutzbestimmungen und den
                  Teilnahmebedingungen einverstanden
                </p> */}
              </span>
            </div>
          </div>
        </div>

        <div className="contactField">
          <div className="field1">
            <CssTextField
              className="newsletter-textfield"
              InputLabelProps={{
                style: { color: "#ecbd46" },
              }}
              id="vorname"
              name="vorname"
              label="vorname"
              variant="outlined"
              type="vorname"
              value={formik.values.vorname}
              onChange={formik.handleChange}
              error={formik.touched.vorname && Boolean(formik.errors.vorname)}
            />
          </div>
          <div className="field2">
            <CssTextField
              className="newsletter-textfield"
              InputLabelProps={{
                style: { color: "#ecbd46" },
              }}
              label="*Nachname "
              variant="outlined"
              id="nachname"
              name="nachname"
              type="nachname"
              value={formik.values.nachname}
              onChange={formik.handleChange}
              error={formik.touched.nachname && Boolean(formik.errors.nachname)}
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
            variant="outlined"
            label="**Nachricht "
            id="validation-outlined-input4"
          />

          <div className="mobile ">
            <span className="checkboxmobile ">
              <Checkbox
                id="checkbox"
                name="checkbox"
                variant="outlined"
                value={formik.values.checkbox}
                onChange={formik.handleChange}
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                {...props}
              />
              <p
                style={{
                  color: "#a4a4a4",
                  marginTop: "7px",
                  // paddingBottom: "33px",
                }}
              >
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
