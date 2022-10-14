import React from "react";
import Image from "./play-image/play-image";
import Author from "./play-author/play-author";
import Album from "./play-album/play-album";

const Contain = () => {
  return (
    <div className="track-play__contain">
      <Image />
      <Author />
      <Album />
    </div>
  );
};

export default Contain;
