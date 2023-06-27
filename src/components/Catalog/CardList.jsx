import React, { useState } from "react";
import Card from "./Card";
const CardList = ({ movieList }) => {
  return (
    <div className="catalog-cards-list">
      {movieList.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
export default CardList;
