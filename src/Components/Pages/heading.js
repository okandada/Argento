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
          maxWidth: "646px",
          textAlign: "left",
        }}
        variant={props.size}
      >
        {props.Text}
        <img
          width={dashSize}
          style={{ paddingTop: "10px" }}
          src={YellowStroke}
          alt=""
        />
      </Typography>
    </div>
  );
};
