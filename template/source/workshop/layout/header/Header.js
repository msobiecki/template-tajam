import React, { Component } from "react";

import "./Header.sass";

import Logo from "../logo/Logo";
import HeaderMenu from "./header-menu/Header-Menu";

import IconHamburger from "react-icons/lib/io/navicon";

class Header extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="header__container">
            <div className="header__box">
              <div className="header__item -logo">
                <Logo />
              </div>

              <div className="header__item -menu">
                <HeaderMenu />
              </div>

              <div className="header__trigger" onClick={handleClick}>
                <IconHamburger size={48} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
