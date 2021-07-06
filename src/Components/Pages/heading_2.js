import YellowStroke from "../../Images/Home/SVG/YellowStroke.svg";
import React from "react";
import Typography from "@material-ui/core/Typography";

export const Heading_2 = (props) => {
  const dashSize = props.DashSize ? props.DashSize : "13%";

  return (
    <div>
      <Typography
        style={{
          display: "grid",
          padding: props.padding,

          textAlign: "left",
        }}
        variant={props.size}
      >
        {props.Text}
        <img
          width={dashSize}
          style={{ paddingTop: "7px" }}
          src={YellowStroke}
          alt=""
        />
      </Typography>
    </div>
  );
};
