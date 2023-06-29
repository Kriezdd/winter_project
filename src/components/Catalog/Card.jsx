import React, {useState} from "react";
import cardList from "./CardList";

const Card = (props) => {
    return (
        <div className="catalog-card">
            <div className="catalog-card-wrapper">
                <div className="catalog-card_img">
                    <img
                        src={props.movie.posterUrl}
                        alt={props.movie.nameEn}

                    />
                    <div className="card-rating-circle">
                        <p className="card-rating">{props.movie.rating}</p>
                    </div>
                </div>
                <p className="catalog-card_engName">
                    {props.movie.nameEn} (<span>{props.movie.year}</span>)
                </p>
                <p className="catalog-card_ruName">{props.movie.nameRu}</p>
            </div>
        </div>
    );
};

export default Card;
