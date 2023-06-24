import React from 'react';

const SelectionCard = (props) => {
    const image = props.selection.img;
    return (
        <div style={{backgroundImage: `url(${image}`}} className="SelectionCard">
            <div className="ShadowLayout">
                <p>{props.selection.title}</p>
            </div>
        </div>
    );
};

export default SelectionCard;