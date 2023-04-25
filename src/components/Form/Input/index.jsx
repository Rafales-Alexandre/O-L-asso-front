import React from "react";
// import PropTypes from 'prop-types';

function Input({
  label,
  name,
  type,
  placeholder = "",
  onChange,
  value,
  inputSizeClass = "",
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

export default Input;
