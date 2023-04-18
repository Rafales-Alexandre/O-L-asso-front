import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks({ user }) {
  return (
    <div className="overflow-x-auto scroll-smooth">
      <ul className="menu menu-horizontal md:menu-vertical bg-base-100">
        <li className="bordered"><Link to="/">Accueil</Link></li>
        <li><Link to={`/${user.id}`}>Profil</Link></li>
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
