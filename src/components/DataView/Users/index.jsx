import React, { useState } from "react";
import UserEdit from "../../Edit/UserEdit";
import { useSelector } from 'react-redux';

function User({ data }) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [collapse, setCollapse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleCollapse = (id) => {
    if (collapse === id) {
      setCollapse(null);
    } else {
      setCollapse(id);
    }
  };
  const toggleModal = (user) => {
    setSelectedUser(user);
    setShowModal(!showModal);
  };

  return (
    <div className="bg-base-300">
      <h2 className="text-3xl font-bold m-4 pt-4">Adherents</h2>
      {data.map((u) => {
        return (
          <div className="card card-side bg-base-100 shadow-md m-4 mt-10 p-4 flex flex-col relative" key={u.id}>
            <div className="flex-grow">
              <div onClick={() => toggleCollapse(u.id)} className="flex items-center">
                <figure className="mr-4">
                  <img src={u.url_img} alt="User" className="rounded-full w-20 h-20" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl font-bold">
                    {u.firstname} {u.lastname} ({u.nickname})
                  </h2>
                </div>
              </div>
              <button
                onClick={() => toggleModal(u)}
                className={`btn btn-primary mt-4 top-5 right-4 absolute`}
              >
                Edition
              </button>
            </div>
            {collapse === u.id && (
              <div className="card-body mt-4">
                <div>
                  {/* User details */}
                </div>
              </div>
            )}
          </div>
        );
      })}
      {showModal && (
        <div> <h1>HELLO</h1></div>
      )}
    </div>
  );
}

export default User;
