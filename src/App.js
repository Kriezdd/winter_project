import React from "react";
import "./App.scss";
import "./components/Catalog/Catalog.scss";
import qr from "./assets/mainpage/qr.png";
import bg from "./assets/mainpage/bg.png";

function App() {
    return (
        <div className="App">
            <div className="MainPage" style={{backgroundImage: `url(${bg})`}}>
              <div className="MainContent">
                <h1>О НАС</h1>
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
                    <a href="https://t.me/KinoSpotBot">
                        <img src={qr} alt="QR код телеграмм бота"/>
                    </a>
                </div>
                <p>Подобрать фильм</p>
            </div>
          </div>
        </div>
    );
}

export default App;
