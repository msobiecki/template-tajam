import React from 'react';
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Works.sass';

export default function Works({ works }) {

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: true,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          arrows: false,
          dots: true,
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

  const items = () => {
    return works.data.map(work => {
      return (
        <div key={work.id} className="works__item">
          {
            work.href ?
              work.external ?
                <a href={work.href} target="_blank" className="works__work">
                  <img src={work.image} className="works__image" alt={work.title} />
                </a>
                :
                <NavLink exact to={work.href} className="works__work">
                  <img src={work.image} className="works__image" alt={work.title} />
                </NavLink>
              :
              <div className="works__work">
                <img src={work.image} className="works__image" alt={work.title} />
              </div>
          }
        </div>
      )
    })
  }

  return (
    <div className="works">
      <div className="works__container">
        <div className="works__header">
          <h3 className="works__title">{works.title}</h3>
        </div>

        <Slider {...settings} className="works__content">
          {items()}
        </Slider>

        <div className="works__footer">
          {
            works.link.href ?
              works.link.external ?
                <a href={works.link.href} target="_blank" className="works__button">{works.link.text}</a>
                :
                <NavLink exact to={works.link.href} className="works__button">{works.link.text}</NavLink>
              :
              ""
          }
        </div>
      </div>
    </div>
  );
}
