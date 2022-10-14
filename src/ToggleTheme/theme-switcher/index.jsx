import { useThemeContext } from "../context/theme";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();

  return <button onClick={toggleTheme}>Change Theme</button>;
};
