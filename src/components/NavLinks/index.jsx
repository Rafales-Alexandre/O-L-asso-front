import React, { useState  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { faHome, faUser, faDrum, faShirt, faUserGroup, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function NavLinks({ user }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className=" overflow-x-auto scroll-smooth border-b border-primary md:my-12 md:border-b-0 md:w-full md:max-w-xs">
      <div className='hidden md:block'>
      <ul className="menu menu-compact menu-horizontal md:menu-normal md:menu-vertical md:w-full">
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
      <div 
        className='md:hidden '>
         { showSidebar ? (
    <button
    type='button'
      className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}>
      <FontAwesomeIcon icon={faXmark} size="sm" /> 
    </button>
  ) : (
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className=" absolute z-30 flex items-center cursor-pointer right-10 top-6"
      fill="#0d0d0d"
      viewBox="0 0 100 80"
      width="20"
      height="30"
    >
      <rect width="100" height="10" />
      <rect y="30" width="100" height="10" />
      <rect y="60" width="100" height="10" />
    </svg>
  )}
  <div
  className={`top-0 overflow-hidden right-0 w-[100vw] bg-primary p-5  text-white fixed h-full z-40  ease-in-out duration-600 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}
>
    <ul 
      className=""
      >
      <li className="mt-20 text-lg font-semibold text-white">
      <Link className="text-xs uppercase font-semibold w-full hover:text-red-400" to="/">
      <FontAwesomeIcon icon={faHome} size="xl" className='mr-2'/> 
        Accueil </Link>
        </li>
        <li className="mt-10  text-lg font-semibold text-white">
        <Link className="text-xs uppercase font-semibold w-full hover:text-red-400" to="/profil">
        <FontAwesomeIcon icon={faUser}  size="xl" className='mr-2' />
        Profil</Link>

        </li>
        {(user.role === 'board' || user.role === 'admin') && (
          <>
        <li className="mt-10 text-lg font-semibold text-white">
        <Link className="text-xs uppercase font-semibold w-full hover:text-red-400" to="/instruments">
        <FontAwesomeIcon icon={faDrum}  size="xl" className='mr-2' />
        Instruments</Link>
        </li>
        <li className="mt-10 text-lg font-semibold text-white">
        <Link className="text-xs uppercase font-semibold w-full hover:text-red-400"  to="/suits">
        <FontAwesomeIcon icon={faShirt}  size="xl" className='mr-2' />
        Costumes</Link>
        </li>
        <li className="mt-10 text-lg font-semibold text-white">
          <Link className="text-xs uppercase font-semibold w-full hover:text-red-400" to="/users">
          <FontAwesomeIcon icon={faUserGroup}  size="xl" className='mr-2'/>
          Adhérents</Link>
        </li>
      </>
      )}
      </ul>
  </div>
  <div
    className={`fixed top-22 left-0 w-screen h-screen ${
      showSidebar ?  'bg-gray-500 bg-opacity-50' : 'bg-transparent'
    } transition-opacity duration-500 ease-in-out`}

  />
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
