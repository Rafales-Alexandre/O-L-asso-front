import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstruments, fetchUsers, fetchSuits } from '../../actions/userActions';
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
  const users = useSelector((state) => state.user.users);
  const instruments = useSelector((state) => state.user.instruments);
  const suits = useSelector((state) => state.user.suits);
  const [refused, setRefused] = useState(false);
  const [userData, setUserData] = useState([]);
  const [instruData, setInstruData] = useState([]);
  const [suitsData, setSuitsData] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchInstruments());
    dispatch(fetchSuits());
  }, [dispatch]);

  const handleLogin = (email, password) => {
    // Avec l'email et password, faire une requête POST à l'API (leur demander la doc si nécessaire)
    // donc requête gql à faire
    // une fois que la requeête s'est bien passée et que le back nous a retourné un token,
    // ajouter le token en localStorage
    // (eventuellement stocker le token dans le store de redux)
    // ajouter le token dans le header autorization de votre client appollo

    setUserData([...users.getAllUsers]);
    setInstruData([...instruments.getAllInstruments]);
    setSuitsData([...suits.getAllSuits]);
    const test = [...users.getAllUsers];
    const user = test.find((u) => u.email === email && u.password === password);
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
                <Route path={`/${loggedInUser.id}`} element={<UserEdit data={[loggedInUser]} onSubmitFormUser={() => {}} />} />
                <Route path="/instuments" element={<Instruments data={instruData} />} />
                <Route path="/suits" element={<Suits data={suitsData} />} />
                <Route path="/users" element={<Users data={userData} />} />
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
