import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Input from '../../Form/Input';
import Button from '../../Form/Button';

function SuitEdit({ data }) {
  const [suitData, setSuitData] = useState({
    label: data[0] && data[0].label,
    gender: data[0] && data[0].gender,
    observation: data[0] && data[0].observation,
    quantity_s: data[0] && data[0].quantity_s,
    quantity_m: data[0] && data[0].quantity_m,
    quantity_l: data[0] && data[0].quantity_l,
    quantity_xl: data[0] && data[0].quantity_xl,
    quantity_xxl: data[0] && data[0].quantity_xxl,
    quantity_xxxl: data[0] && data[0].quantity_xxxl,
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
    <form
      onSubmit={onSubmitFormSuit}
      className="w-full max-w-lg"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          label="Label"
          name="label"
          type="text"
          placeholder={data[0].label}
          value={suitData.label}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
        <Input
          label="Genre"
          name="gender"
          type="text"
          placeholder={data[0].gender}
          value={suitData.gender}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
      </div>
      <div className="w-full px-3">
        <Input
          label="Osbervation"
          name="observation"
          type="textarea"
          placeholder={data[0].observation}
          value={suitData.observation}
          onChange={onChange}
          inputSizeClass="md:w-1/1"
        />
      </div>
      <div className="relative overflow-x-auto">
        <table className="table-zebra  border-collapse border border-slate-400 ...">
          <thead>
            <tr>
              <td>Taille</td>
              <td>Quantité</td>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td className="border border-slate-300 ... ">S</td>
              <td className="border border-slate-300 ... ">
                <input
                  type="number"
                  name="quantity_s"
                  value={suitData.quantity_s}
                  placeholder={data[0].quantity_s}
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 ... ">M</td>
              <td className="border border-slate-300 ... ">
                <input
                  type="number"
                  name="quantity_m"
                  value={suitData.quantity_m}
                  placeholder={data[0].quantity_m}
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 ... ">L</td>
              <td className="border border-slate-300 ... ">
                <input
                  type="number"
                  name="quantity_l"
                  value={suitData.quantity_l}
                  placeholder={data[0].quantity_l}
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 ... ">XL</td>
              <td className="border border-slate-300 ... ">
                <input
                  type="number"
                  name="quantity_xl"
                  value={suitData.quantity_xl}
                  placeholder={data[0].quantity_xl}
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 ... ">XXL</td>
              <td className="border border-slate-300 ... ">
                <input
                  type="number"
                  name="quantity_xxl"
                  value={suitData.quantity_xxl}
                  placeholder={data[0].quantity_xxl}
                />
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 ... ">XXXL</td>
              <td className="border border-slate-300 ... ">
                <input
                  type="number"
                  name="quantity_xxxl"
                  value={suitData.quantity_xxxl}
                  placeholder={data[0].quantity_xxxl}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Validate form */}
      <Button>Valider</Button>
    </form>
  );
}

SuitEdit.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      observation: PropTypes.string.isRequired,
      quantity_s: PropTypes.number.isRequired,
      quantity_m: PropTypes.number.isRequired,
      quantity_l: PropTypes.number.isRequired,
      quantity_xl: PropTypes.number.isRequired,
      quantity_xxl: PropTypes.number.isRequired,
      quantity_xxxl: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SuitEdit;
