import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import { BrowserRouter as Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Link to="/home">
        <img
          style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
          src={logo}
          alt=""
        />
      </Link>
      <div>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <Link>
            <MenuItem value="Home">
              <em>Home</em>
            </MenuItem>
          </Link>
          <Link to="/home">
            <MenuItem value={10}>Ten</MenuItem>
          </Link>
          <Link to="/home">
            <MenuItem value={10}>Ten</MenuItem>
          </Link>
          <Link to="/home">
            <MenuItem value={10}>Ten</MenuItem>
          </Link>
        </Select>
      </div>
      <FormHelperText>Without label</FormHelperText>
    </div>
  );
}
