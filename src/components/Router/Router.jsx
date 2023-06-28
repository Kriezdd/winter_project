import React, {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import App from "../../App";
import Catalog from "../Catalog/Catalog";
import Articles from "../Articles/Articles";
import Selections from "../Selections/Selections";
import Layout from "../Layout/Layout";
import MiniGame from "../MiniGame/MiniGame";

const Router = () => {
    const location = useLocation();
    return (
        <div>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <Layout>
                            {" "}
                            <App/>{" "}
                        </Layout>
                    }
                />
                <Route
                    path="/catalog"
                    element={
                        <Layout>
                            {" "}
                            <Catalog/>{" "}
                        </Layout>
                    }
                />
                <Route
                    path="/articles"
                    element={
                        <Layout>
                            {" "}
                            <Articles/>{" "}
                        </Layout>
                    }
                />
                <Route
                    path="/selections"
                    element={
                        <Layout>
                            {" "}
                            <Selections/>{" "}
                        </Layout>
                    }
                />
                <Route
                    path="/minigame"
                    element={
                        <Layout>
                            {" "}
                            <MiniGame/>{" "}
                        </Layout>
                    }
                />
            </Routes>
        </div>
    );
};

export default Router;
