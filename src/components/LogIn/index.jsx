import React, { useState } from 'react';

function LogIn({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email"  />
        <input type="email" id="email" placeholder="Votre adresse email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password" />
        <input type="password" id="password" placeholder="Votre mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LogIn;
