import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UserBanner from '../UserBanner';
import SocialLinks from '../SocialLinks';

import NavLinks from '../NavLinks'
import Logout from '../Logout';

import './App.css'

import users from '../../../data/users.json';



function App() {

function App() {
  return (
    <div className="App">
     <UserBanner data={users} />
     <NavLinks users={users} />
      <SocialLinks />
      <Logout />
    </div>

}

export default App;
