import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuits } from '../../../actions/userActions';

function Suits() {
  const [collapse, setCollapse] = useState(null);
  const dispatch = useDispatch();
  const [suitData, setsuitData] = useState([]);
  const suits = useSelector((state) => state.user.suits.getAllSuits);

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

  return (
    <div className="bg-base-200">
      <h2 className="text-3xl font-bold">
        <i className="fa-solid fa-user-tie fa-xs mr-3" />
        Costumes
      </h2>
      {suitData.map((u) => (
        <div
          className="card card-side relative m-4 flex flex-col bg-base-100 p-4 shadow-md"
          key={u.id}
        >
          <div onClick={() => toggleCollapse(u.id)} className="flex items-center">
            <figure className="mr-4">
              <img
                src="https://fakeimg.pl/100x100/?text=Suit"
                alt="Aperçu"
                className="rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{u.label}</h2>
              <p className="normal-case text-gray-600 first-letter:capitalize">{u.observation}</p>
            </div>
          </div>
          <button
            onClick={() => toggleCollapse(u.id)}
            className="btn-primary btn absolute right-4 top-5 mt-4"
          >
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
        </div>
      ))}
    </div>
  );
}

export default Suits;
