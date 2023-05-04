/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faTrashCan, faPenToSquare, faMask, faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchSuits, deleteSuit } from '../../../actions/suitActions';
import SuitForm from '../../Create/SuitForm';
import Button from '../../Form/Button';



function Suits() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(null);
  const [suitData, setSuitData] = useState([]);
  const suits = useSelector((state) => state.suit.suits);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const userRole = useSelector((state) => state.user.loggedInUser.user.role);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletedCards, setDeletedCards] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [SuitIdToDelete, setSuitToDelete] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSuits = suitData.filter((suit) =>
    `${suit.label}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (userRole !== 'board' && userRole !== 'admin') {
      navigate('/ErrorClient');
    }
  }, [userRole, navigate]);

  useEffect(() => {
    dispatch(fetchSuits());
  }, [dispatch]);

  useEffect(() => {
    if (suits) {
      setSuitData(suits);
    }
  }, [suits]);

  const toggleCollapse = (id) => {
    if (collapse === id) {
      setCollapse(null);
    } else {
      setCollapse(id);
    }
  };
  const toggleModal = (suit) => {
    setSelectedUser(suit);
    setShowModal(!showModal);
  };
  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };
  const handleDelete = async (suitId) => {
    try {
      await dispatch(deleteSuit(suitId));
      setSuitData(suitData.filter((suit) => suit.id !== suitId));
    } catch (error) {
      /* console.error('Error deleting user:', error); */
    }
  };
  const HandleShowConfirmModal = (suitId) => {
    setSuitToDelete(suitId);
    setShowConfirmModal(true);
  }
  const handleDeleteAnimation = (suitId) => {
    setDeletedCards((prevState) => ({ ...prevState, [suitId]: true }));
    handleDelete(suitId);
  };
  const handleConfirmDelete = () => {
    handleDeleteAnimation(SuitIdToDelete);
    setShowConfirmModal(false);
  }
  return (
    <div className='bg-base-300 h-full'>
      <h2 className="ml-4 text-xl md:text-2xl font-bold ">
      <FontAwesomeIcon icon={faMask} size="sm"/>
        Costumes
      </h2>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <input
          type="text"
          placeholder="Recherche..."
          className="input input-bordered mb-4"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button onClick={() => toggleCreateModal()}>Ajouter un Costume</Button>
      </div>
      {filteredSuits.map((u) => (
        <div className="md:card md:card-side m-4 p-4 bg-base-100 shadow-md flex flex-col md:relative" key={u.id}>
          <div onClick={() => toggleCollapse(u.id)} onKeyDown={() => {}} 
          className="flex justify-center">
            <figure className="md:mr-4 md:w-30">
            <FontAwesomeIcon icon={faMask} size="2xl" className='md:h-15'  />
            <FontAwesomeIcon icon={faShirt} size="2xl" className='md:h-15'  />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg md:text-2xl font-bold">{u.label}</h2>
              <p className="normal-case first-letter:capitalize text-xs md:text-lg text-gray-600">
                {u.observation}
              </p>
            </div>
          </div>
          <div className='card-actions justify-end md:absolute md:right-20 md:flex-col'>
                <Button onClick={() => toggleModal(u)} className="hover:bg-sky-500">
                <FontAwesomeIcon icon={faPenToSquare} size="lg" className='md:h-6 md:mb-10' />
                </Button>
                <Button onClick={() => HandleShowConfirmModal(u.id)} className="hover:btn-warning">
                <FontAwesomeIcon icon={faTrashCan} size="lg" style={{color: "#e26569",}} className='md:h-6 ' /> 
                 </Button>
            </div>
          {collapse === u.id && (
            <div className="card-body mt-4">
              <div>
                <p>
                  <span className="font-medium">Genre: </span>
                </p>
                <p>
                  <span className="font-medium">Taille: </span>
                </p>
              </div>
            </div>
          )}
          
        </div>
      ))}
      {showModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showModal ? 'modal-open' : ''}`}>
            <div className="modal-box relative w-11/12 max-w-5xl">
            <Button onClick={() => {toggleModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <SuitForm data={[selectedUser]} isEditMode closeModal={toggleModal} onSubmitFormSuit={() => {}} />
            </div>
          </div>
        </>
      )}
      {showCreateModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showCreateModal ? 'modal-open' : ''}`}>
            <div className="modal-box relative w-11/12 max-w-5xl">
              <Button onClick={() => {toggleCreateModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <SuitForm data={[]} closeModal={toggleCreateModal} isEditMode={false} onSubmitFormSuit={() => {}} />
            </div>
          </div>
        </>
      )}
      {showConfirmModal && (
        <div className={`modal ${showConfirmModal ? 'modal-open' : ''}`}>
          <div className='modal-box flex flex-col gap-10 items-center'>
            <h3 className=''> Voulez vous vraiment supprimer ce costume?</h3>
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

export default Suits;
