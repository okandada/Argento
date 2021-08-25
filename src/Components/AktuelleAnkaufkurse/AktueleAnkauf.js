import React from "react";
import "./AktueleAnkauf.css";
import Typography from "@material-ui/core/Typography";

export default function AktueleAnkauf(props) {
  return (
    <div className="text-items">
      <Typography variant="h4">{props.firsttitle}</Typography>
      <Typography variant="subtitle1">{props.subtitle}</Typography>
      {/* <div className="sub-title">{props.subTitle}</div> */}
      <div className="price-field">
        <Typography variant="body2">{props.price}</Typography>
      </div>
      <span className="sub-title price-field-subtitle-left ">
        {props.price_subtitle_left}
      </span>
      <span className="sub-title price-field-subtitle-right">
        {props.price_subtitle_right}
      </span>
    </div>
  );
}
