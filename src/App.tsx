import React from 'react';
import logo from './logo.svg';
import './App.css';

//Screens
import LandingPage from './Screens/LandingPage/LandingPage';
import Auth from './Screens/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;