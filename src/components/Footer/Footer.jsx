import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/footer/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <img src={logo}/>
      </div>
    </div>
  );
};

export default Footer;