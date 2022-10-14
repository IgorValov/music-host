import React from "react";
import Title from "./content-title/content-title";
import PlayList from "./content-playlist/content-playlist";
export const Content = () => {
  return (
    <div className="centerblock__content">
      <Title />
      <PlayList />
    </div>
  );
};
