import React from 'react';
import "./Header.css";

function Header({headerText}){
    return (
        <div className="main_header"> 
            <h2>{headerText}</h2>
        </div>
    );
}

export default Header