import PropTypes from 'prop-types';

const InstrumentEdit= () => {
    return(

 <form>
    <label>Code</label>
    <input type="text"
    className='form-input'
    />
    <label>Pupitre</label>
     <input type="text"
    className='form-input'
    />
    <label>Observations</label>
     <input type="text"
    className='form-input'
    />
    <label>Tirant</label>
     <input type="text"
    className='form-input'
    />
    <label>Profondeur</label>
     <input type="text"
    className='form-input'
    />
    <label>Poids</label>
     <input type="text"
    className='form-input'
    />
    <fieldset>
        <legend>Sticker</legend>
     <div>
      <input type="radio" id='sticker-yes' name="yes" value="sticker"/>
      <label >Oui</label>
      <input type="radio" id='sticker-no' name="no" value="sticker" />
      <label  >Non</label>
    </div>
    </fieldset>
{/* Validate form */}

    <button type='submit'>Valider</button>
 </form>
)}

export default InstrumentEdit;