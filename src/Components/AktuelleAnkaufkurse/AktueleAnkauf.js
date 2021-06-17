import React from "react";
import "./AktueleAnkauf.css";

export default function AktueleAnkauf(props) {
  return (
    <div className="text-items">
      <div className="first-title">{props.firstTitle}</div>
      <div className="sub-title">{props.subTitle}</div>
      <div className="price-field">
        <h6 style={{ fontSize: "20px" }}>{props.price}</h6>
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
