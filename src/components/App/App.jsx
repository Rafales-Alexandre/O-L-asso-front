
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SocialLinks from '../SocialLinks';
import './App.css'
import NavLinks from '../NavLinks'
import Logout from '../Logout';

function App() {

function App() {
  return (
    <div className="App">
       <NavLinks users={ users } />
      <SocialLinks />
      <Logout />
    </div>

}

export default App;
