import React,{ useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { faMask, faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className="md:card md:card-side m-4 p-4 bg-base-100 shadow-md 4 md:w-50" key={userSuit.id}>
            <figure className="">
            <FontAwesomeIcon icon={faMask} size="2xl" className='md:h-15'  />
            <FontAwesomeIcon icon={faShirt} size="2xl" className='md:h-15'  />
            </figure>
            <div className="card-body">
              <h2 className="card-title  md:2xl">{userSuit.label}</h2>
              <p className="first-letter:capitalize">
                {userSuit.observation}
              </p>
            </div>
        </div>
      ))}
      {/* {userInstruments.map((userInstrument) => (
        <div className="card md:card-side m-4 p-4 bg-base-100 shadow-md" key={userInstrument.id}>
            <figure className="">
              <img
                src="https://fakeimg.pl/300x300/?text=Suit"
                alt="Aperçu"
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{userInstrument.pupitre}</h2>
            </div>
        </div>
      ))}   */} 
      </div>
    );
    
}


export default UserView;