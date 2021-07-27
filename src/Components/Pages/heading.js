import YellowStroke from "../../Images/Home/SVG/YellowStroke.svg";
import React from "react";
import Typography from "@material-ui/core/Typography";

export const Heading = (props) => {
  const dashSize = props.DashSize ? props.DashSize : "13%";

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
          className="dash-width"
          width={dashSize}
          style={{ paddingTop: "7px" }}
          src={YellowStroke}
          alt=""
        />
      </Typography>
    </div>
  );
};
