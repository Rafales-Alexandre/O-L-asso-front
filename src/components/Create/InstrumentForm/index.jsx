import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createInstrument, updateInstrument } from '../../../actions/instrumentActions';
import Input from '../../Form/Input';
import Radio from '../../Form/Radio';
import Button from '../../Form/Button';

function InstrumentForm({ data = [], isEditMode = false, closeModal}) {
  const dispatch = useDispatch();

  const [instruData, setInstruData] = useState({
    code: '',
    pupitre: 'Basse1',
    observation: '',
    depth: 0,
    rods: 0,
    weight: 0,
    sticker: false,
  });

  useEffect(() => {
    if (isEditMode && data.length > 0 && data[0]){
        setInstruData(data[0]);
    }
  }, [isEditMode, data]);

  const onChange = (e) => {
    const value = e.currentTarget.name === 'sticker' ? e.currentTarget.value === 'true' : e.currentTarget.value;
    setInstruData({
      ...instruData,
      [e.currentTarget.name]: value,
    });
  };

  const onSubmitFormInstru = (e) => {
    e.preventDefault();
    const instruDataToSend = {
      code: instruData.code,
      pupitre: instruData.pupitre,
      observation: instruData.observation,
      depth: instruData.depth,
      rods: instruData.rods,
      weight: instruData.weight,
      sticker: instruData.sticker,
    };
  
    if (isEditMode) {
      dispatch(updateInstrument(data[0].id, instruDataToSend));
    } else {
      dispatch(createInstrument({...instruDataToSend}));
    }
    closeModal();
  };

  return (
    <form onSubmit={onSubmitFormInstru} className="md:w-2/3 m-auto mt-8">
      <h1 className="my-8 text-3xl font-semibold">Ajouter un instrument</h1>
        <Input
          label="Code"
          name="code"
          type="text"
          placeholder={isEditMode ? data[0].code : ''}
          value={instruData.code}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Pupitre"
          name="pupitre"
          type="text"
          placeholder={isEditMode ? data[0].pupitre : ''}
          value={instruData.pupitre}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Observation"
          name="observation"
          type="textarea"
          placeholder={isEditMode ? data[0].observation : ''}
          value={instruData.observation}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Tirant"
          name="depth"
          type="text"
          placeholder={isEditMode ? data[0].depth : ''}
          value={instruData.depth ? instruData.depth.toString() : ''}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Profondeur"
          name="rods"
          type="text"
          placeholder={isEditMode ? data[0].rods : ''}
          value={instruData.rods ? instruData.rods.toString() : ''}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Poids"
          name="weight"
          type="text"
          placeholder={isEditMode ? data[0].weight : ''}
          value={instruData.weight ? instruData.weight.toString() : ''}
          onChange={onChange}
          inputSizeClass=""
        />
      <fieldset>
        <Radio
            label="Sticker"
            name="sticker"
            value={instruData.sticker ? 'true' : 'false'}
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
      </fieldset>
    <Button>Valider</Button>
    </form>
    );
}
              
InstrumentForm.propTypes = {
data: PropTypes.arrayOf(
PropTypes.shape({
code: PropTypes.string.isRequired,
pupitre: PropTypes.string.isRequired,
observation: PropTypes.string.isRequired,
depth: PropTypes.number,
rods: PropTypes.number.isRequired,
weight: PropTypes.number.isRequired,
sticker: PropTypes.bool.isRequired,
}),
),
isEditMode: PropTypes.bool.isRequired,
closeModal: PropTypes.func.isRequired,
};

InstrumentForm.defaultProps = {
data: [{ depth: 0 }],
};

export default InstrumentForm;
