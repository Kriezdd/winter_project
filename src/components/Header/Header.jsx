import React from 'react';
import {useNavigate} from "react-router-dom";
// import filter_icon from 'C:/Users/blagu/WebstormProjects/winter_project/src/assets/filter_icon.png'
// import search_icon from 'C:/Users/blagu/WebstormProjects/winter_project/src/assets/search_icon.png'
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="Wrapper"></div>
            <div className="Header">
                <h1 onClick={() => navigate("/")}>KINOSPOT</h1>
                <div className="NavBar">
                    <p onClick={() => navigate("/catalog")}>каталог</p>
                    <p onClick={() => navigate("/articles")}>статьи</p>
                    <p onClick={() => navigate("/selections")}>подборки</p>
                </div>
                <div className="SearchField">
                    <input className="SearchBar" placeholder="поиск..."/>
                    {/*<img className="Filter" src={filter_icon} alt='filter'/>*/}
                    {/*<img className="SearchIcon" src={search_icon} alt='search'/>*/}
                </div>
                <div className="ProfileCircle">
                </div>
            </div>
        </div>
    );
};

export default Header;