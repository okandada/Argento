import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import '../../App.css';
import logo from "../../Images/logo.png"
//  import logo from "/images/Fotos/logo.png";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
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
      {/* <img src= '/public/Images/Fotos/textureImage.jpg'/> */}
      <AppBar position="static" className={classes.BackgroundColor}>
        <Toolbar>
        {/* <img src="/public/Images/Fotos/logo.png"  className={classes.logo} /> */}
        <img style=    {{width: '337.4px',
    height: '80px'}} src={logo}/>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button component={Link} to="/home" >
            Home
          </Button>
          <Button component={Link} to="/about" >
            About
          </Button>
          <Button component={Link} to="/contact" >
            Contact us
          </Button>
          <Button> <LocalGroceryStoreIcon /></Button >
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
