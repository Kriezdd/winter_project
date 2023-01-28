import React from 'react';
import './style.scss'

const WelcomeScreen = () => {
    const consoleMessage = function (){return console.log("Подобрать фильм - КЛИК");}
    return (
        <div className="welcomeScreen">
            <div className="welcomeMessage">
                <h1>Не знаешь, что посмотреть?</h1>
                <button onClick={consoleMessage()}>Подобрать фильм</button>
            </div>
        </div>
    );
};

export default React.memo(WelcomeScreen);