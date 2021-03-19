import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './App.css';
import Feed from './Feed';
import Widgets from './Widgets';
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
