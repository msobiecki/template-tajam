import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.sass';

import BannerItem from "./banner-item/Banner-Item";

export default function Banner({ banner }) {

  const items = () => {
    return banner.data.map((element, index) => {
      return (
        <div key={index} className="banner__item">
          <BannerItem banner={element} />
        </div>
      )
    })
  }

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
    arrows: false,
    dots: true,
    fade: true,
  }

  return (
    <div className="banner">
      <Slider {...settings} className="banner__box">
        {items()}
      </Slider>
    </div>
  );
}
