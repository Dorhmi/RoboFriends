import React from "react";
import CardsContainer from './Cardscontainer';
import { robots } from './robots';
import './Layout.css';

const Layout = () => {
    return (
        <header className="header">
            <div className="header-content">
            <h1 className="header-title">robofriends</h1>
            <input className="header-input" type="text" placeholder="search Robots..."></input>
            </div>
            <div>
                <CardsContainer robots={robots} /> 
            </div>
        </header>
    )
}

export default Layout ;