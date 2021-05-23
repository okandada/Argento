import React from "react";
import "../../App.css";
import { Component } from "react";
export class BgImageComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <img
          src={this.props.bgImage.DeskTopImage}
          width="100%"
          alt=""
          className="desktop"
          text="unserne leider schaft"
          style={{ text: "unserne leider schaft" }}
        />

        <img
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
        />
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
