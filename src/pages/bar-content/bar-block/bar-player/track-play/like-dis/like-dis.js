import React from "react";
import Like from "./like/like";
import Dis from "./dis/dis";

const LikeDis = () => {
  return (
    <div className="track-play__like-dis">
      <Like />
      <Dis />
    </div>
  );
};

export default LikeDis;
