import React from 'react';
import { useSelector } from 'react-redux';
import PropsTypes from 'prop-types'
import UserBanner from '../UserBanner';
import NavLinks from '../NavLinks';
import LogOut from '../LogOut';
import SocialLinks from '../SocialLinks';

function UserPanel({ onLogout }) {
  const user = useSelector((state) => state.user.loggedInUser.user);
  return (
    <div className="md:flex md:flex-col md:h-full md:justify-center md:items-center">
      <UserBanner user={user} />
      <NavLinks user={user} />
      <LogOut onLogout={onLogout} />
      <SocialLinks />
    </div>
  );
}

UserPanel.PropsTypes = {
  onLogout: PropsTypes.func.isRequired
}
export default UserPanel;
