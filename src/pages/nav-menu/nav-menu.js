import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavMenu extends Component {
  state = {
    done: true,
  };

  clickBurger = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };
  render() {
    const { done } = this.state;

    let menuHidden = "menu__list";

    if (done) {
      menuHidden += " hidden";
    }

    return (
      <div>
        <div className="nav__burger burger" onClick={this.clickBurger}>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
        <div className="nav__menu menu">
          <ul className={menuHidden}>
            <li className="menu__item">
              <NavLink to="/playlist">
                <p className="nav__menu-style">Главная</p>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/myplaylist">
                <p className="nav__menu-style">Мой плейлист</p>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/">
                <p className="nav__menu-style">Выйти</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
