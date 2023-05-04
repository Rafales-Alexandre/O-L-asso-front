import React from "react";
import PropTypes from "prop-types";

function Input({
  label,
  name,
  type,
  placeholder = "",
  onChange,
  value,
  inputSizeClass = "",
  required
}) {
  return (
    <div className={`${inputSizeClass}`}>
      <label
        className="max-w-screen label flex-col items-start md:flex-row "
        htmlFor={`input-${name}`}
      >
        <span className="label-text mb-2 md:mb-0 w-56 font-semibold md:text-base">
          {label}
        </span>
        <input
          type={type}
          name={name}
          className="input-bordered input w-full"
          id={`input-${name}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value === null ? '' : value} // Replace null value with an empty string
          required={required}
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
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([null, undefined]),
  ]),
  inputSizeClass: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  placeholder: null,
  inputSizeClass: "",
  value: null,
  required: false,
};

export default Input;
