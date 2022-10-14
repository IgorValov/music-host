import React from "react";
import Main from "./main/main";
import Bar from "./bar/bar";
import { useThemeContext } from "../../../ToggleTheme/context/theme";

export const Container = () => {
  const { theme } = useThemeContext();
  const classs = { backgroundColor: theme.background, color: theme.color };
  return (
    <div className="container" style={classs}>
      <Main />
      <Bar />
      <footer className="footer"></footer>
    </div>
  );
};
