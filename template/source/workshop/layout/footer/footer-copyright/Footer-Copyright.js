import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer-Copyright.sass";

export default function FooterCopyright({ copyright }) {

  const item = () => {
    return copyright.link.map((element, index) => {
      return (
        <NavLink key={index} className="footer-copyright__link" exact to={element.url}>
          {element.title}
        </NavLink>
      )
    })
  }

  return (
    <div className="footer-copyright">
      <div className="footer-copyright__item">
        {item()}
      </div>
      <div className="footer-copyright__item">
        <div className="footer-copyright__text">{copyright.text}</div>
      </div>
    </div>
  );
}
