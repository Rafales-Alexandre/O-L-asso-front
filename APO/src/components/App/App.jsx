// Importation des dépendances React, hooks et bibliothèques externes
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, auth } from "../../actions/userActions";
import LogIn from "../LogIn";
import UserPanel from "../UserPanel";
import DataView from "../DataView";
import ErrorClient from "../../pages/ErrorCLient";

// Déclaration du composant fonctionnel App
function App() {
  // Utilisation des hooks useDispatch et useSelector pour interagir avec le store Redux
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users.getAllUsers);
  const [refused, setRefused] = useState(false);
  const [userData, setUserData] = useState([]);
  const loggedInUserInTheStore = useSelector(
    (state) => state.user.loggedInUser
  );
  const loggedInUser = loggedInUserInTheStore
    ? {
        ...loggedInUserInTheStore,
        id: parseInt(loggedInUserInTheStore.id, 10),
      }
    : null;

  // Effet pour mettre à jour userData lorsque users change
  useEffect(() => {
    if (users) {
      setUserData(Object.values(users));
    }
  }, [users]);

  // Effet pour récupérer les utilisateurs lors de la connexion d'un utilisateur
  useEffect(() => {
    dispatch(fetchUsers());
  }, [loggedInUser]);

  // Fonction pour gérer la connexion
  const handleLogin = (email, password) => {
    dispatch(auth(email, password))
      .then(() => {
        setRefused(false);
      })
      .catch(() => setRefused(true));
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  // Rendu du composant App
  return (
    <div>
      <div className="App ">
        {loggedInUser ? (
          <div className="flex w-full flex-col md:gap-4 md:flex-row ">
            <div className="sticky   md:w-1/5 md:shadow-xl ">
              <UserPanel user={loggedInUser} onLogout={handleLogout} />
            </div>
            <div className="h-screen overflow-y-scroll md:w-4/5 bg-base-300">
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

// Exportation du composant App
export default App;
