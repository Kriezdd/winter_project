import React, {useState} from 'react';
import './MovieCards.scss';

const MovieCardSmall = () => {
    const [movieCard, setMovieCard] = useState([
        {poster: "", originalTitle: "", localTitle: ""},
        {poster: "", originalTitle: "", localTitle: ""},
        {poster: "", originalTitle: "", localTitle: ""},
        {poster: "", originalTitle: "", localTitle: ""},
        {poster: "", originalTitle: "", localTitle: ""},
        {poster: "", originalTitle: "", localTitle: ""}
    ])
    return (
        <div className="MovieCardSmall">
            <div className="Poster">
                <img src='https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg' alt=""/>
                <div className="ShadowBG">
                    <p className="OriginalTitle">Fight Club (1999)</p>
                    <h3 className="LocalTitle">Бойцовский клуб</h3>
                </div>
            </div>
        </div>
    );
};

export default MovieCardSmall;