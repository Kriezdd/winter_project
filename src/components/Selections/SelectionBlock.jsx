import React from "react";
import MovieCardSmall from "../MovieCards/MovieCardSmall";
import { EmblaCarousel } from "../EmblaCarousel/EmblaCarousel";

const SelectionBlock = (props) => {
  return (
    <div className="SelectionBlock">
      <h3 className="SelectionTitle">{props.selection.title}</h3>
      <div className="Layout">
        <EmblaCarousel>
          <MovieCardSmall />
          <MovieCardSmall />
          <MovieCardSmall />
          <MovieCardSmall />
          <MovieCardSmall />
          <MovieCardSmall />
          <MovieCardSmall />
          <MovieCardSmall />
        </EmblaCarousel>
      </div>
    </div>
  );
};

export default SelectionBlock;
