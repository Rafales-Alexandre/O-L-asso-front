/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchInstruments, deleteInstru } from '../../../actions/instrumentActions';
import Button from '../../Form/Button';
import InstrumentForm from '../../Create/InstrumentForm';

import { faTrashCan, faPenToSquare, faDrum, faGuitar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Instruments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(null);
  const [instruData, setInstruData] = useState([]);
  const instruments = useSelector((state) => state.instrument.instruments);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const userRole = useSelector((state) => state.user.loggedInUser.user.role);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredInstruments = instruData.filter((instru) =>
    `${instru.pupitre}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (userRole !== 'board' && userRole !== 'admin') {
      navigate('/ErrorClient');
    }
  }, [userRole, navigate]);

  useEffect(() => {
    dispatch(fetchInstruments());
  }, [dispatch]);

  useEffect(() => {
    if (instruments) {
      setInstruData(instruments);
    }
  }, [instruments]);

  const toggleCollapse = (id) => {
    if (collapse === id) {
      setCollapse(null);
    } else {
      setCollapse(id);
    }
  };
  const toggleModal = (instru) => {
    setSelectedInstrument(instru);
    setShowModal(!showModal);
  };
  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };
  const handleDelete = async (instruId) => {
    try {
      await dispatch(deleteInstru(instruId));
      setInstruData(instruData.filter((instru) => instru.id !== instruId));
    } catch (error) {
      /* console.error('Error deleting user:', error); */
    }
  };

  return (
    <div className="h-full">
      <h2 className="ml-4 text-2xl md:text-3xl font-bold">Instruments</h2>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <input
          type="text"
          placeholder="Recherche..."
          className="input input-bordered mb-4"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button onClick={() => toggleCreateModal()}>Ajouter un instrument</Button>
      </div>
      {filteredInstruments.map((u) => (
        <div className="md:card md:card-side bg-base-100 shadow-md m-4 p-4 flex flex-col md:relative" key={u.id}>
          <div onClick={() => toggleCollapse(u.id)} onKeyDown={() => {}} className="flex justify-center">
            <figure className="md:mr-4">
            <FontAwesomeIcon icon={faDrum} size="2xl"  />
            <FontAwesomeIcon icon={faGuitar} size="2xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg md:text-xl font-bold">{u.code}</h2>
              <p className="normal-case first-letter:capitalize text-xs md:text-lg text-gray-600">
                {u.observation}
              </p>
            </div>
          </div>
          <div className='card-actions justify-end'>
                <Button onClick={() => toggleModal(u)} className=" hover:bg-sky-500">
                <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </Button>
                <Button onClick={() => handleDelete(u.id)} className="hover:btn-warning">
                <FontAwesomeIcon icon={faTrashCan} size="lg" style={{color: "#e26569",}} /> 
                </Button>
            </div>
          {collapse === u.id && (
          <div className="card-body mt-4">
            <div>
              <p>
                <span className="font-medium">Pupitre: </span>
                {u.pupitre}
              </p>
              <p>
                <span className="font-medium">Observation: </span>
                {u.observation}
              </p>
              <p>
                <span className="font-medium">Observation: </span>
                {u.observation}
              </p>
            </div>
          </div>
          )}
        </div>
      ))}
      {showModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div
            className={`modal  ${showModal ? 'modal-open' : ''}`}
          >
            <div className="modal-box relative w-11/12 max-w-5xl">
              <Button onClick={() => {toggleModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <InstrumentForm data={[selectedInstrument]} isEditMode closeModal={toggleModal} onSubmitFormUser={() => dispatch(fetchInstruments())} />
            </div>
          </div>
        </>
      )}
      {showCreateModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div
            className={`modal  ${showCreateModal ? 'modal-open' : ''}`}
          >
            <div className="modal-box relative w-11/12 max-w-5xl">
              <Button onClick={() => {toggleCreateModal();}} className="btn-sm btn-circle btn absolute right-2 top-2">
                ✕
              </Button>
              <InstrumentForm data={[]} mode="create" isEditMode={false}closeModal={toggleCreateModal} onSubmitFormUser={() => {}} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Instruments;
