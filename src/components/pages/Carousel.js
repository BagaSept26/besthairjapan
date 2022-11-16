import React, {Component} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import g1 from '../assets/logo1.png';
import g2 from '../assets/logo2.png';
import g3 from '../assets/rf.webp';
import g4 from '../assets/p1.png'

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear" 
};
const Carousel = () => {
  return (
    <div className="mainContainer pt-20">
        <h2></h2>
        <Slider {...settings}>
          <div className="container">
            <img src={g1} />
          </div>
          <div className="container">
            <img src={g3} />
          </div>
          <div className="container">
            <img src={g2} />
          </div>
          <div className="container">
            <img src={g4} />
          </div>
          
        </Slider>
        <div className="mainContainer">
        <h2></h2>
        <Slider {...settings}>
          <div className="container">
            <img src={g1} />
          </div>
          <div className="container">
            <img src={g3} />
          </div>
          <div className="container">
            <img src={g2} />
          </div>
          <div className="container">
            <img src={g4} />
          </div>
          
        </Slider>
      </div>
      </div>
      
  )
}

export default Carousel