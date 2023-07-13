/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare, faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons';
import { fetchInstruments, deleteInstru, } from '../../../actions/instrumentActions';
import Button from '../../Form/Button';
import InstrumentForm from '../../Create/InstrumentForm';

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
  const [animatedCards, setAnimatedCards] = useState({});
  const [deletedCards, setDeletedCards] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [InstruIdToDelete, setInstruIdToDelete] = useState(null)


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

  useEffect(() => {
    filteredInstruments.forEach((u, index) => {
      const timer = setTimeout(() => {
        setAnimatedCards((prevState) => ({ ...prevState, [u.id]: true }));
      }, 50 * (index + 1));

      return () => clearTimeout(timer);
    });
  }, [filteredInstruments]);
  
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
  
  const HandleShowConfirmModal = (instrmentId) => {
    setInstruIdToDelete(instrmentId);
    setShowConfirmModal(true);
  }
  const handleDeleteAnimation = (instrumentId) => {
    setDeletedCards((prevState) => ({ ...prevState, [instrumentId]: true }));
    handleDelete(instrumentId);
  };
  const handleConfirmDelete = () => {
    handleDeleteAnimation(InstruIdToDelete);
    setShowConfirmModal(false);
  }
 
  return (
    <div className="border-2 border-double bg-gradient-to-r from-orange-500 to-transparent rounded-md z-0 md:absolute md:right-20 md:w-3/5 w-full">
      <h2 className="ml-4 text-xl md:text-2xl font-bold">
      <FontAwesomeIcon icon={faGuitar} size="sm"/>
      Instruments</h2>
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
        <div className="md:card md:card-side m-4 p-4 bg-base-100 shadow-md flex flex-col md:relative" key={u.id}>
          <div onClick={() => toggleCollapse(u.id)} onKeyDown={() => {}} className="flex justify-center">
            <figure className="md:mr-4 md:w-30">
            <FontAwesomeIcon icon={faDrum} size="2xl" className='md:h-15'  />
            <FontAwesomeIcon icon={faGuitar} size="2xl" className='md:h-15' />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg md:text-2xl font-bold">{u.code}</h2>
              <p className="normal-case first-letter:capitalize text-xs md:text-lg text-gray-600">
                {u.observation}
              </p>
            </div>
          </div>
          <div className='card-actions justify-end md:absolute md:right-20 md:flex-col'>
                <Button onClick={() => toggleModal(u)} className="">
                <FontAwesomeIcon icon={faPenToSquare} size="lg" className='md:h-6 md:mb-10' />
                </Button>
                <Button onClick={() => HandleShowConfirmModal(u.id)} className="">
                <FontAwesomeIcon icon={faTrashCan} size="lg" style={{color: "#e26569",}} className='md:h-6 md:mb-10' /> 
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
                <span className="font-medium">Tirant: </span>
                {u.rods}
              </p>
              <p>
                <span className="font-medium">Profondeur: </span>
                {u.depth}
              </p>
              <p>
                <span className="font-medium">Poids: </span>
                {u.weight}
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
      {showConfirmModal && (
        <div className={`modal ${showConfirmModal ? 'modal-open' : ''}`}>
          <div className='modal-box flex flex-col gap-10 items-center'>
            <h3 className=''> Voulez vous vraiment supprimer cette instrument?</h3>
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

export default Instruments;
