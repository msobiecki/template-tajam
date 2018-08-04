import React from 'react';
import { NavLink } from "react-router-dom";
import { Player, ControlBar } from 'video-react';

import './Banner-Item.sass';

export default function BannerItem({ banner }) {

  return (
    <div className="banner-item" >
      <div className="banner-item__overlay">

        {
          banner.video ?
            <Player
              src={banner.video}
              playsInline
              poster={banner.poster}
              autoPlay
              muted
              loop
            />
            :
            banner.images ?
              <picture>
                <source srcSet={banner.images.mobile} media="(max-width: 768px)" />
                <source srcSet={banner.images.default} />
                <img className="banner-item__background" srcSet={banner.images.default} alt={banner.title} />
              </picture>
              :
              ""
        }
      </div>

      <div className="banner-item__content">
        <div className="banner-item__box">
          <h1 className="banner-item__title">
            {banner.title}
          </h1>
          <div className="banner-item__text">
            {banner.text}
          </div>
          <div className="banner-item__navigation">
            {
              banner.link && banner.link.href ?
                banner.link.external ?
                  <a href={banner.link.href} target="_blank" className="banner-item__link">{banner.link.text}</a>
                  :
                  <NavLink exact to={banner.link.href} className="banner-item__link">{banner.link.text}</NavLink>
                :
                ""
            }
          </div>
        </div>
      </div>

    </div >
  );
}
