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
            <p className="TitleText">
                {props.title.text}
            </p>
        </div>
    );
};

export default MovieTitles;

