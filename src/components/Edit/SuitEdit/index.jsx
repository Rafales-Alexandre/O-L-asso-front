import PropTypes from 'prop-types';

const SuitEdit= ({OnSubmitFormSuit}) => {
    return(
    <div>
        <form onSubmit={OnSubmitFormSuit}>
        <label>Label</label>
    <input type="text"
    className='form-input'
    />
        <label>Genre</label>
     <input type="text"
    className='form-input'
    />
    <label>Observations</label>
     <textarea rows="5"
    className='form-input'
    />
    <label>Taille Haut</label>
     <input type="text"
    className='form-input'
    />
    <label>Taille Bas</label>
     <input type="text"
    className='form-input'
    />
    
    <fieldset>
        <legend>Sticker</legend>
     <div>
      <input type="radio" id='sticker-yes' name="sticker" value="sticker-yes" />
      <label >Oui</label>
      <input type="radio" id='sticker-no' name="sticker" value="sticker-no" />
      <label >Non</label>
    </div>
    </fieldset>
{/* Validate form */}

<button type='submit'>Valider</button>

 </form>
<table>
    <thead>
    <tr>
        <td className='border'>Taille</td>
        <td className='border'>Quantité</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td className='border'>XS</td>
        <td className='border'>8</td>
    </tr>
    <tr>
        <td className='border'>S</td>
        <td className='border'>7</td>
    </tr>
    <tr>
        <td className='border'>M</td>
        <td className='border'>6</td>
    </tr>
    <tr>
        <td className='border'>L</td>
        <td className='border'>3</td>
    </tr>
    <tr>
        <td className='border'>XL</td>
        <td className='border'>6</td>
    </tr>
    <tr>
        <td className='border'>XXL</td>
        <td className='border'>5</td>
    </tr>
    <tr>
        <td className='border'>XXXL</td>
        <td className='border'>8</td>
    </tr>
    </tbody>
</table>



</div>
)}

export default SuitEdit