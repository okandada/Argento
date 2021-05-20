import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  TextField: {
    border: "1px solid white",
  },
  InputBase: {
    border: "1px solid white",
  },
  buttonstyle: {
    width: "80%",
  },
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
      <form noValidate autoComplete="off">
        {/* <TextField
          className="newsletter-text"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        /> */}
        <TextField
          className="newsletter-textfield"
          id="outlined-basic"
          placeholder="E-MAIL-Adresse"
          variant="outlined"
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
