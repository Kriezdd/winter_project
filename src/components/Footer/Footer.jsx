import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/footer/logo.svg";
import iconOpenF from "./../../assets/footer/iconOpenF.svg";
import bkToTopIcon from "./../../assets/footer/bkToTopIcon.svg";
import "./Footer"



const handlerScrollUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="FooterContainer">
            <div className="Footer">
                <img src={iconOpenF} className="icon"></img>
                <img src={logo} className="logo" onClick={() => navigate("/")} />
                <img src={bkToTopIcon} className="back-to-top" onClick={handlerScrollUp} />
            </div>
        </div>
    );

};

export default Footer;
