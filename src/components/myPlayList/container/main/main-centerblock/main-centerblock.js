import React from "react";
import { Search } from "../../../../../pages/main-search/main-search";
import { Filter } from "../../../../../pages/main-filter/main-filter";
import { Content } from "../../../../../pages/main-content/main-content";

const CenterBlock = () => {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Мой плейлист</h2>
      <Filter />
      <Content />
    </div>
  );
};

export default CenterBlock;
