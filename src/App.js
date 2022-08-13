
import React from 'react';
import './App.css';
import Home from './Home';
import { Profile } from './Profile';

function App() {
  return (
    <div className="App">
      react js tutorial
      <Home/>
      <Profile/>
      {/* {
        React.createElement(
          'h1',
          null,
          'hello jsx'
        )
      } */}
    </div>
  );
}

export default App;
