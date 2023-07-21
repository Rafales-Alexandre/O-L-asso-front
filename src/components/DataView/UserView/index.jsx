import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { faMask, faShirt, faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import { fetchUserSuit, fetchUserInstrument } from '../../../actions/userActions';

function UserView() {
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(null);
  const userId = useSelector((state) => state.user.loggedInUser.user.id);
  const userSuits = useSelector((state) => state.user.userSuits);
  const userInstruments = useSelector((state) => state.user.userInstruments);
  console.log(userInstruments);
  
  useEffect(() => {
    dispatch(fetchUserSuit(userId));
    dispatch(fetchUserInstrument(userId));
  }, [dispatch, userSuits, userInstruments, userId]);
    
  const toggleCollapse = (id) => {
    setCollapse(collapse === id ? null : id);
  };

  return (
    <div className="border-2 border-double bg-gradient-to-r from-orange-500 to-transparent rounded-md z-0 md:absolute md:right-20 md:w-3/5 w-full">
      <h2 className="text-3xl font-bold text-white font-outline-1">Vos objets</h2>
      {userSuits.map((userSuit) => (
        <div className="m-4 flex flex-col rounded-2xl  shadow-md md:relative bg-white-to-orange">
          <div
          className="m-2 flex flex-col rounded-2xl bg-base-100 p-4 shadow-md md:card md:card-side md:relative"
          key={uuidv4()}
          style={{ backgroundImage: `url(${userSuit.url_img})` }}
        >
          <div onClick={() => toggleCollapse(userSuit.id)} onKeyDown={() => {}} className="flex justify-center ">
            <figure className="md:mr-4 md:w-30">
              <FontAwesomeIcon icon={faMask} size="2xl" className='md:h-15 '  />
              <FontAwesomeIcon icon={faShirt} size="2xl" className='md:h-15'  />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg md:text-2xl font-bold">{userSuit.label}</h2>
              <p className="normal-case first-letter:capitalize text-xs md:text-lg text-gray-600">
                {userSuit.observation}
              </p>
            </div>
          </div>
          {collapse === userSuit.id && (
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
        </div>
      ))}
      {userInstruments.map((userInstrument) => (
        <div className="m-4 flex flex-col rounded-2xl  shadow-md md:relative bg-white-to-orange">
          <div
          className="m-2 flex flex-col rounded-2xl bg-base-100 p-4 shadow-md md:card md:card-side md:relative"
          key={uuidv4()}
          style={{ backgroundImage: `url(${userInstrument.url_img})` }}
        >
          <div onClick={() => toggleCollapse(userInstrument.id)} onKeyDown={() => {}} className="flex justify-center">
            <figure className="md:mr-4 md:w-30">
              <FontAwesomeIcon icon={faDrum} size="2xl" className='md:h-15'  />
              <FontAwesomeIcon icon={faGuitar} size="2xl" className='md:h-15' />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg md:text-2xl font-bold">{userInstrument.code}</h2>
              <p className="normal-case first-letter:capitalize text-xs md:text-lg text-gray-600">
                {userInstrument.observation}
              </p>
            </div>
          </div>
          {collapse === userInstrument.id && (
            <div className="card-body mt-4">
              <div>
                <p>
                  <span className="font-medium">Pupitre: </span>
                  {userInstrument.pupitre}
                </p>
                <p>
                  <span className="font-medium">Tirant: </span>
                  {userInstrument.rods}
                </p>
                <p>
                  <span className="font-medium">Profondeur: </span>
                  {userInstrument.depth}
                </p>
                <p>
                  <span className="font-medium">Poids: </span>
                  {userInstrument.weight}
                </p>
              </div>
            </div>
          )}
        </div>
        </div>
      ))}
    </div>
  );
}

export default UserView;
