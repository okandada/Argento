import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MobileMenu from "../../Images/ÜberUns/Smartphone/SVG/MobileMenu.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function NavBarMobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ float: "right" }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img
          style={{ width: "30px", height: "22px" }}
          src={MobileMenu}
          alt=""
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/home" onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem component={Link} to="/contact" onClick={handleClose}>
          Contact Us
        </MenuItem>
        <MenuItem component={Link} to="/about" onClick={handleClose}>
          About us
        </MenuItem>
      </Menu>
    </div>
  );
}
