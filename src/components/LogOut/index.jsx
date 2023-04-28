import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../Form/Button';
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' });
    localStorage.clear();
    navigate('/');
  };

  return (
    <Button className="btn btn-primary hidden md:visible w-full max-w-xs self-center md:hover:btn-warning" type="button" onClick={handleLogout}>
      Déconnexion
    </Button>
  );
}

export default Logout;
