import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "../../App.css";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
//  import logo from "/images/Fotos/logo.png";
import ShoppingCart_icon from "../../Images/ÜberUns/Desktop/SVG/ShoppingCart_icon.svg";
// import Paper from 'material-ui/Paper';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavbarMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.BackgroundColor}>
        <Toolbar>
          <Link to="/home">
            <img
              style={{ width: "337.4px", height: "80px" }}
              src={logo}
              alt=""
            />
          </Link>
          <div style={{ width: "100%", textAlign: "end" }}>
            <Button component={Link} to="">
              Home
            </Button>
            <Button component={Link} to="/about">
              About
            </Button>
            <Button component={Link} to="/contact">
              Contact us
            </Button>
            <Button>
              <img src={ShoppingCart_icon} alt="/about" to="/about" />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
