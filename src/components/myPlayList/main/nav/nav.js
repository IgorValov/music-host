import { NavLogo } from "../../../../pages/nav-logo/nav-logo";
import { ThemeSwitcher } from "../../../../toggleTheme/theme-switcher";
import { useThemeContext } from "../../../../toggleTheme/context/theme";
import { NavMenu } from "../../../../pages/nav-menu/nav-menu";

export const Nav = () => {
  const { theme } = useThemeContext();
  const styleTheme = { backgroundColor: theme.background, color: theme.color };
  return (
    <nav className="main__nav nav" style={styleTheme}>
      <NavLogo />
      <NavMenu />
      <ThemeSwitcher />
    </nav>
  );
};
