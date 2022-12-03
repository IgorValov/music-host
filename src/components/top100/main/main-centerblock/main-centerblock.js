import React from "react";
import { Search } from "../../../../pages/main-search/main-search";
import { Filter } from "../../../../pages/main-filter/main-filter";
import { ContentTop } from "../../../../pages/main-contentTop/main-content";

const CenterBlock = () => {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">100 Танцевальных треков</h2>
      <Filter />
      <ContentTop />
    </div>
  );
};

export default CenterBlock;
