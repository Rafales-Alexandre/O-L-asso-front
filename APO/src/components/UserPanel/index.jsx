// Importation des dépendances et des composants
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import UserBanner from '../UserBanner';
import NavLinks from '../NavLinks';
import LogOut from '../LogOut';
import SocialLinks from '../SocialLinks';

// Déclaration du composant fonctionnel UserPanel
function UserPanel({ onLogout }) {
  // Utilisation du hook useSelector pour récupérer l'utilisateur connecté depuis le store Redux
  const user = useSelector((state) => state.user.loggedInUser.user);
  
  // Utilisation du hook useState pour gérer l'état de l'animation du panneau
  const [animatedPanel, setAnimatedPanel] = useState(false);

  // Utilisation du hook useEffect pour déclencher l'animation du panneau lors de son montage
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPanel(true);
    }, 0);

    // Nettoyage de l'effet lors du démontage du composant
    return () => clearTimeout(timer);
  }, []);

  // Rendu du composant UserPanel
  return (
    <div
      className={`md:flex md:flex-col md:h-full md:justify-center md:items-center transition-transform duration-1000 ease-in ${
        animatedPanel ? 'md:translate-y-0' : 'md:-translate-y-full'
      }`}
    >
      <UserBanner user={user} />
      <NavLinks user={user} />
      <LogOut onLogout={onLogout} />
      <SocialLinks />
    </div>
  );
}

// Validation des propriétés du composant
UserPanel.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

// Exportation du composant UserPanel
export default UserPanel;
