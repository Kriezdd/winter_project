import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import './style.scss'
import './reseter.css'

function Layout(props) {
    // не уверен в формате применения стилей, мб норм
    return (
        <div className='layout'>
            <Header images={props.images} />
            <Outlet />
        </div>
    );
}

export default React.memo(Layout);