import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import LogIn from '../LogIn';
import UserPanel from '../UserPanel';
import DataView from '../DataView';

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

    // Avec l'email et password, faire une requête POST à l'API (leur demander la doc si nécessaire)
    // donc requête gql à faire
    // une fois que la requeête s'est bien passée et que le back nous a retourné un token,
    // ajouter le token en localStorage
    // (eventuellement stocker le token dans le store de redux)
    // ajouter le token dans le header autorization de votre client appollo

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
              <DataView loggedInUser={loggedInUser} />
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
