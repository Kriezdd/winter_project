import React, { useState } from "react";
const CatalogFilm =(props) =>{
    return(
        <div className="CatalogFilm " style={{backgroundImage:`url(${props.movie.movieImg})`}}>
            <div className="CatalogFilm__overlay">
            <div className="CatalogFilm__info" >
                <h2 className="CatalogFilm__name">{props.movie.title}</h2>
                <p className="CatalogFilm__genre">{props.movie.genre}</p>
                <p className="CatalogFilm__discription">{props.movie.discription}</p>
                <p className="CatalogFilm__director">{props.movie.director}</p>
                <p className="CatalogFilm__store-resurse">IMDb:<span className="CatalogFilm__store">{props.movie.kp}</span> Кинопоиск: <span className="CatalogFilm__store">{props.movie.kp}</span></p>
                <button className="CatalogFilm__button">О Фильме</button>
            </div>
        </div>
        </div>
    )
}
export default CatalogFilm;