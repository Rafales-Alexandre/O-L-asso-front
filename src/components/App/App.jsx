import React from 'react';

import UserBanner from '../UserBanner';

import data from '../../../data/users.json';
import './App.css';

const App = () => {
  // const [data, setData] = useState(data);
console.log(data)
  return (
    <div className="App">
     <UserBanner data={data}/>
    </div>
  )
};

export default App;
