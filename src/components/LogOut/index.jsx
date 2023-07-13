// Importation de React, useNavigate et useDispatch
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../Form/Button';

// Déclaration du composant fonctionnel Logout
function Logout() {
  // Utilisation de l'hook useNavigate pour la navigation
  const navigate = useNavigate();
  // Utilisation de l'hook useDispatch pour accéder au dispatcher de Redux
  const dispatch = useDispatch();
  // Déclaration de la fonction handleLogout
  const handleLogout = () => {
    // Dispatch d'une action pour déconnecter l'utilisateur
    dispatch({ type: 'LOGOUT_USER' });
    // Suppression des données de l'utilisateur dans le localStorage
    localStorage.clear();
    // Redirection vers la page d'accueil
    navigate('/');
  };

  return (
    // Bouton de déconnexion qui appelle la fonction handleLogout lorsqu'il est cliqué
    <Button className="btn btn-primary md:block w-full max-w-xs self-center md:hover:btn-warning" type="button" onClick={handleLogout}>
      Déconnexion
    </Button>
  );
}

export default Logout;
