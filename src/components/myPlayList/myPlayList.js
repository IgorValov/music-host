import React from "react";
import { useState } from "react";
import { ThemeContext, themes } from "../../toggleTheme/context/theme";
import Main from "./main/main";
import Bar from "./bar/bar";
import { useThemeContext } from "../../toggleTheme/context/theme";

export const MyPLayList = () => {
  const { theme } = useThemeContext();
  const classs = { backgroundColor: theme.background, color: theme.color };
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.light) {
      setCurrentTheme(themes.dark);
      return;
    }

    setCurrentTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div className="wrapper">
        <div className="container" style={classs}>
          <Main />
          <Bar />
          <footer className="footer"></footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
