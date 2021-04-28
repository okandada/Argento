import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function BackGroundImage() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={true}>
        <div >
          <img  src="src/images/backgroundimage.jpg" height="500px" width="100%" />
          </div>
      </Carousel>
  )
}