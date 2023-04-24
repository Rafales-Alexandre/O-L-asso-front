import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Input from '../../Form/Input';
import Radio from '../../Form/Radio';
import Button from '../../Form/Button';

function InstrumentEdit({ data }) {
  const [instruData, setInstruData] = useState({
    code: data[0].code,
    pupitre: data[0].pupitre,
    observation: data[0].observation,
    depth: data[0].depth,
    rods: data[0].rods,
    weight: data[0].weight,
    sticker: data[0].sticker,
  });

  const onChange = (e) => {
    setInstruData({
      ...instruData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmitFormInstru = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitFormInstru}
    >
      <div>
        <Input
          label="Code"
          name="code"
          type="text"
          placeholder={data[0].code}
          value={instruData.code}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
        <Input
          label="Pupitre"
          name="pupitre"
          type="text"
          placeholder={data[0].pupitre}
          value={instruData.pupitre}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
      </div>
      <div>
        <Input
          label="Osbervation"
          name="observation"
          type="textarea"
          placeholder={data[0].observation}
          value={instruData.observation}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
      </div>
      <div>
        <Input
          label="Tirant"
          name="depth"
          type="text"
          placeholder={data[0].depth}
          value={instruData.depth ? instruData.depth.toString() : ''}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />
        <Input
          label="Profondeur"
          name="rods"
          type="text"
          placeholder={data[0].rods}
          value={instruData.rods ? instruData.rods.toString() : ''}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />
        <Input
          label="Poids"
          name="weight"
          type="text"
          placeholder={data[0].weight}
          value={instruData.weight ? instruData.weight.toString() : ''}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />
      </div>
      <fieldset>
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
      </fieldset>
      {/* Validate form */}

      <Button>Valider</Button>
    </form>
  );
}
InstrumentEdit.propTypes = {
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
  ).isRequired,
};
InstrumentEdit.defaultProps = {
  data: [{ depth: 0 }],
};
export default InstrumentEdit;
