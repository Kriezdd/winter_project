import React from 'react';
import {useNavigate} from "react-router-dom";
import filter_icon from '../../assets/Icons/filter_icon.png';
import search_icon from '../../assets/Icons/search_icon.png';
import pp from '../../assets/ProfilePicture/profilepic.jpg';
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="Wrapper"></div>
            <div className="Header">
                <h3 onClick={() => navigate("/")} className="WholeLogoTitle"><span className="LogoTitle">KINO</span>
                    <span className="LogoTitle">SPOT</span></h3>
                <div className="NavBar">
                    <h3 onClick={() => navigate("/catalog")}>каталог</h3>
                    <h3 onClick={() => navigate("/articles")}>статьи</h3>
                    <h3 onClick={() => navigate("/selections")}>подборки</h3>
                    <h3 onClick={() => navigate("/minigame")}>мини-игра</h3>
                </div>
                <div className="SearchField">
                    <input className="SearchBar" placeholder="глобальный поиск..."/>
                    <img className="Filter" src={filter_icon} alt='filter'/>
                    <img className="SearchIcon" src={search_icon} alt='search'/>
                </div>
                <div className="ProfileCircle">
                    <img src={pp} alt='pp'/>
                </div>
            </div>
        </div>
    );
};

export default Header;