import React from "react";
import { NavLink } from "react-router-dom";

import "./Team-People.sass";


export default function TeamPeople({ person }) {
  return (

    person.href ?
      person.external ?
        <a href={person.href} target="_blank" className="team-people">
          <div className="team-people__imagebox">
            <img className="team-people__image" src={person.image} alt={person.name} />
          </div>
          <div className="team-people__content">
            <div className="team-people__name">{person.name}</div>
            <div className="team-people__rank">{person.rank}</div>
          </div>
        </a>
        :
        <NavLink exact to={person.href} className="team-people">
          <div className="team-people__imagebox">
            <img className="team-people__image" src={person.image} alt={person.name} />
          </div>
          <div className="team-people__content">
            <div className="team-people__name">{person.name}</div>
            <div className="team-people__rank">{person.rank}</div>
          </div>
        </NavLink>
      :
      <div className="team-people">
        <div className="team-people__imagebox">
          <img className="team-people__image" src={person.image} alt={person.name} />
        </div>
        <div className="team-people__content">
          <div className="team-people__name">{person.name}</div>
          <div className="team-people__rank">{person.rank}</div>
        </div>
      </div>
  )
}
