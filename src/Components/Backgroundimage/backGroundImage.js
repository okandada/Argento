import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackgroundImage from "../../Images/Hero.png"


export default function BackGroundImage() {
  return (
   
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}>
        <div >
          <img  src={BackgroundImage} height="500px" width="70%" />
          </div>
      </Carousel>
      
  )
}