import React from 'react';
/* import PropTypes from 'prop-types'; */

function UserBanner({ user }) {
  return (
    <div className="flex wrap" key={user.id}>
      <div>
        <img className="rounded-full" src={user.url_img} alt="Avatar" />
      </div>
      <div>
        <p className="user-nickname">{user.nickname}</p>
        <p className="user-email">{user.email}</p>
        <p className="position absolute">{user.role}</p>
      </div>
    </div>
  );
}

/* UserBanner.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url_img: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
}; */

export default UserBanner;
