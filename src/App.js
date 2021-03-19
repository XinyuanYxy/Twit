import React from 'react';
import './App.css';
import AuthRouter from './routers/AuthRouter';
import LoginRouter from './routers/LoginRouter';

function App() {
  const authToken = true;//localStorage.getItem("token");
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
