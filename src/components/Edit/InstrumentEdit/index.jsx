import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const InstrumentEdit= ({OnSubmitFormInstrument}) => {
    return(

 <form onSubmit={OnSubmitFormInstrument}>
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
      <input type="radio" name="sticker" value="sticker-yes"/>
      <label >Oui</label>
      <input type="radio" name="sticker" value="sticker-no" />
      <label  >Non</label>
    </div>
    </fieldset>
{/* Validate form */}

<button type='submit'><Link to='/member/suits'>Valider</Link></button>
 </form>
)}

export default InstrumentEdit;