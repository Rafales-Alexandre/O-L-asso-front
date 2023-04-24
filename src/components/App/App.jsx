import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers/* , auth  */ } from '../../actions/userActions';
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
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setUserData(Object.values(users));
    }
  }, [users]);

  const handleLogin = (email, password) => {
    // Avec l'email et password, faire une requête POST à l'API (leur demander la doc si nécessaire)
    // donc requête gql à faire
    // une fois que la requeête s'est bien passée et que le back nous a retourné un token,
    // ajouter le token en localStorage
    // (eventuellement stocker le token dans le store de redux)
    // ajouter le token dans le header autorization de votre client appollo

    /* dispatch(auth(email, password))
      .then(() => setRefused(false))
      .catch(() => setRefused(true)); */

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
          <div className="flex h-screen w-full flex-col md:flex-row">
            <div className="sticky top-0 h-screen md:w-1/5">
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
