import React, { useState } from "react";
import SortSelection from "./SortSelection";
import MovieList from "./CardList";
import ReactSlider from "react-slider";
import CatalogFilm from "./CatalogFilm";
const Catalog = () => {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      title: "Drive",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "2008",
      kp: "7.8",
    },
    {
      id: 2,
      title: "wolf woll",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "2007",
      kp: "7.8",
    },
    {
      id: 3,
      title: "orange",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "1970",
      kp: "6.8",
    },
    {
      id: 4,
      title: "mamasha polpota",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "1993",
      kp: "0",
    },
    {
      id: 5,
      title: "great dictator",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "1940",
      kp: "8.8",
    },
    {
      id: 6,
      title: "thief club",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "1999",
      kp: "7.8",
    },
    {
      id: 7,
      title: "pirat",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "2004",
      kp: "2.8",
    },
    {
      id: 8,
      title: "your name",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "2020",
      kp: "3.8",
    },
    {
      id: 9,
      title: "ne your name",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "2021",
      kp: "7.8",
    },
    {
      id: 10,
      title: "borat",
      discription: "lorem fffffffffffffffff",
      genre: "crime ryan gosling",
      movieImg: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
      year: "2007",
      kp: "6.8",
    },
  ]);
  const [sortedMovieList, setSortedMovieList] = useState(movieList);
  const [searchedMovieList, setSearchedMovieList] = useState(movieList);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [chosenYears, setChosenYears] = useState([1895, 2023]);
  const [chosenRating, setChosenRating] = useState([0, 10]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const sortMovieList = (sortBy) => {
    let tempArray;

    setSelectedSort(sortBy);
    if(searchQuery){
      setSortedMovieList(searchedMovieList)
    }
    if (["id", "year"].includes(sortBy)) {
      tempArray = [...movieList]
        .map((value) => JSON.parse(JSON.stringify(value)))
        .sort((a, b) => {
          // map используется для того, чтобы основной массив не мутировал
          if (a[sortBy] > b[sortBy] && sortBy === "year")
            return -1;
          else if (a[sortBy] < b[sortBy] && sortBy === "id")
            return -1;
          // todo: how to simplify??
        });
    } else if (["title"].includes(sortBy))
      tempArray = [...movieList].sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]);
      });
    setSortedMovieList(tempArray);
  };

  const finalMovieList = sortedMovieList.filter(movie => { // FILTER BY SEARCH
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  }).filter((movie) => { // FILTER BY YEAR AND RATING
    return (
        movie.year >= Number(chosenYears[0]) &&
        movie.year <= Number(chosenYears[1]) &&
        movie.kp >= Number(chosenRating[0]) &&
        movie.kp <= Number(chosenRating[1])
    );
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    searchMovie();
  }

  const searchMovie = () => {

    const tempArray = sortedMovieList.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchedMovieList(tempArray);
  };

  return (
    <>
      <CatalogFilm
        movie={{
          movieImg:
            "https://i.pinimg.com/originals/b7/62/b1/b762b184afe21c6af483607e84c307b0.png",
          title: "Drive",
          genre: "криминал драма триллер",
          discription:
            "Великолепный водитель – при свете дня он выполняет каскадёрские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт – и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего – виртуозно уходить от погони.",
          director: "Режиссёр: Николас Виндинг Рефн",
          kp: "8.7",
        }}
      />
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
                { value: "id", name: "популярности" },
                { value: "title", name: "алфавиту" },
                { value: "year", name: "годам" },
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
  );
};
export default Catalog;

// todo: починить пересечение сортировок