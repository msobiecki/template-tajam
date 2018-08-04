import React from 'react';
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Team.sass';

import BackgroundImage from '../../../images/team-background.jpg';

import TeamPeople from "./team-people/Team-People"

export default function Team({ team }) {

  const items = () => {
    return team.data.map((element, index) => {
      return (
        <div key={index} className="team__item">
          <TeamPeople person={element} />
        </div>
      )
    })
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
      }
    ]
  }

  return (
    <div className="team">
      <div className="team__overlay">
        <img className="team__background" src={BackgroundImage} alt="Ram Background" />
      </div>
      <div className="team__content">
        <div className="team__container">
          <div className="team__titlebox">
            <h3 className="team__title">{team.title}</h3>
            <h4 className="team__subtitle">{team.subtitle}</h4>
          </div>

          <Slider {...settings} className="team__box">
            {items()}
          </Slider>

          <div className="team__footer">
            <div className="team__text">{team.details}</div>

            <div className="team__navigation">
              {
                team.link.href ?
                  team.link.external ?
                    <a href={team.link.href} target="_blank" className="team__button">{team.link.text}</a>
                    :
                    <NavLink exact to={team.link.href} className="team__button">{team.link.text}</NavLink>
                  :
                  ""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
