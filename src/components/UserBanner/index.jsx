import React from "react";

function UserBanner({ user }) {
  return (
    <div className="flex items-center md:flex-col " key={user.id}>
      <div className="avatar">
        <div className="m-4 w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 md:w-24">
          <img src={user.url_img} alt="Avatar" />
        </div>
      </div>
      <div className="font-bold md:text-center">
        <p className="text-lg first-letter:uppercase">{user.nickname}</p>
        <p className="bade-primary badge-outline badge badge-xs p-2 font-semibold uppercase md:badge-md">
          {user.role}
        </p>
      </div>
    </div>
  );
}

export default UserBanner;
