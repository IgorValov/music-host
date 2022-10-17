import React from "react";
import { useThemeContext } from "../../toggleTheme/context/theme";

export const Search = () => {
  const { theme } = useThemeContext();
  const classs = { backgroundColor: theme.background, color: theme.color };
  return (
    <div className="centerblock__search search">
      <svg class="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        style={classs}
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};
