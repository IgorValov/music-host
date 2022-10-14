import React from "react";
import Contain from "./play-contain/play-contain";
import LikeDis from "./like-dis/like-dis";

const TrackPlay = () => {
  return (
    <div className="player__track-play track-play">
      <Contain />
      <LikeDis />
    </div>
  );
};

export default TrackPlay;
