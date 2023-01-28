import React from 'react';
import './style.scss';
import { cn as bem } from "@bem-react/classname";

const Header = () => {
    const cn = bem("header");
    return (
        <div className={cn()}>
            <div className="title">
                <h1>KINOMAP</h1>
                <hr/>
                <h3>movies</h3>
            </div>
            <div className="navMenu">
                <div>
                    <p>Рекомендации</p>
                    <hr/>
                </div>
                <div>
                    <p>Подборки</p>
                    <hr/>
                </div>
                <div>
                    <p>О проекте</p>
                    <hr/>
                </div>
            </div>

        </div>
    );
};

export default React.memo(Header);