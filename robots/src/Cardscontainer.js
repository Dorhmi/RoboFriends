import React from "react";
import Card from './card';
import './Cardscontainer.css';


const CardsContainer = ({robots}) => {
    const cardsArray = robots.map((item , index) => {
        return (
            <Card 
            key={index} 
            id={item.id} 
            name={item.name} 
            email={item.email}
            />
        )
    })
    return (
        <div className="cards-container">
            {cardsArray}
        </div>
    )
}
export default CardsContainer ;