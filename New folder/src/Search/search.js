import React from 'react';
import './search.css';


const ResultCard = (props) => {
  const {username, msg} = props;
  return (
    <div className="resultCardContainer">
      <img />
      <div className="rcc_usrname">{username}</div>
      <div className="rcc_msg">{msg}</div>
    </div>
  )
}

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state ={ 
      searchTxt: ''
    }
  }

  render() {
    const {searchTxt} = this.state;

    const mockData = [
      {
        username: "user1",
        msg: "test"
      },
      {
        username: "user2",
        msg: "test"
      },
      {
        username: "user3",
        msg: "test"
      },
    ]

    return (
      <div className="pageContainer">
        <div className="inputContainer">
          <input value={searchTxt} placeholder="Search here" />
        </div>
        <div className="searchResultContainer">
          {mockData.map(d => {
            return ResultCard(d)
          })}
        </div>
      </div>
    )
  }
}