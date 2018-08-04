import React from "react";

import "./Expertise-Item.sass";


export default function ExpertiseItem({ expertise }) {
  return (
    <div className="expertise-item">
      <div className="expertise-item__imagebox">
        <img className="expertise-item__image" src={expertise.image} alt={expertise.name} />
      </div>
      <div className="expertise-item__content">
        <div className="expertise-item__name">{expertise.name}</div>
        <div className="expertise-item__text">{expertise.text}</div>
      </div>
    </div>
  )
}
