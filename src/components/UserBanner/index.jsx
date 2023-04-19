import React from "react";

function UserBanner({ user }) {
  return (
    <div className="flex bg-base-200 p-6" key={user.id}>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user.url_img} alt="Avatar" />
        </div>
      </div>
      <div className="font-bold mx-4 self-center">
        <p className="text-lg user-nickname">{user.nickname}</p>
        <p className="font-semibold user-email">{user.email}</p>
        <p className="badge badge-xs bade-primgary badge-outline font-semibold uppercase p-2">{user.role}</p>
      </div>
    </div>
    
  );
}

export default UserBanner;
