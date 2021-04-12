import React from 'react';
import './search.css';
import axios from '../api/axios';
import Header from '../Header'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

export default class Search extends React.Component {
    constructor(props){
      super(props);
    }

    state = {
      search: [],
      searchTerm: ""
    }

    updateTerm = (e, term) =>{
      this.setState({searchTerm: term}, function() {
        this.componentDidMount();
      }.bind(this));
    }

    componentDidMount(){
      axios.get(`/users/search/${this.state.searchTerm}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res =>{
          const data = res.data;
          this.setState({search: data});
      });
    };

    render(){
      return (
        <div className="pageContainer">
          <Header headerText={"Search"}/>
          <SearchBox updateTerm={this.updateTerm}/>
          <div className="searchResultContainer">
          {this.state.search.map((user) =>(
              <SearchResult key={user.id} user={user} displayProfile={this.props.displayProfile}/>
          ))}
          </div>
        </div>
      )
    }
}