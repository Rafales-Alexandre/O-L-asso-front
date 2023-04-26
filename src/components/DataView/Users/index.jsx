/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserEdit from "../../Edit/UserEdit";
import UserCreate from "../../Create/UserCreate";
import { fetchUsers } from "../../../actions/userActions";

function User() {
  const [collapse, setCollapse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const users = useSelector((state) => state.user.users.getAllUsers);
  const userRole = useSelector((state) => state.user.loggedInUser.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "board" && userRole !== "admin") {
      navigate("/");
    }
  }, [userRole, navigate]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setUserData(Object.values(users));
    }
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

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  return (
    <div className="m-2">
      <h2 className="mb-4 text-2xl font-bold">Adhérents</h2>
      <button type="submit" className="btn" onClick={() => toggleCreateModal()}>
        Ajouter un utilisateur
      </button>
      {userData.map((u) => (
        <div
          className="card card-side relative m-4 mt-10 flex flex-col bg-base-100 p-4 shadow-md"
          key={u.id}
        >
          <div className="flex-grow">
            <div
              onClick={() => toggleCollapse(u.id)}
              onKeyDown={() => {}}
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
                  {u.firstname}
                  {u.lastname}({u.nickname})
                </h2>
              </div>
            </div>
            <button
              type="submit"
              onClick={() => toggleModal(u)}
              className="btn-primary btn absolute right-4 top-5 mt-4"
            >
              Edition
            </button>
          </div>
          {collapse === u.id && (
            <div className="card-body mt-4">
              <div>
                <p>
                  Nickname:
                  {u.nickname}
                </p>
                <p>
                  Email:
                  {u.email}
                </p>
                <p>
                  Phone:
                  {u.phone}
                </p>
                <p>
                  Address:
                  {u.address}
                </p>
                <p>
                  Address 2:
                  {u.address_2}
                </p>
                <p>
                  Zip Code:
                  {u.zip_code}
                </p>
                <p>
                  City:
                  {u.city}
                </p>
                <p>
                  Gender:
                  {u.gender}
                </p>
                <p>
                  Top Size:
                  {u.top_size}
                </p>
                <p>
                  Bottom Size:
                  {u.bottom_size}
                </p>
                <p>
                  Subscription:
                  {u.subscription}
                </p>
                <p>
                  Deposit:
                  {u.deposit}
                </p>
                <p>
                  Role:
                  {u.role}
                </p>
                <p>
                  Birthdate:
                  {u.birthdate}
                </p>
                <p>
                  Created At:
                  {u.created_at}
                </p>
                <p>
                  Updated At:
                  {u.updated_at}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
      {showModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showModal ? "modal-open" : ""}`}>
            <div className="modal-box relative w-11/12 max-w-5xl">
              <button
                type="submit"
                onClick={() => {
                  toggleModal();
                }}
                className="btn-sm btn-circle btn absolute right-2 top-2"
              >
                ✕
              </button>
              <UserEdit
                data={[selectedUser]}
                closeModal={toggleModal}
                onSubmitFormUser={() => {}}
              />
            </div>
          </div>
        </>
      )}
      {showCreateModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showCreateModal ? "modal-open" : ""}`}>
            <div className="modal-box relative w-11/12 max-w-5xl">
              <button
                type="submit"
                onClick={() => {
                  toggleCreateModal();
                }}
                className="btn-sm btn-circle btn absolute right-2 top-2"
              >
                ✕
              </button>
              <UserCreate
                data={[]}
                closeModal={toggleCreateModal}
                onSubmitFormUser={() => {}}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default User;
