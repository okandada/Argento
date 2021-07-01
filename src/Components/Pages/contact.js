import React from "react";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { withStyles } from "@material-ui/core/styles";
import BackgroundImage from "../../Images/Home/Desktop/Fotos/Hero.png";
import "./home.css";

const ValidationTextField = withStyles({
  root: {
    "& input": {
      color: "#ecbd46",
    },

    // "& input:valid + fieldset": {
    //   borderColor: "#ffffff",
    //   // borderWidth: 2,
    //   color: "#ffffff",
    //   width: "100%",
    // },

    // "& input:invalid + fieldset": {},
    // "& input:valid:focus + fieldset": {
    //   padding: "4px !important",
    // },
    // "& input:hover": {
    //   borderColor: "#ffffff !important",
    // },
  },
})(TextField);
export const ContactUs = () => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <BgImageComponent
        image={BackgroundImage}
        DashSize={"33%"}
        HeadingSize={"h2"}
        Heading="Kontakt"
      />

      <div>
        <h2>Kontaktformular</h2>
        <div className="field3">
          <ValidationTextField
            className="newsletter-textfield"
            InputLabelProps={{
              style: { color: "#ecbd46" },
            }}
            label="Email Address"
            // variant="outlined"
            id="validation-outlined-input"
          />
          <div>
            <Checkbox
              className="newsLetter-checkbox"
              checked={checked}
              onChange={handleChange}
              labelplacement="end"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p style={{ color: "#a4a4a4" }}>
              Ich bin mit den allgemeinen Datenschutzbestimmungen und den
              Teilnahmebedingungen einverstanden
            </p>
          </div>
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
            // variant="outlined"
            id="validation-outlined-input"
          />
        </div>
        <div className="field2">
          <ValidationTextField
            className="newsletter-textfield"
            InputLabelProps={{
              style: { color: "#ecbd46" },
            }}
            label="*Nachname "
            // variant="outlined"
            id="validation-outlined-input"
          />
        </div>
      </div>
      <div className="mutliLine-msg">
        <ValidationTextField
          className="newsletter-textfield"
          size="large"
          multiline
          InputLabelProps={{
            style: { color: "#ecbd46" },
          }}
          rows={4}
          label="**Nachricht "
          id="validation-outlined-input"
        />
      </div>
    </div>
  );
};
export default ContactUs;
