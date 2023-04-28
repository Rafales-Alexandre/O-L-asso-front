import React,{ useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserSuit } from '../../../actions/userActions';


function UserView(){
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.loggedInUser.user.id)
    const userSuits = useSelector((state) => state.user.userSuits)

    console.log(userSuits)
    useEffect(() => {
        dispatch(fetchUserSuit(userId))
    },[dispatch, userSuits])

    return (
        <div className="">
        <h2 className="text-3xl font-bold">Vos objets</h2>
        {userSuits.map((userSuit) => (
        <div className="card md:card-side m-4 p-4 bg-base-100 shadow-md" key={userSuit.id}>
            <figure className="">
              <img
                src="https://fakeimg.pl/300x300/?text=Suit"
                alt="Aperçu"
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{userSuit.label}</h2>
              <p className="first-letter:capitalize">
                {userSuit.observation}
              </p>
            </div>
        </div>
      ))}
      {userSuits.map((userSuit) => (
        <div className="card md:card-side m-4 p-4 bg-base-100 shadow-md" key={userSuit.id}>
            <figure className="">
              <img
                src="https://fakeimg.pl/300x300/?text=Suit"
                alt="Aperçu"
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{userSuit.label}</h2>
              <p className="first-letter:capitalize">
                {userSuit.observation}
              </p>
            </div>
        </div>
      ))}   
      </div>
    );
    
}


export default UserView;