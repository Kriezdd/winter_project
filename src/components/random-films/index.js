import React from 'react';
import drivePoster from '../../images/drive_poster500x500.png';
import nextMovie from '../../images/next_movie200x500.png'
import './style.scss'

const RandomFilms = () => {
    const consoleMessage = function () {return console.log('next')};
    return (
        <div className="randomFilms">
            <div id="containerTitle">
                <h1>Случайный фильм</h1>
                <hr/>
            </div>
            <div id="content">
                <div id="textContainer">
                    <h1>Драйв</h1>
                    <p>Великолепный водитель – при свете дня он выполняет каскадёрские трюки на съёмочных площадках
                        Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт – и за его жизнь
                        назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он
                        должен делать то, что умеет лучше всего – виртуозно уходить от погони.</p>
                </div>
                <div id="currentFilm">
                    <svg width="500" height="60" viewBox="0 0 500 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.63189e-07" y1="59" x2="500" y2="59.0001" stroke="white" strokeWidth="2"/>
                        <path d="M250 30L243.938 7.5L256.062 7.5L250 30Z" fill="white"/>
                    </svg>
                    <img src={drivePoster} alt="drive"/>
                    <svg width="500" height="60" viewBox="0 0 500 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M250 30L256.062 52.5L243.938 52.5L250 30Z" fill="white"/>
                        <line x1="500" y1="1" x2="-8.74228e-08" y2="0.999956" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
                <div id="nextFilm">
                    <button onClick={consoleMessage()} className="rightArrow"></button>
                    <img src={nextMovie} alt="next"/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(RandomFilms);