import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Feed from './Feed';
import Widgets from './Widgets';
import Profile from './Profile'

function App() {
  return (
    <div className="app">
  
      {/* sidebar */}
      <Sidebar />
  
      <Profile />
      {/* widgets */}
    

      <Widgets />
      



    </div>
  );
}

export default App;
