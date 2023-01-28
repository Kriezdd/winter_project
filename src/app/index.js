import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "../components/layout";
import MainPage from "../containers/main-page";


function App() {
    return (
        <Routes>
            <Route path={"/*"} element={<Layout/>}>
                <Route path={""} element={<MainPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
