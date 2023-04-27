import React from 'react';
import PropTypes from 'prop-types';

function Input({
  label, name, type, placeholder = '', onChange, value, inputSizeClass = '',
}) {
  return (
    <div className={`${inputSizeClass}`}>
      <label className="label" htmlFor={`input-${name}`}>
        <span className="label-text pr-4 font-semibold md:text-base">
          {label}
        </span>
        <input
          type={type}
          name={name}
          className="input-bordered input w-full max-w-xs"
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
  type: PropTypes.oneOf(['text', 'date', 'number', 'textarea', 'email', 'tel', 'file']).isRequired,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([null, undefined]),
  ]),
  inputSizeClass: PropTypes.string,
};
Input.defaultProps = {
  placeholder: null,
  inputSizeClass: '',
  value: null,
};
export default Input;
