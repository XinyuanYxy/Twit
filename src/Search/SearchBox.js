import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './SearchBox.css';
import { useState } from 'react'

function SearchBox() {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Search Can\'t Be Empty');
            return;
        }
        //Perform search
        setText('')
    }

    return (
        <div className="searchBox">
            <form onSubmit={onSubmit}>
                <div className="searchBox_input">
                    <textarea value={text} placeholder= "Search For User..." onChange={(e) => setText(e.target.value)}/>
                </div>
                <input type='submit' value='Search' className="searchBox_searchButton"/>
            </form>

            
        </div>
    );
}

export default SearchBox
