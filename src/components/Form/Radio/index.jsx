/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Radio({
  label,
  name,
  onChange,
  options,
}) {
  return (
    <div className="form-control">
      <label
        className="label cursor-pointer"
      >
        <span className='label-text font-semibold md:text-base'>{label}</span>
      </label>
      {
        options.map((option) => {
          const id = uuidv4();
          return (
            <div key={id}>
              <input
                type="radio"
                className="radio radio-lg"
                name={name}
                value={option.value}
                onChange={onChange}
                id={id}
              />
              <label className='label' htmlFor={id}>
                {option.label}
              </label>
            </div>
          );
        })
      }
    </div>
  );
}
Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Radio;
