import React,{ useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { faMask, faShirt, faDrum, faGuitar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid';
import { fetchUserSuit, fetchUserInstrument } from '../../../actions/userActions';

function UserView(){
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.loggedInUser.user.id);
    const userSuits = useSelector((state) => state.user.userSuits);
    const userInstruments = useSelector((state) => state.user.userInstruments);
    useEffect(() => {
        dispatch(fetchUserSuit(userId));
        dispatch(fetchUserInstrument(userId));
    },[dispatch, userSuits, userInstruments, userId])

    return (
        <div className="">
        <h2 className="text-3xl font-bold">Vos objets</h2>
        {userSuits.map((userSuit) => (
        <div className="md:card md:card-side m-4 p-4 bg-base-100 shadow-md 4 md:w-50" key={uuidv4()}>
            <figure className="">
            <FontAwesomeIcon icon={faMask} size="2xl" className='md:h-15'  />
            <FontAwesomeIcon icon={faShirt} size="2xl" className='md:h-15'  />
            </figure>
            <div className="card-body">
              <h2 className="card-title  md:2xl">{userSuit.label}</h2>
              <p className="normal-case first-letter:capitalize text-xs md:text-xl text-gray-600">
                {userSuit.observation}
              </p>
            </div>
        </div>
      ))}
      {userInstruments.map((userInstrument) => (
        <div className="md:card md:card-side md:relative m-4 mt-10 flex flex-col p-4 shadow-md md:w-50" key={uuidv4()}>
            <figure className="">
            <FontAwesomeIcon icon={faDrum} size="2xl" className='md:h-15'  />
            <FontAwesomeIcon icon={faGuitar} size="2xl" className='md:h-15'  />
            </figure>
            <div className="card-body">
              <h2 className="card-title  md:2xl">{userInstrument.code}</h2>
              <p className="normal-case first-letter:capitalize text-xs md:text-xl text-gray-600">
                {userInstrument.observation}
              </p>
            </div>
        </div>
      ))}
      </div>
    );
    
}

export default UserView;
