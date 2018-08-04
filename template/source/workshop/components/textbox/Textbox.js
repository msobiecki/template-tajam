import React from 'react';

import './Textbox.sass';

export default function Textbox({ textbox }) {


  return (
    <div className="textbox">
      <div className="textbox__content">
        <div className="textbox__container">
          <div className="textbox__box">
            { textbox.image ?
              <div className="textbox__imagebox">
                <img className="textbox__image" src={textbox.image} alt={textbox.title} />
              </div>
              :
              ""
            }

            <div className="textbox__textbox">
              <h3 className="textbox__title">{textbox.title}</h3>
              <div className="textbox__text">
                {textbox.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
