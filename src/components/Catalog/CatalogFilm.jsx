import React, { useState } from "react";
const CatalogFilm = (props) => {
  return (
    <div
      className="catalogFilm"
      style={{ backgroundImage: `url(${props.movie.movieImg})` }}
    >
      <div className="catalogFilm-wrapper">
        <div className="catalogFilm-wrapper-info">
          <h2 className="catalogFilm-wrapper-info__name">
            {props.movie.title}
          </h2>
          <p className="catalogFilm-wrapper-info__genre">{props.movie.genre}</p>
          <p className="catalogFilm-wrapper-info__description">
            {props.movie.discription}
          </p>
          <div className="catalogFilm-wrapper-info-foot">
            <p className="catalogFilm-wrapper-info-foot__director">
              {props.movie.director}
            </p>
            <p className="catalogFilm-wrapper-info-foot__rating">
              IMDb: <span>{props.movie.kp}</span>
              Кинопоиск: <span>{props.movie.kp}</span>
            </p>
            <button className="catalogFilm-wrapper-info-foot__btn">
              О Фильме
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CatalogFilm;
