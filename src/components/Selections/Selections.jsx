import React, {useState} from 'react';
import './Selections.scss';
import Header from "../Header/Header";
import SelectionCard from "./SelectionCard";

const Selections = () => {
    const [selections, setSelections] = useState([
        {title: 'комедии, которые стоит посмотреть', img: 'https://cdn.red-media.ru/600x350-2018-01-ejs-ventura-rozysk-domashnih-zhivotnyh.jpg'},
        {title: 'сигма (базированные фильмы)', img: 'https://i0.wp.com/derzweifel.com/wp-content/uploads/2020/08/taxi-driver_1.jpg?fit=1920%2C1080&ssl=1'}
    ])

    return (
        <div>
            <Header/>
            <div className="Selections">
                <h2>Подборки от KINOSPOT:</h2>
                <div className="Container">
                    {selections.map(selection =>
                        <SelectionCard selection={selection}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Selections;