import { GridNoRowsOverlay } from "@material-ui/data-grid";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import Link from "@material-ui/core/Link";

export const Test = () => {
  return (
    <div>
      <div>
        <NavLink to="/home">
          <img style={{ width: "337.4px", height: "80px" }} src={logo} alt="" />
        </NavLink>
      </div>
    </div>
  );
};
export default Test;
