import React from 'react';
import './search.css';
import Header from '../Header'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

function Search({displayProfile}) {
    const mockData = [
      {
        id: 0,
        displayname: "Chris",
        username: "@ChrisTucker",
        Avatar: 'christucker.jpg'
      },
      {
        id: 1,
        displayname: "Christopher",
        username: "@ChristopherRobin",
        Avatar: 'christopherrobin.jpg'
      },
      {
        id: 2,
        displayname: "Christy",
        username: "@Christy",
        Avatar: 'christy.jpg'
      },
    ]

    return (
      <div className="pageContainer">
        <Header headerText={"Search"}/>
        <SearchBox />
        <div className="searchResultContainer">
        {mockData.map((user) =>(
            <SearchResult key={user.id} user={user} displayProfile={displayProfile}/>
        ))}
        </div>
      </div>
    )
}

export default Search