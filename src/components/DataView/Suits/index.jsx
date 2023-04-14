import { useState } from "react";

const Suits = ({ label, observation }) => {
  const [collapse, setCollapse] = useState(false);
    const toggleCollapse = (e) => {
        e.preventDefault();
    setCollapse(!collapse);
  };

  return (
    <div className="card card-side bg-base-100 shadow-md m-4">
      <figure className="pl-8">
        <img src="https://fakeimg.pl/100x100/?text=Suit" alt="Aperçu" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{label}</h2>
              <p>{observation}</p>
              {/* Collapsible content */}
        <div className={`overflow-hidden transition-all duration-500 ${
          collapse ? 'h-auto' : 'h-0'
        }`}>
          <div className="collapse-content">
            <p>This content is collapsible</p>
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
  );
};

export default Suits;
