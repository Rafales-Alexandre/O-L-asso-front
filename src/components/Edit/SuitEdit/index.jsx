
/* eslint-disable max-len */
import React, { useState } from 'react';

import PropTypes from 'prop-types';

function SuitEdit({ data }) {
  const [suitData, setSuitData] = useState({
    label: data[0].label,
    gender: data[0].gender,
    observation: data[0].observation,
    quantity_s: data[0].quantity_s,
    quantity_m: data[0].quantity_m,
    quantity_l: data[0].quantity_l,
    quantity_xl: data[0].quantity_xl,
    quantity_xxl: data[0].quantity_xxl,
    quantity_xxxl: data[0].quantity_xxxl,
  });

  const onChange = (e) => {
    setSuitData({
      ...suitData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmitFormSuit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-wrap -mx-3 mb-6'>
      <form 
    onSubmit={onSubmitFormSuit}
    className="w-full max-w-lg">
        <div className='flex flex-wrap -mx-3 mb-6'>
        <Input
          label="Label"
          name="label"
          type="text"
          placeholder={data[0].label}
          value={suitData.label}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
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
</div> */
  );
}
</div>
</div>
)};

SuitEdit.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      observation: PropTypes.string.isRequired,
      quantity_s: PropTypes.string.isRequired,
      quantity_m: PropTypes.string.isRequired,
      quantity_l: PropTypes.string.isRequired,
      quantity_xl: PropTypes.bool.isRequired,
      quantity_xxl: PropTypes.string.isRequired,
      quantity_xxxl: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default SuitEdit;
