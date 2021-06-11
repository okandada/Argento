import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
const ValidationTextField = withStyles({
  root: {
    "& input": {
      color: "#ecbd46",
    },
    "& input:valid + fieldset": {
      borderColor: "white",
      borderWidth: 2,
      color: "white",
      width: "100%",
    },

    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
    "&:hover": {
      borderColor: "white !important",
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
  color: {
    color: "white",
  },
  TextField: {
    border: "1px solid white",
  },
  InputBase: {
    border: "1px solid white",
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
        <div style={{ width: "23%" }}>
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
              labelPlacement="end"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <p style={{ color: "#a4a4a4" }}>
              Ich bin mit den allgemeinen Datenschutzbestimmungen und den
              Teilnahmebedingungen einverstanden
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "Inline-flex", width: "100%" }}>
        <div style={{ width: "23%" }}>
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
        <div style={{ width: "23%", marginInline: "50px" }}>
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
      <div style={{ width: "50%" }}>
        <ValidationTextField
          className="newsletter-textfield"
          InputLabelProps={{
            style: { color: "#ecbd46" },
          }}
          label="**Nachricht "
          variant="outlined"
          borderColor="white"
          id="validation-outlined-input"
        />
      </div>
    </div>
  );
};
export default ContactUs;
