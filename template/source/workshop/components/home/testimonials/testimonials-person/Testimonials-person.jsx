import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import './Testimonials-person.sass';

import PersonImage1 from './images/person1.png';

class TestimonialsPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      settings: {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
      },
    };
  }
  render() {
    return (
      <div className="testimonials-person">
        <Slider {...this.state.settings} className="testimonials-person__slider">
          <div className="testimonials-person__item">
            <div className="testimonials-person__imagebox">
              <img className="testimonials-person__image" src={PersonImage1} alt="Person1" />
            </div>
          </div>
          <div className="testimonials-person__item">
            <div className="testimonials-person__imagebox">
              <img className="testimonials-person__image" src={PersonImage1} alt="Person1" />
            </div>
          </div>
          <div className="testimonials-person__item">
            <div className="testimonials-person__imagebox">
              <img className="testimonials-person__image" src={PersonImage1} alt="Person1" />
            </div>
          </div>
          <div className="testimonials-person__item">
            <div className="testimonials-person__imagebox">
              <img className="testimonials-person__image" src={PersonImage1} alt="Person1" />
            </div>
          </div>
          <div className="testimonials-person__item">
            <div className="testimonials-person__imagebox">
              <img className="testimonials-person__image" src={PersonImage1} alt="Person1" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default TestimonialsPerson;
