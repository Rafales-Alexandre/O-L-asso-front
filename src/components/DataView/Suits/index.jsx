/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSuits, deleteSuit } from '../../../actions/suitActions';
import SuitForm from '../../Create/SuitForm';

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSuits = suitData.filter((suit) =>
    `${suit.label}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (userRole !== 'board' && userRole !== 'admin') {
      navigate('/');
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

  return (
    <div className='h-full'>
      <h2 className="ml-4 text-xl md:text-2xl font-bold">
        <i className="fa-solid fa-user-tie fa-xs mr-2" />
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
        <button type="submit" className="btn hover:bg-green-500 " onClick={() => toggleCreateModal()}>Ajouter un Costume</button>
      </div>
      {filteredSuits.map((u) => (
        <div className="card md:card-side m-4 p-4 bg-base-100 shadow-md" key={u.id}>
          <div onClick={() => toggleCollapse(u.id)} onKeyDown={() => {}} className="flex items-center">
            <figure className="">
              <img
                src="https://fakeimg.pl/300x300/?text=Suit"
                alt="Aperçu"
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{u.label}</h2>
              <p className="first-letter:capitalize">
                {u.observation}
              </p>
            </div>
          </div>
          <div className='flex flex-col items-end'>
              <button type="submit" onClick={() => toggleModal(u)} className="btn mt-4 absolute top-0 right-4 hover:bg-sky-500">
                Edition
              </button>
              <button type="submit" className="btn mt-4 top-10 right-4 hover:btn-warning" onClick={() => handleDelete(u.id)}>
                suppression
              </button>
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
              <button type="submit" onClick={() => toggleModal()} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
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
              <button type="submit" onClick={() => toggleCreateModal()} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
              <SuitForm data={[]} closeModal={toggleCreateModal} isEditMode={false} onSubmitFormSuit={() => {}} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Suits;
