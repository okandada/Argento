import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackgroundImage from "../../Images/Hero.png";
import BackgroundImageMobile from "../../Images/Smartphone/Fotos/BackgroundImageMobile.jpg";
import BackgroundImageTabletHoch from "../../Images/Tablet Hoch/Fotos/BackGroundImageTabletHoch.png";
import "../../App.css";

export default function BackGroundImage() {
  return (
    <div>
      <img
        src={BackgroundImage}
        height="500px"
        width="100%"
        alt=""
        className="Desktop"
      />
      {/* <img src={BackgroundImageMobile} className="Desktop"></img> */}
      <img src={BackgroundImageTabletHoch} className="Ipad" alt=""></img>
      <img src={BackgroundImageMobile} className="Mobile" alt=""></img>
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
