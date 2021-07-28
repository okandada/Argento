import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MobileMenu from "../../Images/Home/SVG/MobileMenu.svg";
import logo from "../../Images/Home/Desktop/Fotos/logo.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  MuiNavColor: {
    backgroundColor: "#000000",
    minWidth: "92vw",
    display: "flex",
    flexDirection: "column",
    // padding: "18px 0",
    fontSize: "2.1rem",
    // minHeight: "100vh",
  },
  MenuNavColor: {
    backgroundColor: "#000000",

    // marginTop: "40px",
  },
  menuHeader1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#000000",
    // marginTop: "40px",
  },
});
export default function NavBarMobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link to="/">
        <img
          style={{
            maxWidth: "195px",
            maxHeight: "45px",
          }}
          src={logo}
          alt=""
        />
      </Link>
      <Button
        style={{ float: "right" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img
          style={{ width: "45px", height: "33px" }}
          src={MobileMenu}
          alt=""
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        className={classes.MenuNavColor}
        onClose={handleClose}
      >
        <div className={classes.MuiNavColor}>
          <div className={classes.menuHeader1}>
            <Link to="/">
              <img
                style={{
                  maxHeight: "195px",
                  maxHeight: "45px",
                  objectFit: "fill",
                }}
                src={logo}
                alt=""
              />
            </Link>

            <img
              style={{ width: "39px", height: "31px", objectFit: "contain" }}
              src={MobileMenu}
              alt=""
              onClick={handleClose}
            />
          </div>
          <MenuItem
            component={Link}
            to="/"
            onClick={handleClose}
            selected={true}
            className={classes.MuiNavColor}
            style={{ padding: "18px 0" }}
          >
            Home
          </MenuItem>
          <MenuItem
            style={{}}
            component={Link}
            to="/contact"
            onClick={handleClose}
            className={classes.MuiNavColor}
            style={{ padding: "18px 0" }}
          >
            Contact Us
          </MenuItem>
          <MenuItem
            component={Link}
            to="/about"
            onClick={handleClose}
            style={{ padding: "18px 0" }}
            className={classes.MuiNavColor}
          >
            About us
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
