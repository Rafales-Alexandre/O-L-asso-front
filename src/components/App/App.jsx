// Importation des dépendances React, hooks et bibliothèques externes
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { auth } from "../../actions/userActions";
import LogIn from "../LogIn";
import ResetPassword from "../ResetPassword";
import UserPanel from "../UserPanel";
import DataView from "../DataView";
import videoBackground from "../../assets/Olasso.mp4"

// Déclaration du composant fonctionnel App
function App() {
  // Utilisation des hooks useDispatch et useSelector pour interagir avec le store Redux
  const dispatch = useDispatch();
  const [refused, setRefused] = useState(false);
  const loggedInUserInTheStore = useSelector(
    (state) => state.user.loggedInUser
  );
  const loggedInUser = loggedInUserInTheStore
    ? {
        ...loggedInUserInTheStore,
        id: parseInt(loggedInUserInTheStore.id, 10),
      }
    : null;

  // Fonction pour gérer la connexion
  const handleLogin = (email, password) => {
    dispatch(auth(email, password))
      .then(() => {
        setRefused(false);
      })
      .catch(() => setRefused(true));
  };

  // Fonction pour gérer la réinitialisation du mot de passe
  const handleReset = (password, confirmPassword) => {
    // Ici, vous pouvez gérer la réinitialisation du mot de passe
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  // Rendu du composant App
  return (
      <div>
        <div className="App relative">
        <video
        className="w-full h-full object-cover fixed top-0 left-0 z-0"
        autoPlay
        muted
      >
        <source src={videoBackground} type="video/mp4" />
      </video>
          {loggedInUser ? (
            <div className="flex w-full flex-col md:gap-4 md:flex-row ">
              <div className="sticky   md:w-1/5 md:shadow-xl ">
                <UserPanel user={loggedInUser} onLogout={handleLogout} />
              </div>
              <div className="h-screen overflow-y-scroll md:w-4/5 z-10 ">
                <DataView loggedInUser={loggedInUser} />
              </div>
            </div>
          ) : (
            <Routes>
    <Route path="/" element={<LogIn onLogin={handleLogin} refused={refused} />} />
    <Route path="/ResetPassword" element={<ResetPassword onReset={handleReset} />} />
  </Routes>
          )}
        </div>
      </div>
  );
}

// Exportation du composant App
export default App;
