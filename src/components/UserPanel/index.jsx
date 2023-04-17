import React from 'react';
import UserBanner from '../UserBanner';
import NavLinks from '../NavLinks';
import LogOut from '../LogOut';
import SocialLinks from '../SocialLinks';

function UserPanel({ user, onLogout }) {
  return (
    <div className='container px-4 mx-auto'>
      <UserBanner user={user} />
      <NavLinks user={user} />
      <LogOut onLogout={onLogout} />
      <SocialLinks />
    </div>
  );
}

export default UserPanel;
