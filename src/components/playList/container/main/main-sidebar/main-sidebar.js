import React from "react";
import { Personal } from "../../../../../pages/sidebar-personal/sidebar-personal";
import { Block } from "../../../../../pages/sidebar-block/sidebar-block";

const SideBar = () => {
  return (
    <div className="main__sidebar sidebar">
      <Personal />
      <Block />
    </div>
  );
};

export default SideBar;
