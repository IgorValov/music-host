import { NavLink } from "react-router-dom";
import { NavLogo } from "../../../../../pages/nav-logo/nav-logo";
import { ThemeSwitcher } from "../../../../../ToggleTheme/theme-switcher";
import { useState } from "react";
import { useThemeContext } from "../../../../../ToggleTheme/context/theme";

export const Nav = () => {
  let [hiddenState] = useState(false);
  let menuHidden;
  const ClickBurger = () => {
    hiddenState = !hiddenState;
    menuHidden = "hidden";
    if (hiddenState === true) {
      menuHidden = "menu__list";
      console.log(menuHidden);
    } else {
      menuHidden = "hidden";
      console.log(menuHidden);
    }
  };
  const { theme } = useThemeContext();
  const classs = { backgroundColor: theme.background, color: theme.color };
  const BurgerLineStyle = { backgroundColor: theme.color, color: theme.color };
  return (
    <nav className="main__nav nav" style={classs}>
      <NavLogo />
      <div className="nav__burger burger" onClick={ClickBurger}>
        <span className="burger__line" style={BurgerLineStyle}></span>
        <span className="burger__line" style={BurgerLineStyle}></span>
        <span className="burger__line" style={BurgerLineStyle}></span>
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
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
