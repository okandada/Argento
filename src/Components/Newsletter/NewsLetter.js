import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./NewsLetter.css";
const ValidationTextField = withStyles({
  root: {
    "& input": {
      color: "#ecbd46",
    },
    "& input:valid + fieldset": {
      borderColor: "#ffffff",
      borderWidth: 2,
      color: "#ffffff",
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
export default function NewsLetter(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="text-items">
      <Typography variant="h4">
        <span className="NLtitle ">{props.firstTitle}</span>
      </Typography>
      <Typography variant="subtitle1">{props.subTitle}</Typography>

      <form className={classes.root} noValidate autoComplete="off">
        <ValidationTextField
          className="nltextfield"
          InputLabelProps={{
            style: { color: "#ecbd46", height: "50px" },
          }}
          label="Email Address"
          variant="filled"
          id="validation-outlined-input"
        />
        <div style={{ width: "100%", margin: 0 }}>
          <div>
            <Checkbox
              className="newsLetter-checkbox"
              checked={checked}
              onChange={handleChange}
              labelplacement="end"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1">
              Ich bin mit den allgemeinen Datenschutzbestimmungen und den
              Teilnahmebedingungen einverstanden
            </Typography>
          </div>

          <div className="newsletter_button">
            <Button
              href="https://abcstorexzy.myshopify.com/products/gold1"
              style={{ background: "#ffffff", height: "50px" }}
              fullWidth={true}
            >
              <Typography variant="button"> NewsLetter Anmeldung</Typography>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
