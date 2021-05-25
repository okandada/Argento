import React from "react";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";

export default function Title(props) {
  return (
    <div className={props.class}>
      <h2 className="title">{props.name}</h2>
      <div className="dash">
        <img src={YellowStroke} alt="" />
      </div>
    </div>
  );
}
