import React, {useState} from 'react';
import './MiniGame.scss';
import Header from "../Header/Header";
import MovieTitles from "./MovieTitles";


const MiniGame = () => {
    const [titles, setTitles] = useState([
        {id: 1, text: "Великий Гэтсби"},
        {id: 2, text: "Человек-паук"},
        {id: 3, text: "Великий"},
        {id: 4, text: "Гонка"},
        {id: 5, text: "Горбатая гора"},
    ])

    const [value, setValue] = useState('')

    const filteredTitles = titles.filter(title => {
        return title.text.toLowerCase().includes(value.toLowerCase())
        }
    )

    const [isOpen, setIsOpen] = useState(true)

    const itemClickHandler = (e) => {
        setValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

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
                        className="FilmBar"
                        placeholder="Введите название"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onClick={inputClickHandler}
                        />
                    <ul className="autocomplete">
                    {
                        value && isOpen
                            ? filteredTitles.map((title,id) => {
                                return (
                                    <li
                                        className="autocomplete_title"
                                        onClick={itemClickHandler}
                                    >
                                        <MovieTitles title={title} key={title.id}/>
                                    </li>
                                )
                                })
                            : null
                    }
                    </ul>
                    <button>Ответить</button>
                </div>
            </div>
        </div>
    );
};

export default MiniGame;