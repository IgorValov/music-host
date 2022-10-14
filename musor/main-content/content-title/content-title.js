import React from "react";
import Svg from "./title-svg/title-svg";

const Title = () => {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div classNAme="playlist-title__col col04">
        <Svg />
      </div>
    </div>
  );
};
export default Title;
