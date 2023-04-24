import React from 'react';
import UserBanner from '../UserBanner';
import NavLinks from '../NavLinks';
import LogOut from '../LogOut';
import SocialLinks from '../SocialLinks';

function UserPanel({ user, onLogout }) {
  return (
    <div className="md:flex md:flex-col md:h-full md:justify-center md:items-center">
      <UserBanner user={user} />
      <NavLinks user={user} />
      <LogOut onLogout={onLogout} />
      <SocialLinks />
    </div>
  );
}

export default UserPanel;
