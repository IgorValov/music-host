import React from "react";
import VolumeImage from "./volume-image/volume-image";
import VolumeProgress from "./volume-progress/volume-progress";

const VolumeContent = () => {
  return (
    <div className="volume__content">
      <VolumeImage />
      <VolumeProgress />
    </div>
  );
};

export default VolumeContent;
