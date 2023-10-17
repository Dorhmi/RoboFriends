import React from "react";
import './card.css';

const Card = ({name , email , id}) => {
    return (
        <div className="card-container">
            <img className="image" src={`https://robohash.org/${id}?200*200`} alt="robot"></img>
            <div className="card-content">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card ;