import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createSuit } from '../../../actions/suitActions';
import Input from '../../Form/Input';
import Button from '../../Form/Button';

export default function SuitCreate({ data = [], closeModal }) {
  const dispatch = useDispatch();

  const [suitData, setSuitData] = useState({
    label: '',
    gender: '',
    observation: '',
    quantity_s: '',
    quantity_m: '',
    quantity_l: '',
    quantity_xl: '',
    quantity_xxl: '',
    quantity_xxxl: '',
  });

  const onChange = (e) => {
    setSuitData({
      ...suitData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmitFormSuit = (e) => {
    e.preventDefault();
    dispatch(createSuit(suitData));
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
          placeholder=""
          value={suitData.label}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
        <Input
          label="Genre"
          name="gender"
          type="text"
          placeholder=""
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
          placeholder=""
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
      {/* Validate form */}
      <Button>Valider</Button>
    </form>
  );
}

SuitCreate.propTypes = {
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
