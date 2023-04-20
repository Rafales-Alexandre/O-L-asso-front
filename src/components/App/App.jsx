import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import LogIn from '../LogIn';
import UserPanel from '../UserPanel';
import UserView from '../DataView/UserView';
import Suits from '../DataView/Suits';
import Users from '../DataView/Users';
import Instruments from '../DataView/Instruments';
import UserEdit from '../Edit/UserEdit';

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const users = useSelector((state) => state.user.users.getAllUsers);
  const [refused, setRefused] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  useEffect(() => {
    if (users) {
      setUserData(Object.values(users));
    }
  }, [users]);



  const handleLogin = (email, password) => {
    const user = userData.find((u) => u.email === email && u.password === password);
    if (user) {
      dispatch({ type: 'LOGIN_USER', payload: user });
      setRefused(false);
    } else {
      setRefused(true);
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
  };

  return (

    <div>
      <div className="App">
        {loggedInUser ? (
          <>
            <h2 className="text-3xl font-bold m-4 w-5/5">Dashboard</h2>
            <UserPanel user={loggedInUser} onLogout={handleLogout} />
            <div className="absolute top-0 right-10 w-3/5">
              <Routes>
                <Route path="/" element={<UserView user={loggedInUser} />} />
                <Route path="/profil" element={<UserEdit data={[loggedInUser]} onSubmitFormUser={() => {}} />} />
                <Route path="/instuments" element={<Instruments />} />
                <Route path="/suits" element={<Suits />} />
                <Route path="/users" element={<Users />} />
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
