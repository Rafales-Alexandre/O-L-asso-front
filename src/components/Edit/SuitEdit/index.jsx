import PropTypes from 'prop-types';

const SuitEdit= () => {
    return(
    <div>
        <form>
        <label>Label</label>
    <input type="text"
    className='form-input'
    />
        <label>Genre</label>
     <input type="text"
    className='form-input'
    />
    <label>Observations</label>
     <input type="text"
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
      <input type="radio" id='sticker-yes' name="yes" value="sticker"/>
      <label >Oui</label>
      <input type="radio" id='sticker-no' name="no" value="sticker" />
      <label  >Non</label>
    </div>
    </fieldset>
{/* Validate form */}

    <button type='submit'>Valider</button>
 </form>
<table>
    <thead>
    <tr>
        <td>Taille</td>
        <td>Quantité</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>XS</td>
        <td>8</td>
    </tr>
    <tr>
        <td>S</td>
        <td>7</td>
    </tr>
    <tr>
        <td>M</td>
        <td>6</td>
    </tr>
    <tr>
        <td>L</td>
        <td>3</td>
    </tr>
    <tr>
        <td>XL</td>
        <td>6</td>
    </tr>
    <tr>
        <td>XXL</td>
        <td>5</td>
    </tr>
    <tr>
        <td>XXXL</td>
        <td>8</td>
    </tr>
    </tbody>
</table>



</div>
)}

export default SuitEdit