import React from "react";
import { useThemeContext } from "../../toggleTheme/context/theme";

export const Personal = () => {
  const { theme } = useThemeContext();
  const classs = { backgroundColor: theme.background, color: theme.color };
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name" style={classs}>
        Sergey.Ivanov
      </p>
      <div className="sidebar__avatar"></div>
    </div>
  );
};
