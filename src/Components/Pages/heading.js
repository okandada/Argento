import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import React from "react";
import Typography from "@material-ui/core/Typography";

export const Heading = (props) => {
  return (
    <div>
      <Typography
        style={{ display: "grid", padding: props.padding }}
        variant={props.size}
      >
        {props.Text}
        <img width="13%" src={YellowStroke} alt="" />
      </Typography>
    </div>
  );
};
