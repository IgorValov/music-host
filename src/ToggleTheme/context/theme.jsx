import React, { useContext } from "react";

export const themes = {
  dark: {
    color: "#fff",
    background: "#181818",
  },
  light: {
    color: "#000",
    background: "#D3D3D3",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) return theme.dark;

  return theme;
};
