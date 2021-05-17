import React from "react";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";

export default function Title(props) {
  return (
    <div className={props.class}>
      <h1 className="title">{props.name}</h1>
      <div className="dash">
        <img src={YellowStroke} alt="" />
      </div>
    </div>
  );
}
