import Reactt, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLinks({ user }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };

  return (
    <div className=''>
    <div className='hidden md:block'>
      <ul className="menu menu-compact menu-horizontal md:menu-normal md:menu-vertical">
        <li className={currentPath === '/' ? 'bordered' : ''}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={currentPath === '/profil' ? 'bordered' : ''}>
          <Link to="/profil">Profil</Link>
        </li>
        {(user.role === 'board' || user.role === 'admin') && (
          <>
            <li className={currentPath === '/instruments' ? 'bordered' : ''}>
              <Link to="/instruments">Instruments</Link>
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
      <div className='md:hidden'>
      <button
        className= " fixed top-5 right-10 cursor-pointer "
        onClick={toggleMenu} >
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt=""/>
        </button>
        {menuOpen && (
      <ul 
      className="dropdown w-full absolute top-full left-0 -translate-y-full text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:w-min md:transform-none md:border-none md:flex-row"
      >
      <li className="py-2 md:py-0 md:mr-6 ">
      <Link className="text-sm uppercase font-semibold w-full hover:text-red-600" to="/">Accueil</Link>
        </li>
        <li className="py-2 md:py-0 md:mr-6 ">
        <Link className="text-sm uppercase font-semibold w-full hover:text-red-600" to="/profil">Profil</Link>

        </li>
        {(user.role === 'board' || user.role === 'admin') && (
          <>
        <li className="py-2 md:py-0 md:mr-6">
        <Link className="text-sm uppercase font-semibold w-full hover:text-red-600" to="/instruments">Instruments</Link>
        </li>
        <li className="py-2 md:py-0 md:mr-6">
        <Link className="text-sm uppercase font-semibold w-full hover:text-red-600"  to="/suits">Costumes</Link>
        </li>
        <li className="py-2 md:py-0 md:mr-6">
          <Link className="text-sm uppercase font-semibold w-full hover:text-red-600" to="/users">Gestion des adhérents</Link>
        </li>
      </>
      )}
      </ul>
        )}
</div>
    </div>
  );
}

NavLinks.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavLinks;
