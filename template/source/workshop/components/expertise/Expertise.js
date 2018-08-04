import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Expertise.sass';

import ExpertiseItem from "./expertise-item/expertise-item"

export default function Expertise({ expertise }) {

  const items = () => {
    return expertise.data.map((element, index) => {
      return (
        <div key={index} className="expertise__item">
          <ExpertiseItem expertise={element} />
        </div>
      )
    })
  }

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          unslick: true
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          arrows: false,
          dots: true,
        }
      },
    ]
  }

  return (
    <div className="expertise">
      <div className="expertise__content">
        <div className="expertise__container">
          <div className="expertise__titlebox">
            <h3 className="expertise__title">{expertise.title}</h3>
            <h4 className="expertise__subtitle">{expertise.subtitle}</h4>
          </div>

          <Slider {...settings} className="expertise__box">
            {items()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
