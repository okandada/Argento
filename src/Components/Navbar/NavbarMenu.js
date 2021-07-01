import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../../App.css";
import "./navBarMenu.css";
import "../Footer/footer.css";
import logo from "../../Images/Home/Desktop/Fotos/logo.png";
//  import logo from "/images/Fotos/logo.png";
import ShoppingCart from "../../Images/Home/SVG/ShoppingCart.svg";
// import Paper from 'material-ui/Paper';

import { Link } from "react-router-dom";

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
              <div>
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
              <Typography variant="h4" className="buttonPadding">
                Home
              </Typography>
            </Button>
            <Button component={Link} to="/about">
              <Typography variant="h4" className="buttonPadding">
                Über uns
              </Typography>
            </Button>
            <Button component={Link} to="/contact">
              <Typography variant="h4" className="buttonPadding">
                Kontakt
              </Typography>
            </Button>

            <Button>
              <img src={ShoppingCart} alt="/about" to="/about" />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
