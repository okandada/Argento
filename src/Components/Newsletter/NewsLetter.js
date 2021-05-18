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
      <span className="sub-title price-field-subtitle-left ">
        {props.price_subtitle_left}
      </span>
      <div className="newsletter-input-field ">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="E-MAIL-AdRESS"
            variant="outlined"
          />
        </form>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Button variant="contained" color="white" href="#contained-buttons">
          <h6>NewsLetter Anmeldung</h6>
        </Button>
      </div>
    </div>
  );
}
