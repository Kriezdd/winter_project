import React, {useState} from 'react';
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    // Описываем базовые вещи для нашей api
    const urlMovieByID = `https://api.kinopoisk.dev/v1.3/movie/`
    const urlTop250 = 'https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&top250=%21null';
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

    return (
        <div>

        </div>
    );
};

export default Movies;