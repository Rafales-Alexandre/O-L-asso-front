// src/components/App/App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import LogIn from '../LogIn';
import UserPanel from '../UserPanel';

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      dispatch({ type: 'LOGIN_USER', payload: user });
    } else {
      console.log('Identifiants invalides');
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <UserPanel user={loggedInUser} onLogout={handleLogout} />
      ) : (
        <LogIn onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
