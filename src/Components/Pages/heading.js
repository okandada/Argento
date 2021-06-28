import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import React from "react";
import Typography from "@material-ui/core/Typography";

export const Heading = (props) => {
  return (
    <div>
      <Typography
        style={{
          display: "grid",
          padding: props.padding,
          // fontFamily: "TGL0-1451Engschrift;",
        }}
        variant={props.size}
      >
        {props.Text}
        <img
          width="13%"
          style={{ paddingTop: "10px" }}
          src={YellowStroke}
          alt=""
        />
      </Typography>
    </div>
  );
};
