import React, { Component } from 'react';

import './Textpage.sass';


export default function Textpage({ textpage }) {
  return (
    <div className="textpage">
      <div className="textpage__container">
        <h2 className="textpage__title">
          {textpage.title}
        </h2>
        <div className="textpage__box">
          {textpage.content}
        </div>
      </div>
    </div>
  )
}
