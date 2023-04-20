import React from "react";

function UserBanner({ user }) {
  return (
    <div className="flex md:flex-col items-center" key={user.id}>
      <div className="avatar">
        <div className="md:w-24 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-4">
          <img src={user.url_img} alt="Avatar" />
        </div>
      </div>
      <div className="font-bold md:text-center">
        <p className="text-lg first-letter:uppercase">{user.nickname}</p>
        <p className="badge badge-xs bade-primary badge-outline font-semibold uppercase p-2 md:badge-md">{user.role}</p>
      </div>
    </div>
    
  );
}

export default UserBanner;
