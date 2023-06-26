    import React from "react";
import Header from "./components/Header/Header";
import './App.scss';
import './components/Catalog/Catalog.scss'
function App() {
    return (
        <div className="App">
            <Header/>
            <div className="MainPage">
                <h1>Главная</h1>
            </div>
        </div>
    );
}

export default App;
