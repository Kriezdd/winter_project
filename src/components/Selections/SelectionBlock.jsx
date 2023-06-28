import React, {useEffect, useState} from "react";
import MovieCardSmall from "../MovieCards/MovieCardSmall";
import {EmblaCarousel} from "../EmblaCarousel/EmblaCarousel";
import axios from "axios";

const SelectionBlock = (props) => {

    const [movies, setMovies] = useState([]);

    // ОПИСАНИЕ ПЕРЕМЕННЫХ И ФУНКЦИЙ ДЛЯ API
    const apiUrl_noId = `https://api.kinopoisk.dev/v1.3/movie/`
    const X_API_KEY = 'KFT782Z-15E4BS4-MRBY7EZ-WY2RG7Q';

    const fetchMovies = async (url) => {
        const response = await axios.get(url, {
            headers: {
                'X-API-KEY': X_API_KEY,
                'Content-Type': 'application/json',
            }
        });
        setMovies(oldMovies => [...oldMovies, response.data]);
        console.log(response);
        console.log('FETCHED');
    }
    // Конец описания

    const movieIds = props.selection.movieIds;

    useEffect(() => {

        movieIds.map((id) => {
            let url = apiUrl_noId.concat(id);
            // fetchMovies(url);
            // todo: uncomment to test selections, but be careful with requests limit :)
        })
        console.log('USE EFFECT');

    }, [])

    console.log(movies);

    return (
        <div className="SelectionBlock">
            <h3 className="SelectionTitle">{props.selection.title}</h3>
            <div className="Layout">
                <EmblaCarousel>
                    {movies.map((movie, index) =>
                        <MovieCardSmall movie={movie} key={index}/>
                    )}
                </EmblaCarousel>
            </div>
        </div>
    );
};

export default SelectionBlock;
