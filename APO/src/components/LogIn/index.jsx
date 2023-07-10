// Importation de React et useState
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Déclaration du composant fonctionnel LogIn
function LogIn({ onLogin, refused }) {
  // Déclaration des états pour email et mot de passe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Déclaration de la fonction handleSubmit
  const handleSubmit = (e) => {
    // Empêche le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();
    // Appelle la fonction onLogin passée en tant que prop avec email et mot de passe
    onLogin(email, password);
  };

  // Rendu du composant
  return (
    <div className="hero min-h-screen w-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Connexion</h1>
          <p className="py-6">Saisissez vos identifiants pour vous connecter.</p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-bordered input"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn" type="submit">
                Entrer
              </button>
              {refused && (
                <p className="mt-6 text-center text-warning ">
                  Identifiants invalides. Veuillez réessayer.
                </p>
              )}
            </div>
            <button
              type="button"
              className="link-hover link mt-3 text-center hover:link-info"
            >
              Mot de passe oublié ?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Définition des propTypes
LogIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
  refused: PropTypes.bool.isRequired,
};

// Exportation du composant
export default LogIn;
