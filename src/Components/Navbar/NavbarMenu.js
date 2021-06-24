import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "../../App.css";
import "../Footer/footer.css";
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
          <div>
            <Link to="/home">
              <div className="logo-m-Size">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={logo}
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div style={{ width: "100%", textAlign: "end" }}>
            <Button component={Link} to="">
              <Typography variant="h4">Home</Typography>
            </Button>
            <Button component={Link} to="/about">
              <Typography variant="h4">Über uns</Typography>
            </Button>
            <Button component={Link} to="/contact">
              <Typography variant="h4">Kontakt</Typography>
            </Button>
            <Button component={Link} to="/impressum">
              Impressum
            </Button>
            <Button component={Link} to="/datenSchutz">
              Daten Schutz
            </Button>
            <Button>
              {" "}
              <img src={ShoppingCart_icon} alt="/about" to="/about" />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
