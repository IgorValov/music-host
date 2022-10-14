import React from "react";

const Image = () => {
  return (
    <div className="track-play__image">
      <svg class="track-play__svg" alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
};

export default Image;
