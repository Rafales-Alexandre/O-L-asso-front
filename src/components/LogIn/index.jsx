import React, { useState } from 'react';

function LogIn({ onLogin, refused }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="LogIn min-h-screen flex items-center justify-center">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label htmlFor="email" className="mb-2" />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <label htmlFor="password" className="mb-2" />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <button className='btn' type="submit">Log In</button>
        {refused && (
          <p className="mt-2 text-red-500">Invalid email or password. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default LogIn;
