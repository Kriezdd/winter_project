import React, {useEffect, useState} from "react";
import SortSelection from "./SortSelection";
import MovieList from "./CardList";
import ReactSlider from "react-slider";
import CatalogFilm from "./CatalogFilm";
import './Catalog.scss';
import axios from "axios";

const Catalog = () => {
    const [movieList, setMovieList] = useState([]);
    const [sortedMovieList, setSortedMovieList] = useState(movieList);
    const [searchedMovieList, setSearchedMovieList] = useState(movieList);
    const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [chosenYears, setChosenYears] = useState([1895, 2023]);
    const [chosenRating, setChosenRating] = useState([0, 10]);
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isFetched, setIsFetched] = useState(false);
    const [page, setPage] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState([true, false]);

    // API BEGIN
    const firstApiUrl = `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&top250=%21null`;
    const secondApiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=10';
    const tempApiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`;
    const X_API_KEY = ' 5d659ad5-6e9d-4b35-bddd-3284cc503531'; // KFT782Z-15E4BS4-MRBY7EZ-WY2RG7Q
    const fetchMovies = async (url) => {
        const response = await axios.get(url, {
            headers: {
                'X-API-KEY': X_API_KEY,
                'Content-Type': 'application/json',
            }
        });
        // for many pages use this
        //setMovieList(oldMovies => [...oldMovies, response.data.films]);
        // for one page this
        setMovieList(response.data.films);
        setIsFetched(true);
        console.log(response);
        console.log(movieList);
        console.log('FETCHED');
    }
    const clickFetch = (url) => {
        fetchMovies(tempApiUrl.concat(page));
        // todo: uncomment to test selections, but be careful with requests limit :)
        console.log('CLICK FETCHED');
    }

    // useEffect(() => {
    //     fetchMovies(tempApiUrl.concat(page));
    //
    //     console.log('LOAD FETCHED');
    // }, [])
    // API END

    useEffect(() => {
        setSortedMovieList(movieList);
        setSearchedMovieList(movieList);
        setIsFetched(false);
    }, [isFetched])

    const sortMovieList = (sortBy) => {
        let tempArray;
        setSelectedSort(sortBy);
        if (searchQuery) {
            setSortedMovieList(searchedMovieList)
        }
        if (["rating", "year"].includes(sortBy)) {
            tempArray = [...movieList]
                .map((value) => JSON.parse(JSON.stringify(value)))
                .sort((a, b) => {
                    // map используется для того, чтобы основной массив не мутировал
                    if (a[sortBy] > b[sortBy] && sortBy === "year")
                        return -1;
                    else if (a[sortBy] > b[sortBy] && sortBy === "rating")
                        return -1;
                    // todo: how to simplify??
                });
        } else if (["nameRu"].includes(sortBy))
            tempArray = [...movieList].sort((a, b) => {
                return a[sortBy].localeCompare(b[sortBy]);
            });
        setSortedMovieList(tempArray);
    };

    const finalMovieList = sortedMovieList.filter(movie => { // FILTER BY SEARCH
        return (movie.nameRu?.toLowerCase().includes(searchQuery.toLowerCase()))
    }).filter(movie => { // FILTER BY YEAR AND RATING
        return (
            movie.year >= Number(chosenYears[0]) &&
            movie.year <= Number(chosenYears[1]) &&
            movie.rating >= Number(chosenRating[0]) &&
            movie.rating <= Number(chosenRating[1])
        );
    });

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        searchMovie();
    }

    const searchMovie = () => {

        const tempArray = sortedMovieList.filter(movie => {
            return movie.nameRu.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setSearchedMovieList(tempArray);
    };

    const pageCheck = () => {
        if (page === 1) {
            setIsButtonDisabled([true, false]);
        } else if (page === 20) {
            setIsButtonDisabled([false, true]);
        }
    }

    const increment = () => {
        setPage(page + 1);
    }
    const decrement = () => {
        setPage(page - 1);
    }

    useEffect(() => {
        clickFetch(tempApiUrl);
        console.log(`current page = ${page}`);
    }, [page])


    return (
        <>
            <CatalogFilm
                movie={{
                    movieImg:
                        "https://i.pinimg.com/originals/b7/62/b1/b762b184afe21c6af483607e84c307b0.png",
                    alternativeName: "Drive",
                    genre: "криминал драма триллер",
                    name:
                        "Великолепный водитель – при свете дня он выполняет каскадёрские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт – и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего – виртуозно уходить от погони.",
                    director: "Режиссёр: Николас Виндинг Рефн",
                    kp: "8.7",
                }}
            />
            {/* ЗДЕСЬ FETCH ЧЕРЕЗ КНОПКУ */}


            {/*todo: ПОФИКСИТЬ ПЕРЕКЛЮЧЕНИЕ ЗАПРОСОВ ДЛЯ РАЗНЫХ СТРАНИЦ*/}
            <div className="PageReducers">
                {
                        (
                            <div className="buttonsToFetch">
                                <button disabled={isButtonDisabled[0]} onClick={decrement}>
                                    Предыдущая страница
                                </button>
                                {/*<button onClick={clickFetch}>ПОКАЗАТЬ ФИЛЬМЫ</button>*/}
                                <button disabled={isButtonDisabled[1]} onClick={increment}>
                                    Следующая страница
                                </button>
                            </div>
                        )
                }
            </div>
            <div className="catalog">
                <div className="catalog-cards">
                    <form className="catalog-cards-filter" name="form1">
                        <label for="catalog-cards-filter" className="catalog-cards-label">
                            Сортировать по{" "}
                        </label>
                        <SortSelection
                            value={selectedSort}
                            onChange={sortMovieList}
                            defaultValue={""}
                            options={[
                                {value: "rating", name: "рейтингу"},
                                {value: "nameRu", name: "алфавиту"},
                                {value: "year", name: "годам"},
                            ]}
                        />
                    </form>
                    {/* ВЫВОД ФИЛЬМОВ ПО ИТОГАМ ПРОГОНОВ ТУТ */}
                    <MovieList
                        movieList={
                            finalMovieList
                        }
                    />
                </div>
                <div className="catalog-filter">

                    <form className="catalog-form" name="form2">
                        <div className="catalog-form-head">
                            <div className="catalog-form-head-wrapper">
                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 1C0 0.447715 0.373096 0 0.833333 0H19.1667C19.6269 0 20 0.447715 20 1C20 1.55228 19.6269 2 19.1667 2H0.833333C0.373096 2 0 1.55228 0 1ZM3.33333 8C3.33333 7.44772 3.70643 7 4.16667 7H15.8333C16.2936 7 16.6667 7.44772 16.6667 8C16.6667 8.55228 16.2936 9 15.8333 9H4.16667C3.70643 9 3.33333 8.55228 3.33333 8ZM6.66667 15C6.66667 14.4477 7.03976 14 7.5 14H12.5C12.9602 14 13.3333 14.4477 13.3333 15C13.3333 15.5523 12.9602 16 12.5 16H7.5C7.03976 16 6.66667 15.5523 6.66667 15Z"
                                        fill="#CFCFCF"
                                    />
                                </svg>
                                <h2 className="catalog-form-head-wrapper__name">Фильтр</h2>
                            </div>
                        </div>
                        <div className="catalog-form-wrapper">
                            <ReactSlider
                                className="catalog-slider__year"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                defaultValue={[1895, 2023]}
                                max={2023}
                                min={1895}
                                renderThumb={(props, state) => (
                                    <div {...props}>
                                        <p>{state.valueNow}</p>
                                    </div>
                                )}
                                onChange={(chosenYear, index) => {
                                    setChosenYears(chosenYear);
                                    setIsFilterActive(true);
                                }}
                            />
                            <ReactSlider
                                className="catalog-slider__year"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                ariaValuetextClassName="text"
                                defaultValue={[0, 10]}
                                max={10}
                                min={0}
                                renderThumb={(props, state) => (
                                    <div {...props}>
                                        <p>{state.valueNow}</p>
                                    </div>
                                )}
                                onChange={(chosenRating, index) => {
                                    setChosenRating(chosenRating);
                                    setIsFilterActive(true);
                                }}
                            />
                            <input
                                placeholder="начните писать название"
                                onChange={(e) => {
                                    handleSearch(e);
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
        ;
};
export default Catalog;

// todo: починить пересечение сортировок