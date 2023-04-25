import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Input from '../../Form/Input';
/* import Radio from '../../Form/Radio'; */
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

      {/*  <fieldset>
        <legend>Sticker</legend>
        <Radio
          label="Sticker"
          name="sticker"
          onChange={onChange}
          options={[
            {
              label: 'Oui',
              value: 'true',
            },
            {
              label: 'Non',
              value: 'false',
            },
          ]}
        />
      </fieldset> */}
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
