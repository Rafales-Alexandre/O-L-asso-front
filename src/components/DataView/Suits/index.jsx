import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuits } from "../../../actions/suitActions";
import SuitEdit from '../../Edit/SuitEdit';
import SuitCreate from '../../Create/SuitCreate'
import Button from "../../Form/Button";

function Suits() {
  const [collapse, setCollapse] = useState(null);
  const dispatch = useDispatch();
  const [suitData, setsuitData] = useState([]);
  const suits = useSelector((state) => state.user.suits.getAllSuits);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

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
  const toggleModal = (user) => {
    setSelectedUser(user);
    setShowModal(!showModal);
  };
  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  return (
    <div className="bg-base-300">
      <h2 className="text-3xl font-bold">Costumes</h2>
      <button className="btn">CREATE SUIT</button>
      {suitData.map((u) => {
        return (
          <div className="card card-side bg-base-100 shadow-md m-4 p-4 flex flex-col relative" key={u.id}>
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
                <p className="normal-case first-letter:capitalize text-gray-600">
                  {u.observation}
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleCollapse(u.id)}
              className={`btn btn-primary mt-4 top-5 right-4 absolute`}
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
        );
      })}
      {showModal && (
        <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle"/>
        <div
          className={`modal  ${showModal ? "modal-open" : ""}`}
        >
          <div className="modal-box relative w-11/12 max-w-5xl">
            <button onClick={()=>{toggleModal()}} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
            <SuitEdit data={[selectedUser]} onSubmitFormUser={() => {}} />
          </div>
        </div>
        </>
      )}
      {showCreateModal && (
        <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle"/>
        <div
          className={`modal  ${showCreateModal ? "modal-open" : ""}`}
        >
          <div className="modal-box relative w-11/12 max-w-5xl">
            <button onClick={()=>{toggleCreateModal()}} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
            <SuitCreate data={[]} onSubmitFormUser={() => {}} />
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Suits;
