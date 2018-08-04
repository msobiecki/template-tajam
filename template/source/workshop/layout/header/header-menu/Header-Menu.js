import React, { Component } from "react";

import "./Header-Menu.sass";

import Menu from "../../menu/Menu";


class HeaderMenu extends Component {
  render() {
    return (
      <div className="header-menu">
        <div className="header-menu__item -menu">
         <Menu />
        </div>

        <div className="header-menu__item">
          {/* TODO: Header-contact */}
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
