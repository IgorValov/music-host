import React from "react";
import { useThemeContext } from "../../../toggleTheme/context/theme";
import { useState, useRef } from "react";

export const TrackItem = (props) => {
  const { theme } = useThemeContext();

  let [PlayAudio] = useState(false);
  const idTrack = useRef(null);

  const onClickPlayPauseT = () => {
    PlayAudio = !PlayAudio;
    if (PlayAudio === true) {
      idTrack.current.play();
    } else {
      idTrack.current.pause();
    }
  };

  return (
    <div className="playlist__item" key={props.index}>
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg
              onClick={onClickPlayPauseT}
              className="track__title-svg "
              alt="music"
            >
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
            <audio src={props.track.track_file} ref={idTrack}></audio>
          </div>
          <div className="track__title-text">
            <a
              className="track__title-link"
              href="//href"
              style={{
                backgroundColor: theme.background,
                color: theme.color,
              }}
            >
              {props.track.name}
              <span className="track__title-span text__color"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a
            className="track__author-link"
            href="http://"
            style={{
              backgroundColor: theme.background,
              color: theme.color,
            }}
          >
            {props.track.author}
          </a>
        </div>
        <div className="track__album">
          <a
            className="track__album-link"
            href="http://"
            style={{
              backgroundColor: theme.background,
              color: theme.color,
            }}
          >
            {props.track.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.track.id}</span>
        </div>
      </div>
    </div>
  );
};
