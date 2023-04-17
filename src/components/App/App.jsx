import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import LogIn from '../LogIn';
import UserPanel from '../UserPanel';
import Edit from '../Edit'

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const users = useSelector((state) => state.user.users);
  const [refused, setRefused] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogin = (email, password) => {
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
    <div className="App">


      <UserPanel />

      {loggedInUser ? (
        <UserPanel user={loggedInUser} onLogout={handleLogout} />
      ) : (
        <LogIn onLogin={handleLogin} refused={refused} />
      )}

    </div>
  );
}

export default App;
