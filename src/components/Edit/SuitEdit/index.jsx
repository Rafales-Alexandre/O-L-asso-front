import { useMutation } from '@apollo/client';
import { Update_Suit } from '../../../actions/userActions';
// import PropTypes from 'prop-types';

const SuitEdit= ({OnSubmitFormSuit, onChange}) => {
    return(
<div className='flex flex-wrap -mx-3 mb-6'>
    <form 
    onSubmit={OnSubmitFormSuit}
    className="w-full max-w-lg">
        <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forhtml='grid-label'>
                Label
                </label>
                    <input type="text"
                    className='appearance-none block w-full bg-black-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
                    id='grid-label'
                    onChange={onChange}
                    value=""
                    />
            </div>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>   
                <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forhtml='grid-suit-gender'>
                Genre
                </label>
                    <input type="text"
                    className='appearance-none block w-full bg-black-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
                    id='grid-suit-gender'
                    onChange={onChange}
                    value=""
                    />
            </div>
        </div>
        <div className='w-full px-3'>
            <label className='block uppercase tracking-wide text-black-700 text-xs font-bold mb-2' forhtml='grid-suit-observations'>
            Observations
            </label>
                <textarea 
                rows="5"
                className='appearance-none block w-full bg-black-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' 
                id='grid-suit-observations'
                />
        </div>


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
 <div className="relative overflow-x-auto">
<table className="table-zebra  border-collapse border border-slate-400 ...">
    <thead>
    <tr>
        <td >Taille</td>
        <td  >Quantité</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td >XS</td>
        <td >8</td>
    </tr>
    <tr>
        <td className="border border-slate-300 ... ">S</td>
        <td className="border border-slate-300 ... ">7</td>
    </tr>
    <tr>
        <td className="border border-slate-300 ... ">M</td>
        <td className="border border-slate-300 ... ">6</td>
    </tr>
    <tr>
        <td className="border border-slate-300 ... ">L</td>
        <td className="border border-slate-300 ... ">3</td>
    </tr>
    <tr>
        <td className="border border-slate-300 ... ">XL</td>
        <td className="border border-slate-300 ... ">6</td>
    </tr>
    <tr>
        <td className="border border-slate-300 ... ">XXL</td>
        <td className="border border-slate-300 ... ">5</td>
    </tr>
    <tr>
        <td className="border border-slate-300 ... ">XXXL</td>
        <td className="border border-slate-300 ... ">8</td>
    </tr>
    </tbody>
</table>


</div>
</div>
)}

export default SuitEdit