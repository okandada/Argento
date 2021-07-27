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
import ShoppingCart from "../../Images/Home/SVG/ShoppingCart.svg";

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
        <Toolbar
          style={{
            padding: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <div className="textureImage1">
            <img src={TextureImage} />
          </div> */}

          <div>
            <Link to="/">
              <div className="logo-resize">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={logo}
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className="homeButton">
            <div className="btn-70-m">
              <Button component={Link} to="">
                <Typography variant="h3">Home</Typography>
              </Button>
            </div>
            <div className="btn-70-m">
              <Button
                component={Link}
                to="/about"
                // style={{ padding: "6px 70px" }}
              >
                <Typography variant="h3">Über uns</Typography>
              </Button>
            </div>
            <div className="btn-6-m">
              <Button component={Link} to="/contact">
                <Typography variant="h3">Kontakt</Typography>
              </Button>
            </div>
            <div className="btn-5-m">
              <Button>
                <img
                  src={ShoppingCart}
                  alt="/about"
                  to="/about"
                  className="cart-img"
                />
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
