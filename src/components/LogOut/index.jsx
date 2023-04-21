import React from 'react';

function Logout() {
  const handleLogout = () => {
    // TODO suppression du token d'authentification
   /*  window.location.href = 'http://www.batala-lr.com/batala-mundo/'; */
    // ou page de login
  };

  return (
    <button className="btn btn-primary invisible md:visible w-48 md:hover:btn-warning" type="button" onClick={handleLogout}>
      Déconnexion
    </button>
  );
}

export default Logout;
