import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
    navigate('/');
  };

  return (
    <button className="btn btn-primary invisible md:visible w-full max-w-xs self-center md:hover:btn-warning" type="button" onClick={handleLogout}>
      Déconnexion
    </button>
  );
}

export default Logout;
