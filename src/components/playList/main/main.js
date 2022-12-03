import React from "react";
import { Nav } from "./nav/nav";
import CenterBlock from "./main-centerblock/main-centerblock";
import SideBar from "./main-sidebar/main-sidebar";
import { useThemeContext } from "../../../toggleTheme/context/theme";

const Main = () => {
  const { theme } = useThemeContext();
  return (
    <main
      className="main"
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <Nav />
      <CenterBlock />
      <SideBar />
    </main>
  );
};

export default Main;
