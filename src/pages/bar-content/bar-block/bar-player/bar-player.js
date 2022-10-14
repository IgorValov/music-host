import React from "react";
import { Controls } from "./player-controls/player-controls";
import TrackPlay from "./track-play/track-play";

const BarPlayer = () => {
  return (
    <div className="bar__player player">
      <Controls />
      <TrackPlay />
    </div>
  );
};

export default BarPlayer;
