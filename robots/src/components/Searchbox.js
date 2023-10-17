import React from "react";

const Searchbox = ({searchchange}) => {
    return (
        <input 
        className="header-input" 
        type="text" 
        placeholder="search Robots..." 
        onChange={searchchange}
        />
    )
}

export default Searchbox ;