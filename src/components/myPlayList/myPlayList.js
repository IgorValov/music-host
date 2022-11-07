import React from "react";
import { useState, useMemo } from "react";
import { ThemeContext, themes } from "../../toggleTheme/context/theme";
import Main from "./main/main";
import Bar from "./bar/bar";
import { useThemeContext } from "../../toggleTheme/context/theme";

export const MyPLayList = () => {
  const { theme } = useThemeContext();
  const styleTheme = { backgroundColor: theme.background, color: theme.color };
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const funcMemo = () => {
    const toggleTheme = () => {
      if (currentTheme === themes.light) {
        setCurrentTheme(themes.dark);
        return;
      }

      setCurrentTheme(themes.light);
    };
    return { theme: currentTheme, toggleTheme };
  };

  const memoUseFunc = useMemo(funcMemo, [currentTheme]);
  return (
    <ThemeContext.Provider value={memoUseFunc}>
      <div className="wrapper">
        <div className="container" style={styleTheme}>
          <Main />
          <Bar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
