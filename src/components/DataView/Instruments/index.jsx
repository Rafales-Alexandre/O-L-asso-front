import { useState } from "react";

const Instruments = ({ code, pupitre, observation, depth, rods, weight, sticker }) => {
    const [collapse, setCollapse] = useState(false);
  const toggleCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  
  return (
    <div className="card card-side bg-base-100 shadow-md m-4">
        <figure className="pl-8"><img src="https://fakeimg.pl/100x100/?text=Instrument" alt="Aperçu"/></figure>
        <div className="card-body">
            <h2 className="card-title">{code}</h2>
            <p className="normal-case first-letter:capitalize">{ observation }</p>
                    {/* Collapsible content */}
        <div className={`overflow-hidden transition-all duration-500 ${
          collapse ? 'h-auto' : 'h-0'
        }`}>
          <div className="collapse-content">
            <p><span className="font-medium">Pupitre: </span>{pupitre}</p>
            <p><span className="font-medium">Tirant: </span>{rods}</p>
            <p><span className="font-medium">Profondeur: </span>{depth}</p>
            <p><span className="font-medium">Poids: </span>{weight}</p>
            <p><span className="font-medium">Sticker: </span>{sticker}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={toggleCollapse}
            className={`btn btn-primary ${collapse ? 'bg-accent' : ''}`}
          >
            {collapse ? "Moins" : "Plus"}
          </button>
        </div>
        </div>
    </div>
  )
}

export default Instruments;
