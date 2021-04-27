import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Home from '../Pages/home';
import About from '../Pages/about';
import ContactUS from '../Pages/contact';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
}));

export default function NavbarMenu() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
           
          </IconButton>
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



