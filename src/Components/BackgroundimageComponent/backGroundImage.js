import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackgroundImageDesktop from "../../Images/ÜberUns/Desktop/Fotos/BackgroundImageDesktop.png";
import BackgroundImageMobile from "../../Images/ÜberUns/Smartphone/Fotos/BackgroundImageMobile.jpg";
import BackgroundImageTabletHoch from "../../Images/ÜberUns/TabletHoch/Fotos/BackgroundImageTabletHoch.png";
import BackgroundImageQuer from "../../Images/ÜberUns/TabletQuer/Fotos/BackgroundImageQuer.png";
import "../../App.css";

export default function BgImageComponent() {
  return (
    <div style={{ marginInline: "7%" }}>
      <img
        src={BackgroundImageDesktop}
        width="100%"
        alt=""
        className="desktop"
        text="unserne leider schaft"
      />

      <img
        src={BackgroundImageTabletHoch}
        width="100%"
        className="IpadPro"
        alt=""
      />
      <img src={BackgroundImageMobile} width="100%" className="mobile" alt="" />
      {/* <img src={BackgroundImageQuer} className="IpadProQuerf" alt="" /> */}
    </div>

    // <Carousel

    //   autoPlay
    //   infiniteLoop
    //   showThumbs={false}>

    //     <div >
    //       <img  src={BackgroundImage} height="500px" width="70%" />
    //       </div>

    //   </Carousel>
  );
}
