import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import users from '../../../data/users.json'
import NavLinks from '../NavLinks'


function App() {
  return (
    <Router>
      <div className="App">
        <NavLinks users={ users } />
      </div>
    </Router>
  )
}

export default App
