import React from "react";
import "../../App.css";
import { Component } from "react";
import Typography from "@material-ui/core/Typography";
import BackgroundImageDesktop from "../../Images/Home/Desktop/Fotos/BackgroundImageDesktop.jpg";
import { Heading } from "../Pages/heading";
export class BgImageComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ height: this.props.imageHeight }} className="img-container">
        <img
          src={this.props.image ? this.props.image : BackgroundImageDesktop}
          width="100%"
          height="100%"
          alt=""
          text="unserne leider schaft"
          style={{ text: "unserne leider schaft" }}
        />
        <div className="centered">
          <div>
            <Heading
              size={this.props.HeadingSize ? this.props.HeadingSize : "h1"}
              DashSize={this.props.DashSize}
              Text={this.props.Heading}
            ></Heading>
          </div>
          <div style={{ float: "left", marginTop: "5px" }}>
            <Typography variant="subtitle2">{this.props.SubHeading}</Typography>
          </div>
        </div>
      </div>
    );
  }
}
export default BgImageComponent;
