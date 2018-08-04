import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Menu.sass";


class HeaderMenu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink className="menu__link" activeClassName="-active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" activeClassName="-active" exact to="/page/articles">
              Articles
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" activeClassName="-active" exact to="/page/about">
              About
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" activeClassName="-active" exact to="/page/expertise">
              Expertise
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" activeClassName="-active" exact to="/page/works">
              Works
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" activeClassName="-active" exact to="/page/people-say">
              People Say
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" activeClassName="-active" exact to="/page/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;
