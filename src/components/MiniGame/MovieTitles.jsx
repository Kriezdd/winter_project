import React, {useState} from 'react';

const MovieTitles = (props) => {
    /*const [titles, setTitles] = useState([
        {text: "Великий Гэтсби"},
        {text: "dsadasd"},
        {text: "sdsfdsdsfs"},
        {text: "sdfsfsdfs"},
        {text: "afdfsdfd"},
    ])*/
    return (
        <div className="title">
            <div className="TitleText">
                <strong>{props.title.text}</strong>
            </div>
        </div>
    );
};

export default MovieTitles;

