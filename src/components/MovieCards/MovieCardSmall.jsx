import React from 'react';
import './MovieCards.scss';

const MovieCardSmall = () => {
    return (
        <div className="MovieCardSmall">
            <div style={{
                backgroundImage: `url("https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg")`
            }} className="Poster">
                <div className="ShadowBG">
                    <p className="OriginalTitle">Fight Club (1999)</p>
                    <h3 className="LocalTitle">Бойцовский клуб</h3>
                </div>
            </div>
        </div>
    );
};

export default MovieCardSmall;