import PropTypes from "prop-types";

const InstrumentEdit = ({ OnSubmitFormInstrument }) => {
  return (
    <form onSubmit={OnSubmitFormInstrument}>
      <label className="label">Code</label>
      <input type="text" className="form-input" />
      <label className="label">Pupitre</label>
      <input type="text" className="form-input" />
      <label className="label">Observations</label>
      <textarea rows="5" className="form-input" />
      <label className="label">Tirant</label>
      <input type="text" className="form-input" />
      <label className="label">Profondeur</label>
      <input type="text" className="form-input" />
      <label className="label">Poids</label>
      <input type="text" className="form-input" />
      <fieldset>
        <legend>Sticker</legend>
        <div>
          <input type="radio" name="sticker" value="sticker-yes" />
          <label>Oui</label>
          <input type="radio" name="sticker" value="sticker-no" />
          <label>Non</label>
        </div>
      </fieldset>
      {/* Validate form */}

      <button type="submit">Valider</button>
    </form>
  );
};

export default InstrumentEdit;
