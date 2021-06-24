import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
import { withStyles } from "@material-ui/core/styles";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import { BrowserRouter as Link } from "react-router-dom";
// import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
const ValidationTextField = withStyles({
  root: {
    "& input": {
      color: "#ecbd46",
    },
    "& input:valid + fieldset": {
      borderColor: "#ffffff",
      // borderWidth: 2,
      color: "#ffffff",
      width: "100%",
    },

    "& input:invalid + fieldset": {
      borderColor: "red",
      // borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      // borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
    "& input:hover": {
      borderColor: "#ffffff !important",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    "&::placeholder": {
      fontStyle: "italic",
      color: "orange",
    },
  },
  color: {
    color: "#ffffff",
  },
  TextField: {
    border: "1px solid #ffffff",
  },
  InputBase: {
    border: "1px solid #ffffff",
  },
  buttonstyle: {},
}));
export const ContactUs = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <div>
        <BgImageComponent bgImage={cartBgImage} />
      </div>

      <div>
        <h2>Kontaktformular</h2>
        <div className="field3">
          <ValidationTextField
            className="newsletter-textfield"
            InputLabelProps={{
              style: { color: "#ecbd46" },
            }}
            label="Email Address"
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
            id="validation-outlined-input"
          />
        </div>
      </div>
      <div className="mutliLine-msg">
        {/* <TextareaAutosize
          aria-label="minimum height"
          className="newsletter-textfield"
          InputProps={{
            classes: { input: classes.input },
          }}
          style={{
            backgroundColor: "transparent",
            border: "2px solid #ffffff",
            color: "#ecbd46",
            fontSize: "20px",
          }}
          rowsMin={8}
          placeholder="Messages"
        /> */}

        <ValidationTextField
          className="newsletter-textfield"
          InputLabelProps={{
            style: { color: "#ecbd46" },
          }}
          multiline
          rows={4}
          label="**Nachricht "
          variant="outlined"
          id="validation-outlined-input"
        />
      </div>
    </div>
  );
};
export default ContactUs;
