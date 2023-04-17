import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks({ user }) {
  return (
    <div>
      <ul className="menu bg-base-100 w-56">
        <li><Link to="/">Accueil</Link></li>
        <li className="bordered"><Link to={`/${user.id}`}>Profil</Link></li>
        {(user.role === 'board' || user.role === 'admin') && (
          <>
            <li><Link to="/member/instuments">Instruments</Link></li>
            <li><Link to="/member/suits">Costumes</Link></li>
            <li><Link to="/member/users">Gestion des adhérents</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavLinks;
