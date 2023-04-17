import React from 'react';
import UserBanner from '../UserBanner';
import NavLinks from '../NavLinks';
import LogOut from '../LogOut';
import SocialLinks from '../SocialLinks';

function UserPanel({ user, onLogout }) {
  return (
    <div className='bg-primary w-1/4 float-left p-4'>
      <UserBanner user={user} />
      <NavLinks user={user} />
      <LogOut onLogout={onLogout} />
      <SocialLinks />
    </div>
  );
}

export default UserPanel;