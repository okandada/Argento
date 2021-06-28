import React from "react";
import "../../App.css";
import { Component } from "react";
import Typography from "@material-ui/core/Typography";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import BackgroundImageDesktop from "../../Images/Home/Desktop/Fotos/BackgroundImageDesktop.jpg";
export class BgImageComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="img-container">
        <img
          src={BackgroundImageDesktop}
          width="100%"
          height="100%"
          alt=""
          text="unserne leider schaft"
          style={{ text: "unserne leider schaft" }}
        />
        <div class="centered">
          <Typography variant="h1">Gold & Silber</Typography>
          <div class="responsive bottom-yellow-line-margin ">
            <img src={YellowStroke} alt="" />
          </div>
          <div style={{ float: "left", marginTop: "5px" }}>
            <Typography variant="subtitle2">
              Die beste Währung in Krisenzeiten
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
export default BgImageComponent;
