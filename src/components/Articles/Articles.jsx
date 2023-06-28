import React, {useState} from 'react';
import './Articles.scss';
import Header from "../Header/Header";
import BigArticles from "./BigArticles";

const Articles = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Сериалы', body: '13 самых ожидаемых проектов'},
        {id: 2, title: 'Газеты', body: 'Саня все порешал'},
        {id: 3, title: 'Как это смотреть', body: 'Мультик "Человек-паук" 1 > "Человек-паук" 2'},
    ])
    return (
        <div>
            <Header/>
            <div className="Articles">
                <div className="ArticlesContainer">
                    <h1>Статьи</h1>
                    <div className="TrippleArticles">
                        <div className="MegaContainer">
                            {posts.map(posts =>
                                <BigArticles post={posts} key={posts.id}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;