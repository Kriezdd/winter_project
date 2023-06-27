import React, { useState } from "react";
import cardList from "./CardList";
const Card = (props) => {
  return (
    <div className="catalog-card">
      <div className="catalog-card-wrapper">
        <img
          src={props.movie.movieImg}
          alt={props.movie.title}
          className="catalog-card_img"
        />
        <p className="catalog-card_engName">
          {props.movie.title} (<span>{props.movie.year}</span>)
        </p>
        <p className="catalog-card_ruName">{props.movie.title}</p>
      </div>
    </div>
  );
};

export default Card;
