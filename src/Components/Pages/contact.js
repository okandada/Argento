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
import Testform from "./testForm";
const ValidationTextField = withStyles({
  root: {
    "& input": {
      color: "#ecbd46",
    },
  },
})(TextField);
export const ContactUs = (props) => {
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

      <div>
        <div className="KontactHeading">Kontaktformular</div>
        <div className="field3">
          <ValidationTextField
            className="newsletter-textfield"
            variant="filled"
            InputLabelProps={{
              style: { color: "#ecbd46" },
            }}
            label="*E-Mail-Adresse"
            id="validation-outlined-input1"
          />
          <div className=" desktop IpadQuer IpadPro">
            <span className="checkboxDiv ">
              <Testform />
              <p style={{ color: "#a4a4a4", marginTop: "7px" }}>
                Ich bin mit den allgemeinen Datenschutzbestimmungen und den
                Teilnahmebedingungen einverstanden
              </p>
            </span>
          </div>
          {/* <div className="checkboxDiv"> */}
          {/* <Checkbox
              checked={checked}
              onChange={handleChange}
              labelplacement="end"
              variant="filled"
              inputProps={{ "aria-label": "primary checkbox" }}
            /> */}

          {/* <Testform /> */}

          {/* <p style={{ color: "#a4a4a4", marginTop: "7px" }}>
              Ich bin mit den allgemeinen Datenschutzbestimmungen und den
              Teilnahmebedingungen einverstanden
            </p>
          </div> */}
        </div>
      </div>
      <div className="contactField">
        <div className="field1">
          <ValidationTextField
            className="newsletter-textfield"
            InputLabelProps={{
              style: { color: "#ecbd46" },
            }}
            label="*Vorname "
            variant="filled"
            id="validation-outlined-input2"
          />
        </div>
        <div className="field2">
          <ValidationTextField
            className="newsletter-textfield"
            InputLabelProps={{
              style: { color: "#ecbd46" },
            }}
            label="*Nachname "
            variant="filled"
            // error
            id="validation-outlined-input3"
          />
        </div>
      </div>
      <div className="mutliLine-msg">
        <ValidationTextField
          className="multiline-textfield"
          size="medium"
          multiline
          InputLabelProps={{
            style: { color: "#ecbd46" },
          }}
          rows={4}
          variant="filled"
          label="**Nachricht "
          id="validation-outlined-input4"
        />
        <div className="mobile ">
          <span className="checkboxmobile ">
            <Testform />
            <p style={{ color: "#a4a4a4", marginTop: "7px" }}>
              Ich bin mit den allgemeinen Datenschutzbestimmungen und den
              Teilnahmebedingungen einverstanden
            </p>
          </span>
        </div>
        <Button
          className="buttonstyle"
          // href="https://abcstorexzy.myshopify.com/products/gold1"
        >
          <Typography variant="button"> Kontaktieren</Typography>
        </Button>
      </div>
    </div>
  );
};
export default ContactUs;
