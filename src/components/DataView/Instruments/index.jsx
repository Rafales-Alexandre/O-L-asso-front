import { useState } from "react";

function Instruments({ data }){
    const [collapse, setCollapse] = useState(false);
  const toggleCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);}
  return (
    <>
    { data.map((u)=>{
    return (
      
        <div className="card card-side bg-base-100 shadow-md m-4">
          <figure className="pl-8"><img src="https://fakeimg.pl/100x100/?text=Instrument" alt="Aperçu"/></figure>
          <div className="card-body">
              <h2 className="card-title">{u.code}</h2>
              <p className="normal-case first-letter:capitalize">{ u.observation }</p>
                      {/* Collapsible content */}
          <div className={`overflow-hidden transition-all duration-500 ${
            collapse ? 'h-auto' : 'h-0'
          }`}>
            <div className="collapse-content">
              <p><span className="font-medium">Pupitre: </span>{u.pupitre}</p>
              <p><span className="font-medium">Tirant: </span>{u.rods}</p>
              <p><span className="font-medium">Profondeur: </span>{u.depth}</p>
              <p><span className="font-medium">Poids: </span>{u.weight}</p>
              <p><span className="font-medium">Sticker: </span>{u.sticker}</p>
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
    )})}
    </>
    
  )
}
export default Instruments;