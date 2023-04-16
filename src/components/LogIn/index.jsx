import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogIn from '../LogIn';
import UserPanel from '../UserPanel';
import { useQuery, gql } from '@apollo/client';

const Get_User = gql`
query Query {
  getAllUser {
    id
    url_img
    lastname
    firstname
    nickname
    email
    password
    role
  }
}
`;

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const { loading, error, data } = useQuery(Get_User);

  const handleLogin = (email, password) => {
    const user = data.getAllUser.find(u => u.email === email && u.password === password);
    if (user) {
      dispatch({ type: 'LOGIN_USER', payload: user });
    } else {
      console.log('Identifiants invalides');
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
    };
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
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
