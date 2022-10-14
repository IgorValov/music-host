import React from "react";
import BarBlock from "./bar-block/bar-block";

export const BarContent = () => {
  return (
    <div className="bar__content">
      <div className="bar__player-progress"></div>
      <BarBlock />
    </div>
  );
};
