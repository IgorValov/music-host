import React, { useState, useRef } from "react";
export const Controls = () => {
  let [PlayAudio] = useState(false);
  const audioRef = useRef(null);
  let classNamess = "player__btn-play _btn";

  const onClickPlayPause = () => {
    PlayAudio = !PlayAudio;
    if (PlayAudio === true) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="player__controls">
      <audio src="./tracks/Nevesta.mp3" ref={audioRef} />
      <div className="player__btn-prev">
        <svg class="player__btn-prev-svg" alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </div>

      <div className={classNamess} onClick={onClickPlayPause}>
        <svg class="player__btn-play-svg" alt="play">
          <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
        </svg>
      </div>

      <div className="player__btn-next">
        <svg class="player__btn-next-svg" alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </svg>
      </div>

      <div className="player__btn-repeat _btn-icon">
        <svg class="player__btn-repeat-svg" alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>

      <div className="player__btn-shuffle _btn-icon">
        <svg class="player__btn-shuffle-svg" alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  );
};
