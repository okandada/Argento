import React from "react";
import "../../App.css";
import { Component } from "react";
import Typography from "@material-ui/core/Typography";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
export class BgImageComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div class="img-container">
        <img
          src={this.props.bgImage.DeskTopImage}
          width="100%"
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

        {/* <img
          src={this.props.bgImage.IpadImage}
          width="100%"
          className="IpadPro"
          alt=""
        />
        <img
          src={this.props.bgImage.IpadQuerImage}
          width="100%"
          className="IpadQuer"
          alt=""
        />
        <img
          src={this.props.bgImage.MobileImage}
          width="100%"
          className="mobile"
          alt=""
        /> */}
        {/* images for the unser shop */}
        {/* <img
          src={this.props.UnserShopImages.DeskTopImagekasseShop}
          width="100%"
          className="mobile"
          alt=""
        /> */}
      </div>
    );
  }
}
export default BgImageComponent;
