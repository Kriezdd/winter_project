import React from 'react';
import RandomFilms from "../../components/random-films";
import WelcomeScreen from "../../components/welcome-screen";

const MainPage = () => {
    return (
        <>
            <WelcomeScreen/>
            <RandomFilms/>
        </>
    );
};

export default React.memo(MainPage);