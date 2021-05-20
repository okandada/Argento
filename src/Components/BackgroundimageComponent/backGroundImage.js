import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackgroundImageDesktop from "../../Images/ÜberUns/Desktop/Fotos/BackgroundImageDesktop.png";
import BackgroundImageMobile from "../../Images/ÜberUns/Smartphone/Fotos/BackgroundImageMobile.png";
import BackgroundImageTabletHoch from "../../Images/ÜberUns/TabletHoch/Fotos/BackgroundImageTabletHoch.png";
import BackgroundImageQuer from "../../Images/ÜberUns/TabletQuer/Fotos/BackgroundImageQuer.png";
import "../../App.css";
import { Component } from "react";
import equal from "fast-deep-equal";

const display = true;
export class BgImageComponent extends Component {
  constructor(props) {
    super();
  }
  componentDidUpdate(prevProps) {
    if (this.props.bgImage !== prevProps.bgImage) {
      console.log("hello");
      // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
      this.render();
    }
  }
  render() {
    // if (this.state.currentState !== this.props.bgImage) {
    //   console.log(this.props);

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
      </div>
    );
  }
}
export default BgImageComponent;
