/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare, faUserGroup,  } from '@fortawesome/free-solid-svg-icons';
import { fetchUsers, deleteUser } from '../../../actions/userActions';
import UserForm from '../../Create/UserForm';
import Button from '../../Form/Button';
import SearchBar from '../../SearchBar';


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
  const [deletedCards, setDeletedCards] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [UserIdToDelete, setUserIdToDelete] = useState(null);
 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };  
  const filteredUsers = userData.filter((user) =>
    `${user.firstname} ${user.lastname} ${user.nickname} ${user.role}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    if (userRole !== "board" && userRole !== "admin") {
      navigate("/ErrorClient");
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
  const HandleShowConfirmModal = (userId) => {
    setUserIdToDelete(userId);
    setShowConfirmModal(true);
  }
  const handleDeleteAnimation = (iuserId) => {
    setDeletedCards((prevState) => ({ ...prevState, [iuserId]: true }));
    handleDelete(iuserId);
  };
  const handleConfirmDelete = () => {
    handleDeleteAnimation(UserIdToDelete);
    setShowConfirmModal(false);
  }
  
  return (
    <div className="border-2 border-double bg-gradient-to-r from-orange-500 to-transparent rounded-md z-0 md:absolute md:right-20 md:w-3/5 w-full">
      <h2 className="ml-4 text-xl md:text-2xl font-bold">
      <FontAwesomeIcon icon={faUserGroup} size="sm"/>
      Adherents</h2>
      <SearchBar handleSearchChange={handleSearchChange} placeholder="Recherche..." />
      <div className='flex flex-col md:flex-row md:justify-between'>
        <Button onClick={() => toggleCreateModal()} >Ajouter un utilisateur</Button>
      </div>
      {filteredUsers.map((u) => (
        <div
        className="md:card md:card-side m-4 p-4 bg-base-100 shadow-md rounded-md flex flex-col md:relative"
          key={u.id}
        >
        
          <div className="flex-grow p-2">
            <div
              onClick={() => toggleCollapse(u.id)}
              onKeyDown={() => {}}
              className="flex md:justify-center"
            >
              <figure className=" md:mr-4 pr-2 ">
                <img
                  src={u.url_img}
                  alt="User"
                  className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2"
                />
              </figure>
              <div className="md:card-body">
                <h2 className="card-title md:text-2xl text-sm font-bold">
                  {u.firstname}
                  {u.lastname}({u.nickname})
                </h2>
                <h3 className="normal-case first-letter:capitalize text-xs md:text-lg text-gray-600">
                {u.role}
                </h3>
              </div>
            </div>
            <div className='card-actions justify-end md:absolute md:right-20 md:top-10 md:flex-col'>
            <Button onClick={() => {toggleModal(u)}} className="">
            <FontAwesomeIcon icon={faPenToSquare} size="lg" className='md:h-6 md:mb-10' />
          </Button>
          <Button onClick={() => HandleShowConfirmModal(u.id)} className="">
          <FontAwesomeIcon icon={faTrashCan} size="lg" style={{color: "#e26569",}} className='md:h-6 ' /> 
          </Button>
            </div>
          </div>
          {collapse === u.id && (
            <div className="card-body mt-4 md:text-sl text-sm">
              <div>
                <p>
                  Email: 
                  {u.email}
                </p>
                <p>
                  Téléphone: 
                  {u.phone}
                </p>
                <p>
                  Adresse: 
                  {u.address}
                </p>
                <p>
                  Adresse complémentaire: 
                  {u.address_2}
                </p>
                <p>
                  Code postal: 
                  {u.zip_code}
                </p>
                <p>
                  Ville: 
                  {u.city}
                </p>
                <p>
                  Taille haut: 
                  {u.top_size}
                </p>
                <p>
                  Taille bas: 
                  {u.bottom_size}
                </p>
                <p>
                  Côtisation: 
                  {u.subscription}
                </p>
                <p>
                  Caution: 
                  {u.deposit}
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
            <div className="modal-box relative w-11/12 max-w-5xl z-10">
              <Button onClick={() => {toggleModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <UserForm mode="edit" selectedUser={selectedUser} closeModal={toggleModal} onSubmitFormUser={() => {}} />
            </div>
          </div>
        </>
      )}
      {showCreateModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showCreateModal ? "modal-open" : ""}`}>
            <div className="modal-box relative w-11/12 max-w-5xl z-10">
              <Button onClick={() => {toggleCreateModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <UserForm data={[]} mode="create" closeModal={toggleCreateModal} onSubmitFormUser={() => {}} />
            </div>
          </div>
        </>
      )}
      {showConfirmModal && (
        <div className={`modal ${showConfirmModal ? 'modal-open' : ''}`}>
          <div className='modal-box flex flex-col gap-10 items-center'>
            <h3 className=''> Voulez vous vraiment supprimer ce Membre?</h3>
            <div className='modal-actions flex justify-center gap-10'>
                <Button onClick={handleConfirmDelete} className="btn btn-warning">Oui</Button>
                <Button onClick={()=> setShowConfirmModal(false)} className="btn btn-secondary">Non</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;