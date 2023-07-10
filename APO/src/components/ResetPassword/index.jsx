// Importation de React et useState
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Déclaration du composant fonctionnel ResetPassword
function ResetPassword({ onReset}) {
  // Déclaration des états pour le mot de passe et la confirmation du mot de passe
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Déclaration de la fonction handleSubmit
  const handleSubmit = (e) => {
    // Empêche le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();
    // Appelle la fonction onReset passée en tant que prop avec le mot de passe et la confirmation du mot de passe
    onReset(password, confirmPassword);
  };

  // Rendu du composant
  return (
    <div className="hero min-h-screen w-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Réinitialiser le mot de passe</h1>
          <p className="py-6">Veuillez entrer votre nouveau mot de passe.</p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Nouveau mot de passe</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label htmlFor="confirmPassword" className="label">
                <span className="label-text">Confirmer le nouveau mot de passe</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-bordered input"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn" type="submit">
                Réinitialiser
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Définition des propTypes
ResetPassword.propTypes = {
  onReset: PropTypes.func.isRequired,
};

// Exportation du composant
export default ResetPassword;
