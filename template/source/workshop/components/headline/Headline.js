import React from "react";
import { Player, ControlBar } from 'video-react';

import "./Headline.sass";

export default function Headline({ headline }) {
  return (
    <div className="headline">
      <div className="headline__overlay">
        {
          headline.video ?
            <Player
              src={headline.video}
              playsInline
              poster={headline.poster}
              autoPlay
              muted
              loop
            />
            :
            headline.images ?
              <picture>
                <source srcSet={headline.images.mobile} media="(max-width: 768px)" />
                <source srcSet={headline.images.default} />
                <img className="headline__background" srcSet={headline.images.default} alt={headline.title} />
              </picture>
              :
              ""
        }
      </div>
      <div className="headline__content">
        <div className="headline__box">
          <h1 className="headline__title">
            {headline.title}
          </h1>
        </div>
      </div>
    </div>
  )
}
