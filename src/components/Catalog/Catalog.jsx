import React, { useState,  } from "react";
import MySelect from "./MySelect";
import MyInput from "./MyInput";
import CardList from './CardList'
import Header from "../Header/Header";
import ReactSlider from "react-slider";
import CatalogFilm from "./CatalogFilm";
const Catalog = () => {
    const [movieList, setmovieList] = useState([
        { id: 1, title: 'Drive', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://i.artfile.ru/4256x2832_1639065_[www.ArtFile.ru].jpg', year: '2008' ,kp: '7.8' },
        { id: 2, title: 'wolf woll', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://w.forfun.com/fetch/59/5933f0389a044faf9fb48f08bc38847e.jpeg', year: '2007',kp: '7.8' },
        { id: 3, title: 'orange', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://i.pinimg.com/originals/a6/7c/ef/a67cef52f92193a118e66795aa20e9ca.jpg', year: '1970', kp: '6.8'},
        { id: 4, title: 'american history x', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://4tololo.ru/sites/default/files/images/20183003133009.jpg', year: '1993' ,kp: '1.8'},
        { id: 5, title: 'great dictator', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://fs.kinomania.ru/file/film_frame/c/a1/ca1f81af8d0f2a685715eb1a0cc18e8d.jpeg', year: '1940',kp: '8.8' },
        { id: 6, title: 'thief club', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://roliki-magazin.ru/wp-content/uploads/0/2/5/02554d40173eed3260a4124c657afad6.jpeg', year: '1999' ,kp: '7.8'},
        { id: 7, title: 'pirat', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://kartinkin.net/uploads/posts/2022-03/1646802297_10-kartinkin-net-p-kartinki-pirat-11.jpg', year: '2004' ,kp: '2.8'},
        { id: 8, title: 'your name', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://fikiwiki.com/uploads/posts/2022-02/1645006953_37-fikiwiki-com-p-kartinki-tvoe-imya-40.jpg', year: '2020' ,kp: '3.8'},
        { id: 9, title: 'ne your name', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://8bitodyssey.com/wp-content/uploads/2016/09/yourname.jpg', year: '2021' ,kp: '7.8'},
        { id: 10, title: 'pendosi', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://i.ytimg.com/vi/xUjMceMnJcA/maxresdefault.jpg', year: '1894',kp: '9.8' },
        { id: 11, title: 'borat', discription: 'lorem fffffffffffffffff', genre: 'crime ryan gosling', movieImg: 'https://gameguru.ru/clf/ef/ed/60/20/news.1599645195440.jpg', year: '2007',kp: '6.8' },
    ])
    const [selectedSort, setselectedSort] = useState(' ')
    const [searchQaery, setsearchQaery] = useState('')
    const [choiceYear,setChoiceYear] = useState([1896, 2023])
    const [choiceKp,setchoiceKp] = useState([0,10])
    const sortMovieList = (sort) => {
        setselectedSort(sort)
        setmovieList([...movieList].sort((a, b) => a[sort].localeCompare(b[sort])))
    }
    const FiltredMovies = movieList.filter(movie =>{
        return movie.title.toLowerCase().includes(searchQaery.toLowerCase())
    })
    const FiltredYearMovies = FiltredMovies.filter(movie =>{
        return movie.year >= Number(choiceYear[0]) &&  movie.year <= Number(choiceYear[1]) && movie.kp >= Number(choiceKp[0]) && movie.kp <= Number(choiceKp[1])
    }) ;
    return (
       <div>
          <Header/>
          <CatalogFilm movie={{movieImg: 'https://i.pinimg.com/originals/b7/62/b1/b762b184afe21c6af483607e84c307b0.png',title:'Drive', genre:'криминал драма триллер',discription:'Великолепный водитель – при свете дня он выполняет каскадёрские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт – и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего – виртуозно уходить от погони.',director:'Режиссёр: Николас Виндинг Рефн',kp:'8.7'}}/>
        <div className="catalog">    
            <div className="catalog-cards">
                <form className="catalog-cards__filter" name="form1">
                    <label for="filter" class="catalog-cards__label">Сортировать по </label>
                    <MySelect
                        value={selectedSort}
                        onChange={sortMovieList}
                        defaultValue="сортировка"
                        options={[
                            { value: 'title', name: 'алфавиту' },
                            { value: 'year', name: 'годам' }
                        ]}
                    />
                </form>
                <CardList movielist={FiltredYearMovies} />
            </div>
            <div className="catalog-filter">
                <MyInput placeholder="Поиск Фильма"
                    onChange={e => setsearchQaery(e.target.value)}
                />
                <form className="catalog-form" name='form2'>
                    <div className="form-head"> 
                    <h2 className="form-Name">Фильтр</h2>
                    </div>
                    <p>start: {choiceYear[0]}</p>
                    <p>end:{choiceYear[1]}</p>
                    <ReactSlider 
                    className="catalog__year-slider" 
                    thumbClassName="example-thumb"
                     trackClassName="example-track"
                     defaultValue={[1896, 2023]}
                     max={2023}
                     min={1896}
                     renderThumb={(props,state) => <div {...props}>{state.valueNow}</div>}
                     onChange={(choiceYear,index) => setChoiceYear(choiceYear)}
                     />
                      <ReactSlider 
                    className="catalog__year-slider" 
                    thumbClassName="example-thumb"
                     trackClassName="example-track"
                     ariaValuetextClassName ="text"
                     defaultValue={[0, 10]}
                     max={10}
                     min={0}
                     renderThumb={(props,state) => <div {...props}>{state.valueNow}</div>}
                     onChange={(choiceKp,index) => setchoiceKp(choiceKp)}
                     />
                </form>
            
                <p>start: {choiceYear[0]}</p>
                <p>end :{choiceYear[1]} </p>
            </div>
        </div>
        </div>
    )
}
export default Catalog;