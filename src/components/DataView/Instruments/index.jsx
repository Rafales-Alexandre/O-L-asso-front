import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstruments } from "../../../actions/instrumentActions";
import InstrumentEdit from "../../Edit/InstrumentEdit";
import InstrumentCreate from '../../Create/InstrumentCreate';

function Instruments() {
  const [collapse, setCollapse] = useState(null);
  const dispatch = useDispatch();
  const [instruData, setInstruData] = useState([]);
  const instruments = useSelector((state) => state.user.instruments.getAllInstruments);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    dispatch(fetchInstruments());
  }, [dispatch]);

  useEffect(() => {
    if (instruments) {
      setInstruData(Object.values(instruments));
    }
  }, [instruments]);

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
      <h2 className="text-3xl font-bold">Instruments</h2>
      {instruData.map((u) => {
        return (
          <div className="card card-side bg-base-100 shadow-md m-4 p-4 flex flex-col relative" key={u.id}>
            <div onClick={() => toggleCollapse(u.id)} className="flex items-center">
              <figure className="mr-4">
                <img
                  src="https://fakeimg.pl/100x100/?text=Instrument"
                  alt="Aperçu"
                  className="rounded-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{u.code}</h2>
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
                  <p>
                    <span className="font-medium">Sticker: </span>
                    {u.sticker}
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
            <InstrumentEdit data={[selectedUser]} onSubmitFormUser={() => {}} />
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
            <InstruCreate data={[]} onSubmitFormUser={() => {}} />
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Instruments;
