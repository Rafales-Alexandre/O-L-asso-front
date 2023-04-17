import React from "react";

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




export default UserBanner;
