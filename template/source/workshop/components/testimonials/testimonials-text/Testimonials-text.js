import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials-text.sass';

class TestimonialsText extends Component {

  render() {
    const { testimonials } = this.props;

    const settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          }
        }
      ]
    }

    const items = () => {
      return testimonials.data.map(testimonial => {
        return (
          <div key={testimonial.id} className="testimonials-text__item">
            <div className="testimonials-text__inner">
              <div className="testimonials-text__text">{testimonial.text}</div>
              <div className="testimonials-text__author">{testimonial.person.name}</div>
              <div className="testimonials-text__rank">{testimonial.person.rank}</div>
              {
                testimonial.person.avatar && <div className="testimonials-text__imagebox">
                  <img className="testimonials-text__image" src={testimonial.person.avatar} alt={testimonial.person.name} />
                </div>
              }
            </div>
          </div>
        )
      })
    }

    return (
      <div className="testimonials-text" >
        <Slider {...settings} className="testimonials-text__slider">
          {items()}
        </Slider>
      </div >
    );
  }
}

export default TestimonialsText;
