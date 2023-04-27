import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createSuit, updateSuit } from '../../../actions/suitActions';
import Input from '../../Form/Input';
import Button from '../../Form/Button';

function SuitForm({ data = [], isEditMode = false, closeModal }) {
  const dispatch = useDispatch();

  const [suitData, setSuitData] = useState({
    label: '',
    gender: 'F',
    observation: '',
    quantity_s: 0,
    quantity_m: 0,
    quantity_l: 0,
    quantity_xl: 0,
    quantity_xxl: 0,
    quantity_xxxl: 0,
  });

  useEffect(() => {
    if (isEditMode && data.length > 0 && data[0]) {
      setSuitData(data[0]);
    }
  }, [isEditMode, data]);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setSuitData({
      ...suitData,
      [name]: name.startsWith('quantity_') ? parseInt(value, 10) || 0 : value,
    });
  };

  const onSubmitFormSuit = async (e) => {
    e.preventDefault();
    const suitDataToSend = {
        label: suitData.label,
        gender: suitData.gender,
        observation: suitData.observation,
        quantity_s: suitData.quantity_s,
        quantity_m: suitData.quantity_m,
        quantity_l: suitData.quantity_l,
        quantity_xl: suitData.quantity_xl,
        quantity_xxl: suitData.quantity_xxl,
        quantity_xxxl: suitData.quantity_xxxl,
      };
    if (isEditMode) {
      dispatch(updateSuit(data[0].id, suitDataToSend));
    } else {
      dispatch(createSuit({ ...suitData }));
    }
    closeModal();
  };

  return (
    <form onSubmit={onSubmitFormSuit} className="w-full max-w-lg">
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
          label="Observation"
          name="observation"
          type="textarea"
          placeholder=""
          value={suitData.observation}
          onChange={onChange}
          inputSizeClass="md:w-1/1"
        />
      </div>
      <div className="relative overflow-x-auto">
        <table className="table-zebra border-collapse border border-slate-400">
          <thead>
            <tr>
              <td>Taille</td>
              <td>Quantité</td>
            </tr>
          </thead>
          <tbody>
            {['s', 'm', 'l', 'xl', 'xxl', 'xxxl'].map((size) => (
              <tr key={size}>
                <td className="border border-slate-300">{size.toUpperCase()}</td>
                <td className="border border-slate-300">
                  <input
                    type="number"
                    name={`quantity_${size}`}
                    value={suitData[`quantity_${size}`]}
                    placeholder=""
                    onChange={onChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button>Valider</Button>
    </form>
  );
}

SuitForm.propTypes = {
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
      isEditMode: PropTypes.bool.isRequired,
      closeModal: PropTypes.func.isRequired,
      };
      
      export default SuitForm;
