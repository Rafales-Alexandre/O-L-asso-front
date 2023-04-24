import React from 'react';
import PropTypes from 'prop-types';

function Radio({
  label,
  name,
  onChange,
  id,
  options,
}) {
  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
        htmlFor={`${name}`}
      >
        {label}
        <input
          type="radio"
          className="appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name={name}
          key={id}
          id={`${name}`}
        />
        {
        options.map((option) => (
          <option
            value={option.value}
            onChange={onChange}
          >
            {option.label}
          </option>
        ))
          }
      </label>
    </div>
  );
}
Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Radio;
