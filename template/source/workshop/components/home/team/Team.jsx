import React from 'react';

import './Team.sass';
import BackgroundImage from './images/team-background.jpg';


function Team() {
  return (
    <div className="team">
      <div className="team__overlay">
        <img className="team__background" src={BackgroundImage} alt="Ram Background" />
      </div>
      <div className="team__content">
        <div className="team__container">
          <div className="team__titlebox">
            <h3 className="team__title">MEET OUR AMAZING TEAM</h3>
            <h4 className="team__subtitle">Lorem ipsum dolor sit amet proin gravida nigh vel velit</h4>
          </div>

          <div className="team__box">
            <div className="team__text">Become part of our dream team, let's join us!</div>

            <div className="team__navigation">
              <a className="team__link" href="#">WE ARE HIRING</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
