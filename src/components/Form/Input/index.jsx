import React from 'react';
import PropTypes from 'prop-types';

function Input({
  label, name, type, placeholder = '', onChange, value, inputSizeClass = ''
}) {
  return (
    <div className={`w-full px-3 ${inputSizeClass}`}>
      <label
        className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
        htmlFor={`input-${name}`}
      >
        {label}
        <input
          type={type}
          name={name}
          className="input input-bordered"
          id={`input-${name}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,

};

export default Input;
