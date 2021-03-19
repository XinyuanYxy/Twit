import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './App.css';
import Feed from './Homepage/Feed';
import Widgets from './Widgets';
import FullPost from './Homepage/FullPost';


function App() {
  //Feed is 0, Fullpost is 1, Profile is 2
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPost, setCurrentPost] = useState({
    id: 0,
    displayname: 'Undefined',
    username: 'Undefined',
    avatar: null,
    text: 'Undefined'
});

  const setPage = (page) =>{
    setCurrentPage(page);
  }

  const displayPost = (post) =>{
    setCurrentPost(post);
    setCurrentPage(1);
  }

  return (
      <div className="app">
          {/* sidebar */}
          <Sidebar setPage={setPage} currentPage={currentPage}/>
          {/* feed */}
          {currentPage === 0 && <Feed displayPost={displayPost}/>}
          {currentPage === 1 && <FullPost post={currentPost} displayPost={displayPost}/>}
      </div>
  );
import AuthRouter from './routers/AuthRouter';
import LoginRouter from './routers/LoginRouter';

function App() {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    return (
      <div className="app">
        <AuthRouter />
      </div>
    );
  } else {
    return (
      <div className="app">
        <LoginRouter />
      </div>
    );
  }
}

export default App;
