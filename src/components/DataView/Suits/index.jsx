import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuits } from "../../../actions/userActions";

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
    <div>
      <h2 className="ml-4 text-xl md:text-2xl font-bold">
        <i className="fa-solid fa-user-tie fa-xs mr-2" />
        Costumes
      </h2>
      {suitData.map((u) => (
        <div
          className="card md:card-side m-4 p-4 bg-base-100 shadow-md"
          key={u.id}
        >
          <div
            onClick={() => toggleCollapse(u.id)}
            className=""
          >
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
    </div>
  );
}

export default Suits;
