import React from "react";
import { useThemeContext } from "../../../../../ToggleTheme/context/theme";

const Search = () => {
  const { theme } = useThemeContext();
  const classs = { backgroundColor: theme.background, color: theme.color };
  return (
    <div className="centerblock__search search">
      <svg class="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
        style={classs}
      />
    </div>
  );
};

export default Search;
