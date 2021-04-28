import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function BackGroundImage() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}>
        <div >
          <img  src="Images/backgroundimage.jpg" height="500px" width="100%" />
          </div>
      </Carousel>
  )
}