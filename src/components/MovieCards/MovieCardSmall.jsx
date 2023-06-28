import React, { useState } from "react";
import "./MovieCards.scss";

const MovieCardSmall = (props) => {
  const [movieCard, setMovieCard] = useState([]);
  return (
    <div className="MovieCardSmall">
      <div className="Poster">
        <img src={props.movie.poster.url} alt="" />
        <div className="ShadowBG">
          <p className="OriginalTitle">{props.movie.alternativeName} ({props.movie.year})</p>
          <h3 className="LocalTitle">{props.movie.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSmall;
