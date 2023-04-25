import React, { useState, useEffect } from "react";
import UserEdit from "../../Edit/UserEdit";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../actions/userActions";

function User() {
  const [collapse, setCollapse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const users = useSelector((state) => state.user.users.getAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setUserData(Object.values(users));
  }, [users]);

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
      <h2 className="text-3xl font-bold">Adherents</h2>
      {userData.map((u) => {
        return (
          <div
            className="card card-side relative m-4 mt-10 flex flex-col bg-base-100 p-4 shadow-md"
            key={u.id}
          >
            <div className="flex-grow">
              <div
                onClick={() => toggleCollapse(u.id)}
                className="flex items-center"
              >
                <figure className="mr-4">
                  <img
                    src={u.url_img}
                    alt="User"
                    className="h-20 w-20 rounded-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">
                    {u.firstname} {u.lastname} ({u.nickname})
                  </h2>
                </div>
              </div>
              <button
                onClick={() => toggleModal(u)}
                className={`btn-primary btn absolute right-4 top-5 mt-4`}
              >
                Edition
              </button>
            </div>
            {collapse === u.id && (
              <div className="card-body mt-4">
                <div>{/* User details */}</div>
              </div>
            )}
          </div>
        );
      })}

      {showModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showModal ? "modal-open" : ""}`}>
            <div className="modal-box relative w-11/12 max-w-5xl">
              <button
                onClick={() => {
                  toggleModal();
                }}
                className="btn-sm btn-circle btn absolute right-2 top-2"
              >
                ✕
              </button>
              <UserEdit data={[selectedUser]} onSubmitFormUser={() => {}} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default User;
