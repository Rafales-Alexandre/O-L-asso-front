import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLinks({ user }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="overflow-x-auto scroll-smooth">
      <ul className="menu menu-horizontal md:menu-vertical bg-base-100">
        <li className="bordered"><Link to="/">Accueil</Link></li>
        <li><Link to={`/${user.id}`}>Profil</Link></li>
        {(user.role === 'board' || user.role === 'admin') && (
          <>
            <li className={currentPath === '/instuments' ? 'bordered' : ''}><Link to="/instuments">Instruments</Link></li>
            <li className={currentPath === '/suits' ? 'bordered' : ''}><Link to="/suits">Costumes</Link></li>
            <li className={currentPath === '/users' ? 'bordered' : ''}><Link to="/users">Gestion des adhérents</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavLinks;
