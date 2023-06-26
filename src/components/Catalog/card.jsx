import React, { useState } from "react";
const Card = (props) => {
    return (
        <div className="catalog__card">
            <div className="catalog__card_overlay">
                <img src={props.movie.movieImg} alt={props.movie.title} className="catalog__card_img" />
                <p className="catalog__card_engName">{props.movie.title} (<span>{props.movie.year}</span>)</p>
                <p className="catalog__card_ruName">{props.movie.title}</p>
            </div>
        </div>
    )
}

export default Card;