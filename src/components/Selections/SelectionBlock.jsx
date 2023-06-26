import React from 'react';
import MovieCardSmall from "../MovieCards/MovieCardSmall";


const SelectionBlock = (props) => {
    return (
        <div className="SelectionBlock">
            <h3 className="SelectionTitle">{props.selection.title}</h3>
            <div className="Layout">
                <div className="CarouselContainerScroll">
                    <MovieCardSmall/>
                    <MovieCardSmall/>
                    <MovieCardSmall/>
                    <MovieCardSmall/>
                    <MovieCardSmall/>
                    <MovieCardSmall/>
                    <MovieCardSmall/>
                </div>
            </div>
        </div>
    );
};

export default SelectionBlock;