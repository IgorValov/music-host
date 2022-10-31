import React, { useState } from "react";
import { MenuList } from "./nav-menu-list";
export const NavMenu = () => {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickBurger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav__burger burger" onClick={onClickBurger}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <MenuList isMenuOpen={isMenuOpen} />
    </div>
  );
};
