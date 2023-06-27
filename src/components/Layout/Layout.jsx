import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-wrapper">{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
