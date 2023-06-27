import React, {useState} from 'react';
import './MiniGame.scss';
import Header from "../Header/Header";
import MovieTitles from "./MovieTitles";


const MiniGame = () => {
    const [titles, setTitles] = useState([
        {id: 1, text: "Великий Гэтсби"},
        {id: 2, text: "dsadasd"},
        {id: 3, text: "sdsfdsdsfs"},
        {id: 4, text: "sdfsfsdfs"},
        {id: 5, text: "afdfsdfd"},
    ])

    const [value, setValue] = useState('')

    const filteredTitles = titles.filter(title => {
        return title.text.toLowerCase().includes(value.toLowerCase())
        }
    )

    return (
        <div>
            <Header/>
            <div className="MiniGame">
                <h2>Из какого фильма кадр?</h2>
                <div className="Image">
                    <img
                        src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/8f757a73-665d-4beb-8fd4-211de89d226c/1920x"
                        alt=""/>
                </div>
                <div className="FilmName">
                    <input
                        type="text"
                        className="FilmBar" placeholder="Введите название"/>
                        onChange={(event) => setValue(event.target.value)}
                    <ul className="autocomplete">
                    {
                         filteredTitles.map((title,id) => {
                                return (
                                    <li
                                        className="autocomplete_title"
                                    >
                                        <MovieTitles title={title} key={title.id}/>
                                    </li>
                                )
                                })
                    }
                    </ul>
                    <button>Ответить</button>
                </div>
            </div>
        </div>
    );
};

export default MiniGame;