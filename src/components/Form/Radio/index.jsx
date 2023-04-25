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
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
      >
        {label}
      </label>
      {
        options.map((option) => {
          const id = uuidv4();
          return (
            <div key={id}>
              <input
                type="radio"
                className="appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name={name}
                value={option.value}
                onChange={onChange}
                id={id}
              />
              <label htmlFor={id}>
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
