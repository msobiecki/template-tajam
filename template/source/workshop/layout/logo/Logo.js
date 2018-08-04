import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import "./Logo.sass";

import LogoImage from "../../../images/logo.png";

class Logo extends Component {
  render() {
    return (
      <NavLink className="logo" exact to="/" title="Go to Homepage">
        <img src={LogoImage} alt="Logo" />
      </NavLink>
    );
  }
}

export default Logo;
