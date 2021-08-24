import YellowStroke from "../../Images/Home/SVG/YellowStroke.svg";
import React from "react";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
export const AboutUnsereHeadingHandler = (props) => {
  const headingDashSize = props.HeadingDashSize ? props.HeadingDashSize : "15%";

  return (
    <div>
      <Typography
        style={{
          display: "grid",
          padding: props.padding,
          // minWidth: "805px",
          textAlign: "left",
        }}
        variant={props.size}
      >
        {props.Text}
        <img
          className="dash-width AboutUnsereHeading"
          width={headingDashSize}
          style={{ paddingTop: "7px" }}
          src={YellowStroke}
          alt=""
        />
      </Typography>
    </div>
  );
};
