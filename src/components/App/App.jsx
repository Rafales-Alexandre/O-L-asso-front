import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstruments, fetchUsers } from '../../actions/userActions';
import LogIn from '../LogIn';
import UserPanel from '../UserPanel';
import UserView from '../DataView/UserView';
import Suits from '../DataView/Suits';
import Users from '../DataView/Users';
import Instruments from '../DataView/Instruments';
import UserEdit from '../Edit/UserEdit';
import data from '../../../data/user.json';
import DataView from '../DataView';
import Edit from '../Edit';

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const users = useSelector((state) => state.user.users);
  const instruments = useSelector((state) => state.user.instruments);
  const [refused, setRefused] = useState(false);
  const [instruData, setInsruData] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchInstruments());
  }, [dispatch]);

  const handleLogin = (email, password) => {
    setInsruData([...instruments.getAllInstruments]);
    console.log(instruData);
    const test = [...users.getAllUsers];
    const user = test.find(u => u.email === email && u.password === password);
    if (user) {
      dispatch({ type: 'LOGIN_USER', payload: user });
      setRefused(false);
    } else {
      setRefused(true);
      console.log("REFUSED !");
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
  };

  return (

    <div className="md:flex">
      <div className="App">
        {loggedInUser ? (
          <>
            <UserPanel user={loggedInUser} onLogout={handleLogout} />
            <div>
              <Routes>
                <Route path="/" element={<UserView user={loggedInUser} />} />
                <Route path="/member/instuments" element={<Instruments data={loggedInUser} />} />
                <Route path="/member/suits" element={<Suits data={loggedInUser} />} />
                <Route path="/member/users" element={<Users data={loggedInUser} />} />
              </Routes>
            </div>
          </>
        ) : (
          <LogIn onLogin={handleLogin} refused={refused} />
        )}

      </div>
    </div>
  );
}

export default App;
