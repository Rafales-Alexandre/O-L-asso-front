/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSuits } from '../../../actions/suitActions';
import SuitEdit from '../../Edit/SuitEdit';
import SuitCreate from '../../Create/SuitCreate';

function Suits() {
  const [collapse, setCollapse] = useState(null);
  const dispatch = useDispatch();
  const [suitData, setsuitData] = useState([]);
  const suits = useSelector((state) => state.user.suits.getAllSuits);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const userRole = useSelector((state) => state.user.loggedInUser.role);
  const navigate = useNavigate();

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
      setsuitData(Object.values(suits));
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

  return (
    <div>
      <h2 className="ml-4 text-xl md:text-2xl font-bold">
        <i className="fa-solid fa-user-tie fa-xs mr-2" />
        Costumes
      </h2>
      <button type="submit" className="btn" onClick={() => toggleCreateModal()}>CREATE SUIT</button>
      {suitData.map((u) => (
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
          <button type="submit" onClick={() => toggleModal(u)} className="btn btn-primary mt-4 top-5 right-4 absolute">
            Edition
          </button>
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
          <div className="card-actions justify-end">
          <button
            onClick={() => toggleCollapse(u.id)}
            className="btn-primary btn"
          >
            Edition
          </button>
          </div>
          
        </div>
      ))}
      {showModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className={`modal  ${showModal ? 'modal-open' : ''}`}>
            <div className="modal-box relative w-11/12 max-w-5xl">
              <button type="submit" onClick={() => toggleModal()} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
              <SuitEdit data={[selectedUser]} onSubmitFormUser={() => {}} />
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
              <SuitCreate data={[]} onSubmitFormUser={() => {}} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Suits;
