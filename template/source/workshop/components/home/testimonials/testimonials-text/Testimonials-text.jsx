import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials-text.sass';

import PersonImage1 from './images/person1.png';

class TestimonialsText extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 0);
  }

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.changeSlider,
    };

    return (
      <div className="testimonials-text" >
        <Slider {...settings} className="testimonials-text__slider">
          <div className="testimonials-text__item">
            <div className="testimonials-text__inner">
              <div className="testimonials-text__text"> This is version  of</div>
              <div className="testimonials-text__author">JANE GALADRIEL</div>
              <div className="testimonials-text__rank">CEO TENGUKREP</div>

              <div className="testimonials-text__imagebox">
                <img className="testimonials-text__image" src={PersonImage1} alt="Person1" />
              </div>
            </div>
          </div>
          <div className="testimonials-text__item">
            <div className="testimonials-text__inner">
              <div className="testimonials-text__text"> This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</div>
              <div className="testimonials-text__author">JANE GALADRIEL</div>
              <div className="testimonials-text__rank">CEO TENGUKREP</div>
            </div>
          </div>
          <div className="testimonials-text__item">
            <div className="testimonials-text__inner">
              <div className="testimonials-text__text"> This is Photoshops version  of </div>
              <div className="testimonials-text__author">JANE GALADRIEL</div>
              <div className="testimonials-text__rank">CEO TENGUKREP</div>
            </div>
          </div>
          <div className="testimonials-text__item">
            <div className="testimonials-text__inner">
              <div className="testimonials-text__text"> This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</div>
              <div className="testimonials-text__author">JANE GALADRIEL</div>
              <div className="testimonials-text__rank">CEO TENGUKREP</div>
            </div>
          </div>
          <div className="testimonials-text__item">
            <div className="testimonials-text__inner">
              <div className="testimonials-text__text"> This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</div>
              <div className="testimonials-text__author">JANE GALADRIEL</div>
              <div className="testimonials-text__rank">CEO TENGUKREP</div>
            </div>
          </div>
          <div className="testimonials-text__item">
            <div className="testimonials-text__inner">
              <div className="testimonials-text__text"> This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed.</div>
              <div className="testimonials-text__author">JANE GALADRIEL</div>
              <div className="testimonials-text__rank">CEO TENGUKREP</div>
            </div>
          </div>
        </Slider>
      </div >
    );
  }
}

export default TestimonialsText;
