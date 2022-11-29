import React from "react";
import { useThemeContext } from "../../../toggleTheme/context/theme";

export const TrackItem = (props) => {
  const { theme } = useThemeContext();
  return (
    <div
      className="playlist__item"
      key={props.index}
      onClick={console.log(props.index)}
    >
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
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
          <span className="track__time-text">
            {props.track.duration_in_seconds}
          </span>
        </div>
      </div>
    </div>
  );
};
