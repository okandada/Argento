import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
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
export default function NewsLetter(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="text-items">
      <div className="first-title">{props.firstTitle}</div>
      <div className="sub-title">{props.subTitle}</div>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <TextField
          className="newsletter-text"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        /> */}
        {/* <TextField
          id="outlined-basic"
          label="E-MAIL-Adresse"
          variant="outlined"
          color="primary"
        /> */}
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
          <span>
            Ich bin mit den allgemeinen Datenschutzbestimmungen und den
            Teilnahmebedingungen einverstanden
          </span>
        </div>

        <Button
          className="newsLetter-btn"
          variant="contained"
          color="white"
          href="#contained-buttons"
        >
          <h6>NewsLetter Anmeldung</h6>
        </Button>
      </form>
    </div>
    // </div>
  );
}
