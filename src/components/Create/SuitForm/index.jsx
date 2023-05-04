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
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  
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
    setShowConfirmModal(true);
    setTimeout(()=>{
      closeModal()},2000)
      ;
    };
    
    return (
    <form onSubmit={onSubmitFormSuit} className="md:w-2/3 m-auto mt-8">
      <h1 className="my-8 text-3xl font-semibold">{isEditMode ? 'Editer' : 'Ajouter'} un costume</h1>
      <div>
        <Input
          label="Label"
          name="label"
          type="text"
          placeholder=""
          value={suitData.label}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Genre"
          name="gender"
          type="text"
          placeholder=""
          value={suitData.gender}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Observation"
          name="observation"
          type="textarea"
          placeholder=""
          value={suitData.observation}
          onChange={onChange}
          inputSizeClass=""
        />
      </div>
        <table className="table w-full my-8">
          <thead>
            <tr>
              <th>Taille</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {['s', 'm', 'l', 'xl', 'xxl', 'xxxl'].map((size) => (
              <tr key={size}>
                <th className="border border-base-300">{size.toUpperCase()}</th>
                <td className="border border-base-300">
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
        <Button >Valider</Button>
    {showConfirmModal && (
        <div className={`modal modal-bottom sm:modal-middle ${showConfirmModal ? 'modal-open' : ''}`}>
          <div className='modal-box  '>
            <h3 className='font-bold text-lg'> {`${isEditMode ? 'Costume modifié' : 'Génial, un nouveau costume'}`}</h3>
          </div>
        </div>
      )}
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
