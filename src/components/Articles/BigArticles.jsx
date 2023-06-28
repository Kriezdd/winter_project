import React from 'react';
import art1 from "./../../assets/Articles/art1.png";

const BigArticles = (props) => {
    return (
        <div className="mega-post">
            <strong>
                {props.post.id}{props.post.title}
            </strong>
            <div>
                <img src={art1} className="BigPicture"/>
                {props.post.body}
            </div>
        </div>
    );
};

export default BigArticles;