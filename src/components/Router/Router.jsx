import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../../App";
import Catalog from "../Catalog/Catalog";
import Articles from "../Articles/Articles";
import Selections from "../Selections/Selections";

const Router = () => {
    const location = useLocation();
    return (
        <div>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App />} />
                <Route path="/catalog" element={<Catalog/>} />
                <Route path="/articles" element={<Articles/>} />
                <Route path="/selections" element={<Selections/>} />
            </Routes>
        </div>
    );
};

export default Router;