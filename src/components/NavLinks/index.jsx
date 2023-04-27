import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLinks({ user }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="overflow-x-auto scroll-smooth border-b border-primary md:my-12 md:border-b-0 md:w-full md:max-w-xs">
      <ul className="menu menu-compact menu-horizontal md:menu-normal md:menu-vertical md:w-full">
        <li className={currentPath === '/' ? 'bordered' : ''}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={currentPath === '/profil' ? 'bordered' : ''}>
          <Link to="/profil">Profil</Link>
        </li>
        {(user.role === 'board' || user.role === 'admin') && (
          <>
            <li className={currentPath === '/instuments' ? 'bordered' : ''}>
              <Link to="/instuments">Instruments</Link>
            </li>
            <li className={currentPath === '/suits' ? 'bordered' : ''}>
              <Link to="/suits">Costumes</Link>
            </li>
            <li className={currentPath === '/users' ? 'bordered' : ''}>
              <Link to="/users">Gestion des adhérents</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

NavLinks.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavLinks;
