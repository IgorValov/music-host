import React from "react";
import BarPlayer from "./bar-player/bar-player";
import Volume from "./bar-volume/bar-volume";

const BarBlock = () => {
  return (
    <div className="bar__player-block">
      <BarPlayer />
      <Volume />
    </div>
  );
};

export default BarBlock;
