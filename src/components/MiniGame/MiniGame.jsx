import React, {useState} from 'react';
import './MiniGame.scss';
import Header from "../Header/Header";
import MovieTitles from "./MovieTitles";
import Modal from "./Modal/Modal";
import movieTitles from "./MovieTitles";


const MiniGame = () => {
    const [titles, setTitles] = useState([
        {id: 1, text: "Великий Гэтсби"},
        {id: 2, text: "Человек-паук"},
        {id: 3, text: "Великий"},
        {id: 4, text: "Гонка"},
        {id: 5, text: "Горбатая гора"},
    ])
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [answer, setAnswer] = useState('');


    const filteredTitles = titles.filter(title => {
            return title.text.toLowerCase().includes(answer.toLowerCase())
        }
    )

    const itemClickHandler = (e) => {
        setAnswer(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    function handleInputChange(event) {
        setAnswer(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (answer === titles[0]["text"]) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <div>
            <div className="MiniGame">
                <h2 className="title">Из какого фильма кадр?</h2>
                <img
                    src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/8f757a73-665d-4beb-8fd4-211de89d226c/1920x"
                    alt="" className="MovieShot"/>
                <div className="AnswerAndResult">
                    <form onSubmit={handleSubmit} className="AnswerField">
                        <input
                            type="text"
                            className="AnswerInput"
                            placeholder="Введите название"
                            value={answer}
                            onChange={(event) => {
                                setAnswer(event.target.value);
                                handleInputChange(event);
                            }
                        }
                            onClick={inputClickHandler}
                        />
                        <ul className="autocomplete">
                            {
                                answer && isOpen
                                    ? filteredTitles.map((title, id) => {
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
                        <button type="submit" className="Submit" onClick={() => {
                            setIsActive(true);
                        }}>Ответить
                        </button>
                    </form>
                    <div className="Result">
                        {
                            isActive
                                ? (isCorrect
                                    ? <h3>Правильно!</h3> : <p>Неправильно... Попробуй ещё!</p>)
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniGame;