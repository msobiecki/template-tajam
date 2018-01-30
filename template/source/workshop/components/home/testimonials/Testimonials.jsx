import React from 'react';

import './Testimonials.sass';
import BackgroundImage from './images/testimonials-background.jpg';

import TestimonialsText from './testimonials-text/Testimonials-text';

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials__overlay">
        <img className="testimonials__background" src={BackgroundImage} alt="Testimonials Background" />
      </div>
      <div className="testimonials__content">
        <div className="testimonials__container">
          <TestimonialsText />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
