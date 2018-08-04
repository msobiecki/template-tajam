import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Contact-Clients.sass';

export default function ContactClients({ clients }) {

  const items = () => {
    return clients.data.map(client => {
      return (
        <div key={client.id} className="contact-clients__item">
          <img className="contact-clients__image" src={client.url} alt={client.name} />
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
    <div className="contact-clients">
      <h3 className="contact-clients__title">{clients.title}</h3>
      <Slider {...settings} className="contact-clients__content">
        {items()}
      </Slider>
    </div>
  );
}
