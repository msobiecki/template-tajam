import React from 'react';

import './Works.sass';

function Works() {
  return (
    <div className="works">
      <div className="works__container">
        <div className="works__header">
          <h3 className="works__title">OUR WORKS</h3>
          <a href="#" className="works__link">See All Project in dribbble</a>
        </div>

        <div className="works__content">
          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>

          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>

          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>

          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>

          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>

          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>
          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>
          <div className="works__item">
            <a href="#" className="works__work">
              <img src="http://via.placeholder.com/350x150" className="works__image" alt="" />
            </a>
          </div>

        </div>

        <div className="works__footer">
          <a href="#" className="works__button">LOAD MORE</a>
        </div>
      </div>
    </div>
  );
}

export default Works;
