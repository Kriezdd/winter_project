import React from "react";
import Header from "./components/Header/Header";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="MainPage">
                <h1>О НАС</h1>
                <Header/>
                <p>
                    KINOSPOT – это сайт, который всегда держит вас в курсе<br/> всех новостей
                    киноиндустрии и предлагает множество<br/> возможностей для тех, кто любит
                    кино и ищет новые<br/> впечатления. Мы поможем вам подготовиться к
                    просмотру<br/> фильмов и сделать ваше кинематографическое<br/> путешествие еще
                    более увлекательным и <br/>запоминающимся.
                </p>
                <h2>QR CODE</h2>
                <p>на тестовый функционал с алгоритмом<br/> по подбору фильмов в телеграмм</p>
                <div className="QRcode">
                    <a href="">
                        <img src=""/>
                    </a>
                </div>
                <p>Подобрать фильм</p>
            </div>
        </div>
    );
}

export default App;
