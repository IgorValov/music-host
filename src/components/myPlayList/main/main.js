import React from "react";
import { Nav } from "./nav/nav";
import CenterBlock from "./main-centerblock/main-centerblock";
import SideBar from "./main-sidebar/main-sidebar";
import { useThemeContext } from "../../../toggleTheme/context/theme";

const Main = () => {
  const { theme } = useThemeContext();
  const styleTheme = { backgroundColor: theme.background, color: theme.color };
  return (
    <main className="main" style={styleTheme}>
      <Nav />
      <CenterBlock />
      <SideBar />
    </main>
  );
};

export default Main;
