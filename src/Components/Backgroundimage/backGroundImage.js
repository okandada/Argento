// 


import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import './Banner.css';

export default function BackGroundImage() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}>
        <div >
          <img  src="src/images/backGroundImage.jpg" height="500px" width="100%" />
          
        
        </div>
      </Carousel>
  )
}