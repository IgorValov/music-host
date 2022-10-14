import React from "react";
import { Nav } from "./nav/nav";
import CenterBlock from "./main-centerblock/main-centerblock";
import SideBar from "./main-sidebar/main-sidebar";
import { useThemeContext } from "../../../../ToggleTheme/context/theme";

const Main = () => {
  const { theme } = useThemeContext();
  const classs = { backgroundColor: theme.background, color: theme.color };
  return (
    <main className="main" style={classs}>
      <Nav />
      <CenterBlock />
      <SideBar />
    </main>
  );
};

export default Main;
