import React from "react";
import { useState } from "react";
import { ThemeContext, themes } from "../../ToggleTheme/context/theme";
import { Container } from "./container/container";

export const Wraper = () => {
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
        <Container />
      </div>
    </ThemeContext.Provider>
  );
};
