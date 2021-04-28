import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../Images/logo.png";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: '25%' ,
    marginRight: '10px',
    height: '80px',
    width: '12%'
  }
  
}));

export default function NavbarMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <img src={logo}  className={classes.logo} />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button component={Link} to="/home">
            Home
          </Button>
          <Button component={Link} to="/about">
            About
          </Button>
          <Button component={Link} to="/contact">
            Contact us
          </Button>
          <LocalGroceryStoreIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}
