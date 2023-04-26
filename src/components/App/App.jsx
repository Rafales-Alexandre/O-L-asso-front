import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, auth } from '../../actions/userActions';
import LogIn from '../LogIn';
import UserPanel from '../UserPanel';
import DataView from '../DataView';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users.getAllUsers);
  const [refused, setRefused] = useState(false);
  const [userData, setUserData] = useState([]);
  const loggedInUserInTheStore = useSelector((state) => state.user.loggedInUser);
  const loggedInUser = loggedInUserInTheStore
    ? {
      ...loggedInUserInTheStore,
      id: parseInt(loggedInUserInTheStore.id, 10),
    }
    : null;

  useEffect(() => {
    if (users) {
      setUserData(Object.values(users));
    }
  }, [users]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [loggedInUser]);

  const handleLogin = (email, password) => {
    dispatch(auth(email, password))
      .then(() => {
        setRefused(false);
        const user = userData.find((u) => u.email === email && u.password === password);
        console.log(user);
        if (user) {
          dispatch({ type: 'LOGIN_USER', payload: user });
        } else {
        console.log('refused');

          setRefused(true);
        }
      })
      .catch(() => setRefused(true));
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
  };
  return (
    <div>
      <div className="App">
        {loggedInUser ? (
          <div className="flex h-screen w-full flex-col md:flex-row">
            <div className="sticky top-0 md:w-1/5">
              <UserPanel user={loggedInUser} onLogout={handleLogout} />
            </div>
            <div className="h-screen overflow-y-scroll md:w-4/5">
              <DataView loggedInUser={loggedInUser} />
            </div>
          </div>
        ) : (
          <LogIn onLogin={handleLogin} refused={refused} />
        )}
      </div>
    </div>
  );
}

export default App;
