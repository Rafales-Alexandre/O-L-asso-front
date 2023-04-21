import React, { useState } from 'react';

function LogIn({ onLogin, refused }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

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
                  Indentifiants invalides. Veuillez réessayer.
                </p>
              )}
            </div>
            <a className="link-hover link mt-3 text-center hover:link-info">
              Mot de passe oublié ?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
