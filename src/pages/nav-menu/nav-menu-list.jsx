import React from "react";
import { NavLink } from "react-router-dom";
export const MenuList = (props) => {
  return (
    <div className="nav__menu menu">
      <ul className={props.isMenuOpen ? "menu__list" : "menu__list hidden"}>
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
  );
};
