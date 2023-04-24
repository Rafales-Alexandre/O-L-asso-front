import React from "react";
import PropTypes from "prop-types";

function Input({ label, name, type, placeholder = '', onChange, value, inputSizeClass = '' }) {
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
          className="appearance-none block w-full bg-gray-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
  type: PropTypes.oneOf(['text', 'date', 'number', 'textarea', 'email']).isRequired,
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
