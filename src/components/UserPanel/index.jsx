import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import UserBanner from '../UserBanner';
import NavLinks from '../NavLinks';
import LogOut from '../LogOut';
import SocialLinks from '../SocialLinks';

function UserPanel({ onLogout }) {
  const user = useSelector((state) => state.user.loggedInUser.user);
  const [animatedPanel, setAnimatedPanel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPanel(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`md:flex md:flex-col md:h-full md:justify-center md:items-center transition-transform duration-1000 ease-in ${
        animatedPanel ? 'md:translate-y-0' : 'md:-translate-y-full'
      }`}
    >
      <UserBanner user={user} />
      <NavLinks user={user} />
      <LogOut onLogout={onLogout} />
      <SocialLinks />
    </div>
  );
}

UserPanel.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default UserPanel;
