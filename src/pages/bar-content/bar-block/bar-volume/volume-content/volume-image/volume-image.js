import React from "react";

const VolumeImage = () => {
  return (
    <div className="volume__image">
      <svg class="volume__svg" alt="volume">
        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
      </svg>
    </div>
  );
};

export default VolumeImage;
