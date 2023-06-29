import React, {useState} from 'react';
import './Articles.scss';
import BigArticles from "./BigArticles";
import SmallArticles from "./SmallArticles";
import slider from "../../assets/Articles/slider.png";
import art1 from "../../assets/Articles/art1.png";
import art2 from "../../assets/Articles/art2.png";
import art3 from "../../assets/Articles/art3.png";
import art4 from "../../assets/Articles/art4.png";
import art5 from "../../assets/Articles/art5.png";
import art6 from "../../assets/Articles/art6.png";
import art7 from "../../assets/Articles/art7.png";
import art8 from "../../assets/Articles/art8.png";
import art9 from "../../assets/Articles/art9.png";
import art10 from "../../assets/Articles/art10.png";
import art11 from "../../assets/Articles/art11.png";


const Articles = () => {
    const [posts1, setPosts1] = useState([
        {
            id: 1,
            title: 'Выбор редакции',
            body: 'Что смотреть дома: "Актрисы" Федора Бондарчука, "Аватар: Путь воды" и матч "Бавария - Борусия"',
            info: '20.06.2023',
            picture: art1
        },
    ])
    const [posts2, setPosts2] = useState([
        {
            id: 2,
            title: 'Рецензии',
            body: '"Подземелья и драконы: Честь среди воров": доброе кино для ролевиков и не только',
            info: 'Позавчера',
            picture: art2
        },
        {
            id: 3,
            title: 'Мнение',
            body: 'Игорь Тальков, которого мы потеряли. Что хотелось бы увидеть в сериале Федора',
            info: '21.06.2023',
            picture: art3
        },
        {
            id: 4,
            title: 'Игры',
            body: 'PlayStation, Xbox или Switch? Какую консоль выбрать в 2023 году',
            info: '19.06.2023',
            picture: art4
        },
        {
            id: 5,
            title: 'Индустрия',
            body: 'Кто снимает и показывает российские сериалы? Все главные игроки',
            info: 'Позавчера',
            picture: art5
        },
        {
            id: 6,
            title: 'Сериалы',
            body: '2-й сезон «Медведя»: повар превращается в ресторатора, а сериал — в телероман о простых истинах',
            info: '17.06.2022',
            picture: art6
        },
        {
            id: 7,
            title: 'Как это смотреть',
            body: 'Как смотреть "Человека-паука". Подобный гид по главным фильмам',
            info: '08.06.2023',
            picture: art7
        },
        {
            id: 8,
            title: 'Игры',
            body: 'Обзор Diablo 4: хороший продукт, но лишенная свежих идей игра',
            info: '16.06.2023',
            picture: art8
        },
        {
            id: 9,
            title: 'Индустрия',
            body: 'Что такое Apple Vision Pro и зачем нужны эти очки? Отвечаем на эти вопросы',
            info: '07.06.2023',
            picture: art9
        },
        {
            id: 10,
            title: 'Рецензии',
            body: '"Тихий садовник": прусадебный нацизм и огородные страсти в фильме Пола Шредера',
            info: '15.06.2023',
            picture: art10
        },
        {
            id: 11,
            title: 'Выбор редакции',
            body: 'Что смотреть дома: "Переводчик", "Секретное вторжение", 2-й сезон "Медведя"',
            info: '29.06.2023',
            picture: art11
        },
    ])
    return (
        <div>
            <div className="Articles">
                <div className="ArticlesContainer">
                    <div className="HeadContainer">
                        <h1>Статьи</h1>
                        <div className="SliderContainer">
                            <p>Рубрики</p>
                            <img src={slider} className="slider"/>
                        </div>
                    </div>
                    <div className="GridContainer">
                        {posts1.map(post =>
                            <BigArticles post={post} key={post.id}/>
                        )}
                        {posts2.map(post =>
                            <SmallArticles post={post} key={post.id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;