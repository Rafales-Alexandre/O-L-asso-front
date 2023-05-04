/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { fetchUsers, deleteUser } from '../../../actions/userActions';
import UserForm from '../../Create/UserForm';
import Button from '../../Form/Button';

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(null);
  const [userData, setUserData] = useState([]);
  const users = useSelector((state) => state.user.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const userRole = useSelector((state) => state.user.loggedInUser.user.role);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredUsers = userData.filter((user) =>
    `${user.firstname} ${user.lastname} ${user.nickname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
      setUserData(users);
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
  const handleDelete = async (userId) => {
    try {
      await dispatch(deleteUser(userId));
      setUserData(userData.filter((user) => user.id !== userId));
    } catch (error) {
      /* console.error('Error deleting user:', error); */
    }
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold">Adherents</h2>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <input
          type="text"
          placeholder="Recherche..."
          className="input input-bordered mb-4"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button onClick={() => toggleCreateModal()} >Ajouter un utizlisateur</Button>
      </div>
      {filteredUsers.map((u) => (
        <div
        className="md:card md:card-side m-4 p-4 bg-base-100 shadow-md flex flex-col md:relative"
          key={u.id}
        >
          <div className="flex-grow">
            <div
              onClick={() => toggleCollapse(u.id)}
              onKeyDown={() => {}}
              className="flex md:justify-center"
            >
              <figure className=" md:mr-4 pr-2 ">
                <img
                  src={u.url_img}
                  alt="User"
                  className="w-24 h-24 md:w-36 md:h-36 rounded-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">
                  {u.firstname}
                  {u.lastname}({u.nickname})
                </h2>
              </div>
            </div>
            <div className='card-actions justify-end md:absolute md:right-20 md:top-10 md:flex-col'>
            <Button onClick={() => {toggleModal(u)}} className="hover:bg-sky-500">
            <FontAwesomeIcon icon={faPenToSquare} size="lg" className='md:h-6 md:mb-10' />
          </Button>
          <Button onClick={() => handleDeleteAnimation(u.id)} className="hover:btn-warning">
          <FontAwesomeIcon icon={faTrashCan} size="lg" style={{color: "#e26569",}} className='md:h-6 ' /> 
          </Button>
            </div>
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
              <Button onClick={() => {toggleModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <UserForm data={[selectedUser]} mode="edit" closeModal={toggleModal} onSubmitFormUser={() => {}} />
            </div>
          </div>
        </>
      )}
      {showCreateModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showCreateModal ? "modal-open" : ""}`}>
            <div className="modal-box relative w-11/12 max-w-5xl">
              <Button onClick={() => {toggleCreateModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <UserForm data={[]} mode="create" closeModal={toggleCreateModal} onSubmitFormUser={() => {}} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default User;
