import { NavLink } from "react-router-dom";
import { NavLogo } from "../../../../pages/nav-logo/nav-logo";
import { ThemeSwitcher } from "../../../../toggleTheme/theme-switcher";
import { useState } from "react";
import { useThemeContext } from "../../../../toggleTheme/context/theme";

export const Nav = () => {
  let [hiddenState] = useState(true);

  const ClickBurger = () => {
    hiddenState = !hiddenState;
    if (hiddenState === true) {
      menuHidden = "nav__menu menu";
    } else if (hiddenState === false) {
      menuHidden = "hidden";
    }
  };
  let menuHidden;

  const { theme } = useThemeContext();
  const styleTheme = { backgroundColor: theme.background, color: theme.color };
  const BurgerLineStyle = { backgroundColor: theme.color, color: theme.color };
  return (
    <nav className="main__nav nav" style={styleTheme}>
      <NavLogo />
      <div className="nav__burger burger" onClick={ClickBurger}>
        <span className="burger__line" style={BurgerLineStyle}></span>
        <span className="burger__line" style={BurgerLineStyle}></span>
        <span className="burger__line" style={BurgerLineStyle}></span>
      </div>
      <div className={menuHidden}>
        <ul className="menu__list">
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
      <ThemeSwitcher />
    </nav>
  );
};
